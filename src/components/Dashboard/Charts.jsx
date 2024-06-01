import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Charts = ({ heading, data }) => {
  return (
    <div className="h-[350px] flex-1">
      <h1 className="text-[20px] font-bold mx-auto">Yearly {heading}</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={15}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" axisLine={false} dy={3} tickLine={false}  />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="count" stackId="a" fill="#F39D12" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
