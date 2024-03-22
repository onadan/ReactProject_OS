import React, { Fragment, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../../components/ui/table';
import { RootState, useAppDispatch } from '../../redux/stores';
import { useNavigate } from 'react-router-dom';
import { GeAllMyProject, getAllProjects } from '../../redux/feature/project/projectAction';
import { useSelector } from 'react-redux';
import { formatDate, isAdmin } from '../../utils/util';
import { IProject } from '../../redux/feature/project/types';
// import { FaEye } from "react-icons/fa";
export const ProjectList: React.FC = () => {
  const projects: IProject[] | undefined = useSelector(
    (state: RootState) => state.project.projects
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const actionToDispatch = isAdmin() ? getAllProjects() : GeAllMyProject();

        await dispatch(actionToDispatch);
      } catch (error) {}
    };
    fetchData();
  }, [dispatch, isAdmin]);

  return (
    <Fragment>
      <div className="mb-4 text-right">
        {isAdmin() && (
          <button
            onClick={() => navigate('/app/project/create')}
            className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Project
          </button>
        )}
      </div>
      <h6 className='font-thin text-lg'>Projects List</h6>
      <Table className=" container mt-5">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects &&
            projects.map((project, index) => (
              <TableRow key={index}>
                <TableCell>{project.title}</TableCell>
                <TableCell>{project.status}</TableCell>
                <TableCell>{formatDate(project.startDate)}</TableCell>
                <TableCell>{formatDate(project.endDate)}</TableCell>
                <TableCell className='space-x-2'>
                  
                  <button
                    onClick={() => navigate(`/app/project/details/${project?._id}`)}
                    className="bg-blue-500 text-white px-4 py-2 rounded">
                    View
                    
                  </button>
                  <button

                    onClick={() => navigate(`/app/project/edit/${project?._id}`)}
                    className="bg-blue-500 text-white px-4 py-2 rounded">
                    Edit
                  </button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};
