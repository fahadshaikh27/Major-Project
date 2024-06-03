"use client"
import React, { useEffect } from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const UserBarChart = ({ chartsData }: { chartsData: any }) => {
  
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
          <BarChart data={data} >
            <Tooltip />
            <XAxis dataKey={firstObjectKeys} />
            <YAxis dataKey={secondObjectKeys} />
            <Bar
              dataKey={secondObjectKeys}
              style={{
                fill: "hsl(var(--foreground))",
                opacity: 0.9,
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserBarChart;
