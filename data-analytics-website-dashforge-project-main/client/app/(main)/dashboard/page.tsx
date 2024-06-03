"use client";
import UserAreaChart from "@/components/charts/UserAreaChart";
import UserBarChart from "@/components/charts/UserBarChart";
import UserLineChart from "@/components/charts/UserLineChart";
import UserScatterChart from "@/components/charts/UserSatterChart";
import UserStackedChart from "@/components/charts/UserStackedChart";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const page = () => {
  const mydata = [
    {
      goal: 400,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 239,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 349,
    },
  ];

  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    console.log("This is from state", response);
  }, [response]);

  const postData = async () => {
    try {
      const data = {
        "dataset":
          "C:/Users/Admin/Desktop/data-analytics-website/client/secretdata.csv"
      }

      const response = await fetch("http://127.0.0.1:8000/data/dataset/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log(responseData.numeric_data);

      setResponse(responseData.numeric_data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="w-[80%] p-6">
      <div className="bg-background rounded-lg border h-full overflow-y-auto">
        <div className="p-6 flex flex-col gap-y-4">
          <h1>DASHBOARD</h1>
          <div className="w-full text-black">
            <div className="grid grid-cols-2 gap-4">
              {response && <UserBarChart chartsData={response} />}
              {response && <UserLineChart chartsData={response}/>}
              {response && <UserScatterChart chartsData={response}/>}
              {response && <UserAreaChart chartsData={response}/>}
              {response && <UserBarChart chartsData={response} />}
              {/* {response && <UserStackedChart chartsData={response}/>} */}
            </div>
            <Button onClick={postData} id="file-upload">
              Upload
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
