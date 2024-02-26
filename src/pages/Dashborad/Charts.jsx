import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = () => {

const data = [
  {
    name: 'junuary',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feburary',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },

  {
    name: 'August',
    uv: 3490,
    pv: 8300,
    amt: 2100,
  },

  {
    name: 'September',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },

  {
    name: 'October',
    uv: 3490,
    pv: 1300,
    amt: 2100,
  },

  {
    name: 'November',
    uv: 3490,
    pv: 6300,
    amt: 2100,
  },

  {
    name: 'December',
    uv: 3490,
    pv: 2300,
    amt: 2100,
  },
];

  return (
    <div className='  h-[350px] w-[600px]'>
      <h1 className=' text-[20px] font-bold mx-auto'>Yearly Users</h1>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          
          <Bar dataKey="pv" stackId="a" fill="#F39D12" />
          <Bar dataKey="uv" stackId="a" fill="#F2F2F2" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default Charts;
