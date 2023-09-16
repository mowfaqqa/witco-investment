
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    Bitcoin: 4000,
    USD: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    Bitcoin: 3000,
    USD: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    Bitcoin: 2000,
    USD: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    Bitcoin: 2780,
    USD: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    Bitcoin: 1890,
    USD: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    Bitcoin: 2390,
    USD: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    Bitcoin: 3490,
    USD: 4300,
    amt: 2100,
  },
];

function TransactionChart() {
  return (
    <div className='h-[22rem] bg-blue-200 p-4 rounded-sm boder border-gray-600 flex flex-col flex-1'>
    <strong className='text-yellow-500 font-bold'>Transactions</strong>

    <div className='w-full mt-4 flex-1  text-xx'>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3 0 0" vertical={false}/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="USD" fill="#f59e0b" />
        <Bar dataKey="Bitcoin" fill="#60d9e9" />
      </BarChart>
    </ResponsiveContainer>
    </div>

    </div>
  );

  
}
export default TransactionChart