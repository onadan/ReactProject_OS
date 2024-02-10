import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import {combineReducers} from "redux";
import logger from 'redux-logger'
import {authReducer} from  './feature/auth/authSlice'

const rootReducer = combineReducers({
  auth: authReducer

})
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
export default store