import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Login = () => {
  const navigate = useNavigate(); // Get the navigate function

  const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = async (values) => {
    try {
      // Simulate API call for login
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Successful login
        navigate('/Dashboard'); // Navigate to the dashboard
      } else {
        // Handle failed login
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <div className="login">
        <div>
        <h1 className='text-yellow-500'>WITCO </h1>
        </div>
      <div className="w-1/3 bg-gray-500 p-8 rounded shadow">
        <h2 className="text-2xl text-yellow-500 font-bold mb-4">Login to Your Account</h2>
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

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Log In
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

export default Login;

