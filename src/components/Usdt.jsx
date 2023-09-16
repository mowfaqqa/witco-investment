import React from 'react' 
import Navbar from './Navbar'
import TransactionForm from './TransactionForm'
import Wallets from './Wallets'
import Transactions from './Transactions'
 
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
      <TransactionForm/>
      </div>

     </div>

    </div>

   )
 }
 