import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../../constants/API";

export interface  IProject  {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    assignedTo:any
  };


  interface GetProjectArgs {
    projectId: string;
  }
  export const createProject = createAsyncThunk(
    "project/create",
    async (projectData: IProject, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        await axios.post(`${API_URL}/project/create`, projectData, config);
      } catch (error: any) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
    
  );
  export const getAllProjects = createAsyncThunk(
    "project/getAllProjects",
    async ({},{rejectWithValue}) => {
      try {
       const result = await axios.get(`${API_URL}/project/all`);
          return result.data
      } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
          }
      }
    }
    
  );
  export const GeAllMytProject = createAsyncThunk(
    "project/GeAllMytProject",
    async ({},{rejectWithValue}) => {
      try {
       const result = await axios.get(`${API_URL}/project/all/myprojects`);
          return result.data
      } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
          }
      }
    }
    
  );

  export const GetProjectById = createAsyncThunk(
    'project/GetProjectById',
    async ({ projectId }: GetProjectArgs, { rejectWithValue }) => {
      try {
        const response = await axios.get(`${API_URL}/project/${projectId}`);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } 
      }
    }
  )
  
  export const deleteProjectById = createAsyncThunk(
    'project/deleteProjectById',
    async ({ projectId }: GetProjectArgs, { rejectWithValue }) => {
      try {
        const response = await axios.delete(`${API_URL}/project/${projectId}`);
        return response.data;
      } catch (error:any) {
        if (axios.isAxiosError(error) && error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } 
        else{
            return rejectWithValue(error.message);
        }
      }
    }
  )
  export const UpdateProjectById = createAsyncThunk(
    'project/UpdateProjectById',
    async ({ projectId, projectData }: { projectId: string; projectData: IProject }, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await axios.patch(`${API_URL}/project/${projectId}`, projectData, config);
        return response.data;
      } catch (error:any) {
        if (axios.isAxiosError(error) && error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
        
          return rejectWithValue(error.message);
        }
      }
    }
  );
  export const assignProjectById = createAsyncThunk(
    'project/assignProjectById',
    async ({ projectId, projectData }: { projectId: string; projectData: IProject }, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await axios.patch(`${API_URL}/project/assignTo/${projectId}`, projectData, config);
        return response.data;
      } catch (error:any) {
        if (axios.isAxiosError(error) && error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
        
          return rejectWithValue(error.message);
        }
      }
    }
  );


  export const GetAllProjectDashboard = createAsyncThunk(
    "project/GetAllProjectDashboard",
    async ({},{rejectWithValue}) => {
      try {
       const result = await axios.get(`${API_URL}/project/dashboard/totals`);
          return result.data
      } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
          }
      }
    }
    
  );
  export const GetUserProjectDashboard = createAsyncThunk(
    "project/GeAllProjectDashboard",
    async ({},{rejectWithValue}) => {
      try {
       const result = await axios.get(`${API_URL}/project/dashboard/user/totals`);
          return result.data
      } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
          }
      }
    }
    
  );