import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = async (values) => {
    try {
      // Simulate API call for signup
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Successful signup, you can optionally navigate to the login page
        navigate('/'); // Navigate to the login page
      } else {
        // Handle failed signup
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <div className="flex justify-center bg-sky-100 items-center h-screen">
      <div>
        <h1 className='text-yellow-500'>WITCO</h1>
      </div>
      <div className="w-1/3 bg-gray-500 p-8 rounded shadow">
        <h2 className="text-2xl text-yellow-500 font-bold mb-4">Create Your Account</h2>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <div className="mb-4 text-white">
              <label htmlFor="username" className="block font-medium mb-1">
                Username
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="username" component="div" className="text-red-500" />
            </div>

            <div className="mb-4 text-white">
              <label htmlFor="password" className="block font-medium mb-1">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>

            <div className="mb-4 text-white">
              <label htmlFor="confirmPassword" className="block font-medium mb-1">
                Confirm Password
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
      <div>
        <h1><span className='text-yellow-500 font-bold'>INVESTMENTS</span></h1>
      </div>
    </div>
  );
};

export default Signup;
