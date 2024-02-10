import React from "react";
import { Formik, Form, Field } from "formik";
import {ISignUp} from "../../services/auth";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from "../../redux/feature/auth/authActions";


interface RootState {
  auth: {
    loading: boolean;
    userInfo: any; 
    error: any;    
    success: boolean;

  };
}
const SignUp: React.FC<{}> = () => {
  const { loading } = useSelector((state:RootState) => state.auth);
  const dispatch = useDispatch()

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  


  const initialValues:ISignUp = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  
  };

  function validateEmail(value: string) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  let navigate = useNavigate();
  

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting,resetForm }) => {
          try {
            await dispatch(registerUser(values) as any);
          
            resetForm({values})
 
            navigate('/auth/login');
          } catch (error) {
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4 ">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  text-start font-bold mb-2"
                htmlFor="firstname"
              >
                First Name
              </label>
              <Field
                className="shadow appearance-none border  text-start rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstname"
                name="firstname"
                placeholder="First Name"
              />
              {errors.firstname && touched.firstname ? (
                <div>{errors.firstname}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700  text-start text-sm font-bold mb-2"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastname"
                name="lastname"
                placeholder="Last Name"
              />
              {errors.lastname && touched.lastname ? (
                <div>{errors.lastname}</div>
              ) : null}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-start text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <Field
                validate={validateEmail}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                placeholder="Email"
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-start text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <Field
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="******************"
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>
            <div className="flex justify-center items-center ">
              <div className="flex justify-between items-center text-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isSubmitting}
                >
                   {loading ? 'Submitting...' : 'Submit'}
                 
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
