import React, { useState } from 'react';

const TransactionForm = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [description, setDescription] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform the logic to handle the transaction submission
    console.log('Transaction submitted:', { amount, recipient, description });
  };

  return (
    <div className="bg-sky-300 p-6 rounded shadow-md max-w-xs mx-auto">
      <h2 className="text-xl text-blue-900 font-semibold mb-4">USD Transaction Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Amount (USD)</label>
          <input
            type="number"
            className="mt-1 p-2 w-full border rounded"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Recipient</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded"
            value={recipient}
            onChange={handleRecipientChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Description</label>
          <textarea
            className="mt-1 p-2 w-full border rounded"
            rows="3"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
nn          Submit Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
