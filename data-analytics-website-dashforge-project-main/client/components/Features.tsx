import React from 'react'
import { MdOutlineDashboardCustomize, MdDashboard } from "react-icons/md";
import { SiPagespeedinsights } from "react-icons/si"
import { IoMdAnalytics } from "react-icons/io"
const Features = () => {
  return (
    <div className='flex justify-center items-center py-20 px-10'>
      <div className='flex justify-between items-center gap-12'>
        <div className='w-[50%]'>
            <h1 className='text-2xl font-bold mb-4'>Our Services</h1>
            <p className='text-muted-foreground'>Tailor your data, visualize it effortlessly, and derive actionable insights, propelling your business forward.</p>
        </div>
        <div className='flex gap-28 mt-4'>
            <div className='flex flex-col'>
                <div className='flex gap-3 items-center mb-6'>
                    <MdOutlineDashboardCustomize className='text-primary p-2 bg-muted rounded-md' size={45}/>
                    <h1 className='font-medium'>Customization</h1>
                </div>
                <div className='flex gap-3 items-center'>
                    <IoMdAnalytics className='text-primary p-2 bg-muted rounded-md' size={45}/>
                    <h1 className='font-medium'>Analytics</h1>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='flex gap-3 items-center mb-6'>
                    <MdDashboard className='text-primary p-2 bg-muted rounded-md' size={45}/>
                    <h1 className='font-medium'>Visualization</h1>
                </div>
                <div className='flex gap-3 items-center'>
                    <SiPagespeedinsights className='text-primary p-2 bg-muted rounded-md' size={45}/>
                    <h1 className='font-medium'>Insights</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
