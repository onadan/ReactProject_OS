
import { IProject,createProject } from '../../redux/feature/project/projectAction';
import React, { Fragment } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {  useAppDispatch } from '../../redux/stores';
const CreateProject: React.FC = () => {
  const navigate =useNavigate()
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<IProject>();

  const onSubmit: SubmitHandler<IProject> = async(data) =>{
    await dispatch(createProject(data))
    reset()
    navigate('/projects')
  } 

  return (
    <Fragment>
      <h6 className='font-bold'>Create Project</h6>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-full mx-auto p-4 bg-white shadow-md rounded-md ">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm  font-bold mb-2">Title:</label>
        <input
          placeholder="Enter Project Title"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:shadow-outline-blue"
          {...register('title', { required: 'Title is required' })}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div className="flex flex-row space-x-4">
        <div className="mb-4  w-1/2">
          <label className="block text-gray-700 text-sm  font-bold mb-2">Start Date:</label>
          <input
            className="border rounded p-2 w-full"
            type="date"
            {...register('startDate', { required: 'Start Date is required' })}
          />
          {/* {errors.startDate && <p>{errors.startDate.message}</p>} */}
        </div>

        <div className="mb-4  w-1/2">
          <label className="block text-gray-700 text-sm  font-bold mb-2">End Date:</label>
          <input
            className="border rounded p-2 w-full"
            type="date"
            {...register('endDate', { required: 'End Date is required' })}
          />
          {/* {errors.endDate && <p>{errors.endDate.message}</p>} */}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
        <textarea
          placeholder="Enter project Description"
          className="border rounded-md px-3 py-2 w-full focus:outline-none focus:shadow-outline-blue"
          {...register('description', { required: 'Description is required' })}
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      
      <div className="flex flex-row space-x-4 justify-end">
      <div className="mb-4 text-right">
        <button type="button" className="text-white rounded p-2 bg-red-700">
          Cancel
        </button>
      </div>
      <div className="mb-4 text-right ml-auto">
        <button type="submit" className="text-white rounded p-2 bg-blue-700">
          Submit
        </button>
      </div>
    </div>
    </form>

    </Fragment>
  );
};

export default CreateProject;
