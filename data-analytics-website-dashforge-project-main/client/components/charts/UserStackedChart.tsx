"use client"
import React, { useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UserStackedChart = ({ chartsData }: { chartsData: any }) => {
  
  useEffect(() => {
    console.log("charts data", chartsData)
  }, [chartsData])

  const firstObjectKeys = Object.keys(chartsData)[0];
  let secondObjectKeys = Object.keys(chartsData)[1] // Get the keys of the first object

  const data = chartsData[firstObjectKeys].map((item: any, index: number) => ({
    [firstObjectKeys]: item,
    [secondObjectKeys]: chartsData[Object.keys(chartsData)[1]][index], // Assuming the second key is for the values
  }));

  //console.log(data)

  return (
    <div>
      <div className="mt-3 h-[120px]">
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
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserStackedChart;
