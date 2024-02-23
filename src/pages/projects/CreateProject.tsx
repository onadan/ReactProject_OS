import { IProject } from '@/redux/feature/project/projectAction';
import { useForm, SubmitHandler } from 'react-hook-form';
const CreateProject = () => {
 
  const { handleSubmit, register } = useForm<IProject>();
  const onSubmit: SubmitHandler<IProject> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title', { required: true })} />
      <input {...register('description', { required: true })} />
      <input {...register('startDate', { required: true })} />
      <input {...register('endDate', { required: true })} />
      
    </form>
  );
};

export default CreateProject;
