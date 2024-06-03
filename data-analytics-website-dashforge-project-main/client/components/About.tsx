import React from 'react'
import Card from './Card'

import { MdOutlineDashboardCustomize, MdDashboard } from "react-icons/md";
import { SiPagespeedinsights } from "react-icons/si";
import { IoMdAnalytics } from "react-icons/io";

const About = () => {

  return (
    <section className=' flex flex-col justify-center items-center px-10 mt-16 mb-20'>
      <h1 className='mb-4 text-2xl font-bold'>Our services</h1>
      <p className='mb-14 text-muted-foreground'>Unlock the full potential of your data with our suite of solutions.</p>
      <div className='flex gap-12'>
          <Card 
            Icon={MdOutlineDashboardCustomize}
            title="Customization" 
            description="Tailor your data effortlessly to fit your unique needs."
            />
          <Card 
            Icon={MdDashboard}
            title="Visualization" 
            description="Transform raw data into compelling visual dashboard."
            />
          <Card 
            Icon={SiPagespeedinsights}
            title="Analytics" 
            description="Harness the power of advanced algorithms."
            />
          <Card 
            Icon={IoMdAnalytics}
            title="Insights" 
            description="Gain valuable perspectives and foresight from your data."
            />
      </div>
    </section>
  )
}

export default About
