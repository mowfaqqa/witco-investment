 import React from 'react' ;
import LogoutPage from './LogoutPage'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
 
 export default function Profile() {
   return (
    <div className="app">
    <Navbar />


    <div>
        <div className="container mx-auto p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Welcome, !</h1>
        <p>Your Account Number: </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Account Overview</h2>
          {/* Display account balances, account types, etc. */}
          {/* Include buttons for transferring funds, paying bills, and viewing statements */}
        </div>

        <div>
          <h2 className="text-xl font-semibold">Transaction History</h2>
          {/* Display a list of recent transactions */}
          {/* Include pagination and sorting options */}
        </div>
      </div>

      <div className="mt-4">
        <Link to="/profile/edit" className="text-blue-500">
          Edit Profile
        </Link>
        <button className="ml-4 bg-red-500 text-white py-2 px-4 rounded" onClick={LogoutPage}>
          Logout
        </button>
      </div>
    </div>
     </div>
   
   
  </div>


     
   )
 }
 

