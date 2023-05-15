import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import './Graph.css';

export const Graph = ({final}) => {
  return (
    <div className="graph">
      <h3>histogram</h3>
      <ResponsiveContainer width="70%" aspect={3}>
        <BarChart data={final} width={550} height={550}>
          <XAxis dataKey="word" />
          <YAxis dataKey="value" />
          {/* {console.log(array)} */}
          <Tooltip />
          <Bar dataKey="value" fill="rgb(237, 64, 128)" />
          {/* we can fill to color the levels */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}