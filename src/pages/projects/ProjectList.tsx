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
// import { useNavigate } from "react-router-dom";
import { IProject, getAllProjects } from '../../redux/feature/project/projectAction';
import { useSelector } from 'react-redux';
import { formatDate } from '../../utils/util';

export const ProjectList: React.FC = () => {
  const projects: IProject[] | undefined = useSelector(
    (state: RootState) => state.project.projects
  );

  // const navigate =useNavigate()
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
         await dispatch(getAllProjects());
       
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <Fragment>
      <div className="mb-4 text-right">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Project</button>
      </div>
      <h6>Projects List</h6>
      <Table className="mt-5">
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
                <TableCell>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">View</button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};
