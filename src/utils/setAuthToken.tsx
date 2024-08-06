
import axios from "axios";
import { getAccessToken } from "./util";

export const API_URL = "https://backend-project-ww9p.vercel.app/api";
const axiosHttp = axios.create({
  baseURL: API_URL,
});

axiosHttp.interceptors.request.use(
  (config: any) => {
  
      const token = getAccessToken();
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token
      }
     
      return config
    },
  
  (error) => {
    return Promise.reject(error);
  }
);



export default axiosHttp;
