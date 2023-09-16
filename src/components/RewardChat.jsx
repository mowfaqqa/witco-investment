import React from 'react';
import TransactionChart from './TransactionChart'
import Navbar from './Navbar';
const RewardChat = () => {
  const rewards = [
    { name: 'Discount Coupon', points: 100 },
    { name: 'Free Product', points: 200 },
    { name: 'VIP Access', points: 300 },
    // Add more reward items as needed
  ];

  return (
    <div className="app">
    <Navbar />
   
    <div className="min-h-screen  py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl text-white font-semibold mb-6">Customer Rewards</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-sky-300 ">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="bg-whiten p-4 rounded-lg shadow-md bg-blue-900 flex flex-col justify-between"
            >
              <h2 className="text-lg text-yellow-500 font-semibold">{reward.name}</h2>
              <p className="text-white">Redeem with {reward.points} points</p>
              <button
                className="mt-4 px-3 py-2 bg-yellow-500 text-sky-100 rounded-md hover:bg-blue-600"
              >
                Redeem
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full mt-5'>
         <TransactionChart />
      </div>

    
    </div>

    

  </div>
   
  );
};

export default RewardChat;
