import React from 'react'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    data2: 2000,
    data1: 2400,
  },
  {
    data2: 4000,
    data1: 1398,
  },
  {
    data2: 5000,
    data1: 12800,
  },
  {
    data2: 8780,
    data1: 3908
  },
  {
    data2: 9890,
    data1: 4800,
  },
  {
    data2: 11390,
    data1: 3800,
  },
  {
    data2: 3490,
    data1: 4300,
  },
]

export default function Transactions() {
  return (
    <div className="transactions">
      <div className="transactions__info">
        <h3>Transactios</h3>
        <div className="transactions__info__detailed">
         <div>
           <h5>You  Bought </h5>
           <h4>$146,734.04</h4>
         </div>
         <div>
           <h5>You solid</h5>
           <h4>$347,735,011.14</h4>
         </div>
        </div>
      </div>
      <div className="transactions__details">
        <div>
          <h4>Statistics</h4>
          <h4>Up by 50%</h4>
        </div>
        <div>
          <button>Year</button>
          <button>Month</button>
        </div>
      </div>
      <div className="transactions__graph">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={500} height={400} data={data} margin={{ top: 10 }}>
            <defs>
              <linearGradient id="colorview" x1="0" y1="0" x2="0" y2="1">
                <stop offset="30%" stopColor="#0 d3edf" stopOpacity={0.4} />
                <stop offset="85%" stopColor="#bec9ed" stopOpacity={0.4} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
            type="montone"
            dataKey="data2"
            stroke="#4f81dd" 
            fill="url(#colorview)"
            />
            <Area
            type="monotone"
            dataKey="data2"
            stack= "#ffff"
            fill="url(#colorview)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
