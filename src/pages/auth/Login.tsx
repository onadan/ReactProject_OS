import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { ILogin, userLogin } from "../../redux/feature/auth/authActions";

interface RootState {
  auth: {
    loading: boolean;
    userInfo: any; 
    error: any;    
    success: boolean;

  };
}
const Login: React.FC<{}> = () => {
  const { loading } = useSelector((state:RootState) => state.auth);
  const dispatch = useDispatch()

  const validationSchema = Yup.object().shape({
   
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues:ILogin = {

    email: "",
    password: "",
  };
  let navigate = useNavigate();

  function validateEmail(value: string) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting,resetForm }) => {
          try {
            await dispatch(userLogin(values) as any);
          
            resetForm({ values: initialValues });
            navigate('/app');
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

export default Login;
