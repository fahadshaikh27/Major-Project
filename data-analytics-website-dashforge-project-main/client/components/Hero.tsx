import Image from 'next/image'
import hero_img from '../assets/hero-img.png'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex items-center justify-between mt-12 bg-muted px-10 py-12 gap-24 rounded-md'>
        <div>
            <h1 className='text-4xl font-bold mb-6'>Dive into the world of data analytics.</h1>
            <p className='text-muted-foreground'>Harness the full potential of your data with our automated dashboard generation and analytics tools. Our platform empowers you to uncover hidden patterns, trends, and correlations within your data, allowing you to gain deeper insights into your business operations.</p>
            <Link href="/dataset">
              <Button className='mt-6'>Get Started</Button>
            </Link>
        </div>
        <Image className='rounded-lg' src={hero_img} alt='hero-img'/>
    </div>
  )
}

export default Hero
