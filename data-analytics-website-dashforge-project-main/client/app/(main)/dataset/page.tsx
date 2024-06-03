'use client'
import React, { useState } from 'react';
import { MdCloudUpload } from "react-icons/md"

const Dataset = () => {

  const [response, setResponse] = useState<any>(null);
  const [data, setData] = useState()

//   const data = {
//     "numeric_data": {
//         "roll no": [
//             28,
//             26,
//             65,
//             6,
//             66
//         ],
//         "marks": [
//             99,
//             98,
//             99,
//             97,
//             98
//         ]
//     }
// };

// const numericData = data["numeric_data"];

// Object.keys(numericData).forEach(key => {
//     console.log("Key:", key);
//     //@ts-ignore
//     console.log("Values:", numericData[key]);
// });


  const postData = async () => {
    try {
      const data = {
        "dataset" : "C:/Users/Admin/Desktop/data-analytics-website/client/students.csv"
      }
      
      const response = await fetch('http://127.0.0.1:8000/data/dataset/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(response)
      const responseData = await response.json();
      console.log(responseData);
      
      setResponse(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <section className='w-[80%] h-full p-4'>
        <div className='w-full bg-background flex flex-col justify-center items-center border border-muted-foreground border-dashed p-8 rounded-md gap-y-4'>
          <h1 className='text-muted-foreground'>No dataset found</h1>
          <h1 className='text-2xl'>Upload a dataset here</h1>
            <label 
              htmlFor="file-upload" 
              className='flex justify-center items-center gap-2 px-4 py-3 text-sm text-white font-medium bg-primary rounded-md cursor-pointer hover:opacity-90 duration-150'>
              <MdCloudUpload size={20}/>
              Upload dataset
              <input 
                onClick={postData}
                type="file"
                id='file-upload'
                hidden
              />
            </label>
        </div>
        {response && (
            <div className='mt-6'>
                <table className="border-collapse border border-foreground bg-background">
                    <thead>
                        <tr>
                            {Object.keys(response).map((key, index) => (
                                <th key={index} className="font-medium border border-foreground p-2">{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {Object.values(response).map((value, index) => (
                                <td key={index} className="font-medium border border-foreground p-2">{JSON.stringify(value)}</td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        )}
    </section>
  )
}

export default Dataset;
