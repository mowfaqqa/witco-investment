import React from 'react'
import Navbar from './Navbar'
import Transactions from './Transactions';
import Wallets from './Wallets'


export default function DashboardApp() {
  return (
    <div className="app">
      <Navbar />
      <div className='app__grid'>
        <div className="app__grid__1">
          <Wallets />
          <Transactions />
        </div>
        <div className="app__grid__2"></div>

      </div>
      
    </div>
  ); 
}
