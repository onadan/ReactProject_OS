import React from "react";
import { Formik, Form, Field } from "formik";
import signup from "../../services/auth";

const SignUp: React.FC<{}> = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          try {
            const result = await signup(values);
            console.log("Signup successful:", result);
          } catch (error) {
            console.error("Signup failed:", error);
          } finally {
            actions.setSubmitting(false);
          }
        }}
      >
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
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-start text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Field
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              placeholder="Email"
            />
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
          </div>
          <div className="flex justify-center items-center ">
            <div className="flex justify-between items-center text-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
