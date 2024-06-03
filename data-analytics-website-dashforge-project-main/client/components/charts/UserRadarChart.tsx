"use client"
import React, { useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const UserRadarChart = ({ chartsData }: { chartsData: any }) => {
  
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
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserRadarChart;
