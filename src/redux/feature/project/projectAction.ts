import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { GetProjectArgs, IProject } from "./types";
import axiosHttp  from "../../../utils/setAuthToken";


  export const createProject = createAsyncThunk(
    "project/create",
    async (projectData: IProject, { rejectWithValue }) => {
      try {
        const token = localStorage.getItem("token");
  
        if (!token) {
          // Handle the case where the token is not available
          throw new Error("Token not available");
        }
  
        const config = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        };
  
        await axios.post(`${axiosHttp}/project/create`, projectData, config);
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
    async (_,{rejectWithValue}) => {
      try {
      const response = await axiosHttp.get('/project/all');
      console.log(response.data.result,'test ')
      return response.data.result
         
      } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
          }
      }
    }
    
  );
  export const GeAllMyProject = createAsyncThunk(
    "project/GeAllMyProject",
    async (_,{rejectWithValue}) => {
      try {
       const result = await axios.get(`${axiosHttp}/project/all/myprojects`);
          return result.data.result
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
        const response = await axios.get(`${axiosHttp}/project/${projectId}`);
        return response.data.result;
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
        const response = await axios.delete(`${axiosHttp}/project/${projectId}`);
        return response.data.result;
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
        const response = await axios.patch(`${axiosHttp}/project/${projectId}`, projectData, config);
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
        const response = await axios.patch(`${axiosHttp}/project/assignTo/${projectId}`, projectData, config);
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
       const result = await axios.get(`${axiosHttp}/project/dashboard/totals`);
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
       const result = await axios.get(`${axiosHttp}/project/dashboard/user/totals`);
          return result.data
      } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
          }
      }
    }
    
  );