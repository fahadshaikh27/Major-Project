"use client"
import React, { useEffect } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const UserScatterChart = ({ chartsData }: { chartsData: any }) => {
  
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
        <ResponsiveContainer width="100%" height={150}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey={firstObjectKeys} name="stature" unit="cm" />
          <YAxis type="number" dataKey={secondObjectKeys} name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default UserScatterChart;
  