// signupService.js
import axios from "axios";

const API_URL = 'http://localhost:3001/api';

 export interface ISignUp {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }
const signup = async (userData:ISignUp) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signUp`, userData);
    return response.data; 
  } catch (error) {
    
    console.error("Signup failed:", error);
    throw error;
  }
};

export default signup;
