
import React from 'react' 
import Wallets from './Wallets'
import Transactions from './Transactions'
import Navbar from './Navbar'
import BitcoinForm from './BitcoinForm'
 
 export default function Usdt() {
   return (
     
    <div className="app">
    <Navbar />
    <div className='app__grid'>
      <div className="app__grid__1">
        <Wallets />
        <Transactions />
      </div>
      <div className="app__grid__2">
      <BitcoinForm/>
      </div>

    </div>

  </div>
   )
 }
