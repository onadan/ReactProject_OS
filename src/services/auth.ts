import axios from "axios";
import { API_URL } from "../constants/API";


export interface ISignUp {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export const signup = async (userData: ISignUp) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signUp`, userData);
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};

export const login = async (userData: ILogin) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    const access = response.data.result.token;

    localStorage.setItem("token", access);
  } catch (error) {
    throw error;
  }
};

export const logout =async()=>{
  try{
    localStorage.removeItem("token");

  }
  
  catch(error){

  }
}
