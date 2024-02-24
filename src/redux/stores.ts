import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import { combineReducers } from "redux";
import logger from 'redux-logger'
import { authReducer } from './feature/auth/authSlice'
import { projectReducer } from "./feature/project/projectSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof rootReducer>; 
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
