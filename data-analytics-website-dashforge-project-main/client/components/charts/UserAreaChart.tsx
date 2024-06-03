"use client"
import React, { useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const UserAreaChart = ({ chartsData }: { chartsData: any }) => {
  
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
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={firstObjectKeys} />
          <YAxis dataKey={secondObjectKeys}/>
          <Tooltip />
          <Area type="monotone" dataKey={secondObjectKeys} stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserAreaChart;
