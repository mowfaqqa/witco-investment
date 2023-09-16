import React from 'react';
// import { useHistory } from 'react-router-dom'; // Assuming you are using React Router for navigation

const LogoutPage = () => {
//   const history = useHistory();

  const handleLogout = () => {
    // Perform logout logic here, such as clearing user authentication token or state
    // For this example, let's assume we are clearing a token from localStorage
    localStorage.removeItem('authToken');

    // Redirect to a different route after logout (you can customize this)
   //  history.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Logout</h1>
        <p className="mb-4">Are you sure you want to log out?</p>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
