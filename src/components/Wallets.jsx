import React from 'react'
import { BsThreeDots } from 'react-icons/bs';
import wallet1 from "../assets/bluebtc.png";
import wallet2 from "../assets/blueusd.png"

export default function Wallets() {
   const wallets = [
      {
         name: "BTC (Bitcoin)",
         balance: "0.087710",
         USD: "9,241,123,31",
         image: wallet1,
      },
      {
         name: "USD (United States Dollar)",
         balance: "1,777,10",
         USD: "0.0459920",
         image: wallet2,
      },
   ];
   return (
      <div className="wallets">
         <div className="wallets__info">
            <h4>Wallets</h4>
            <BsThreeDots />
         </div>
         <div className="wallets__container">
         {wallets.map((wallet) => {
            return (
               <div className="wallet">
                  <img src={wallet.image} alt="" />
                  <div className="wallet__info">
                     <h3 className='wallet__info__title'>{wallet.name}</h3>
                     <div className="wallet__info__balance">
                        <h4> Balance:</h4>
                        <h3>{wallet.balance}</h3>
                     </div>
                     <div>
                        <h4> USD</h4>
                        <h4>{wallet.USD}</h4>
                     </div>
                  </div>
               </div>
            )
         })}
         </div>
         
      </div>
   )
}