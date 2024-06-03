"use client"
import React, { useEffect } from 'react';
import { LineChart, Line, ResponsiveContainer, CartesianGrid, Tooltip, Legend, XAxis, YAxis } from 'recharts';

const UserLineChart = ({ chartsData }: { chartsData: any }) => {
  
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
        <LineChart
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={firstObjectKeys} />
          <YAxis dataKey={secondObjectKeys} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={firstObjectKeys} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey={secondObjectKeys} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserLineChart;
