import React, { useState } from 'react';

const BitcoinForm = () => {
  const [senderAddress, setSenderAddress] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Bitcoin transfer logic here
    console.log('Bitcoin transfer initiated:', {
      senderAddress,
      receiverAddress,
      amount,
    });
  };

  return (
    <div className="bg-sky-300 shadow-md rounded-md p-6 max-w-xs mx-auto">
      <h2 className="text-lg text-blue-900 font-semibold mb-4">Bitcoin Transfer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Sender Address</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            value={senderAddress}
            onChange={(e) => setSenderAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Receiver Address</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            value={receiverAddress}
            onChange={(e) => setReceiverAddress(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Amount (BTC)</label>
          <input
            type="number"
            className="mt-1 p-2 w-full border rounded-md"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-sky-100"
        >
          Transfer Bitcoin
        </button>
      </form>
    </div>
  );
};

export default BitcoinForm;
