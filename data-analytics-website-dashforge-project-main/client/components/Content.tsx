import Image from 'next/image'
import hero_img from '../assets/dashboard.jpeg'
import React from 'react'
import { Button } from './ui/button'

const Content = () => {
  return (
    <div className='flex items-center justify-between gap-24 bg-muted px-10 py-12 rounded-md'>
        <Image className='rounded-lg' src={hero_img} alt='hero-img' width={500}/>
        <div>
            <h1 className='text-4xl font-bold mb-6'>Analyze and Visualize data on the click of a button.</h1>
            <p className='text-muted-foreground'>Say goodbye to manual data analysis and hello to streamlined decision-making processes. Whether you're a seasoned data analyst or new to the world of analytics, our user-friendly interface makes it easy to visualize and interpret your data, enabling you to make data-driven decisions with confidence.</p>
            <Button className='mt-6'>Get Started</Button>
        </div>
    </div>
  )
}

export default Content
