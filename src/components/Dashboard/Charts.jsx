import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "../Data/Data";

const Charts = ({ heading }) => {
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
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="name"
            axisLine={false}
            dy={3}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="pv" stackId="a" fill="#F39D12" />
          <Bar dataKey="uv" stackId="a" fill="#F2F2F2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
