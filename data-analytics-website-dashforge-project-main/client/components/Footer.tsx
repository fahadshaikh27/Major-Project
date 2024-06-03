import React from 'react'
import { HiMiniChartBar } from "react-icons/hi2";

const Footer = () => {
  return (
    <section className='bg-background border-t border-b p-10 flex justify-between items-start mb-16'>
        <div className='flex flex-col gap-y-4'>
            <div className='flex items-center gap-1'>
                <HiMiniChartBar className='text-primary' size={20}/>
                <h1 className='text-2xl text-primary font-medium'>DashForge</h1>
            </div>
            <p className='text-muted-foreground text-sm w-[300px]'>
            Explore. Connect. Discover. © 2024
            DashForge. All rights reserved.
            Privacy Policy | Terms of Service
            </p>
            <h1 className='font-medium'>+91 9967132722</h1>
        </div>
        <div className='flex flex-col gap-y-4'>
            <h1 className='text-xl font-medium'>Resources</h1>
            <ul className='flex flex-col gap-y-4 text-muted-foreground'>
                <a href="/" className='font-medium hover:text-primary duration-75'>SaaS Development</a>
                <a href="/" className='font-medium hover:text-primary duration-75'>Our Products</a>
                <a href="/" className='font-medium hover:text-primary duration-75'>User Flow</a>
                <a href="/" className='font-medium hover:text-primary duration-75'>User Strategy</a>
            </ul>
        </div>
        <div className='flex flex-col gap-y-4'>
            <h1 className='text-xl font-medium'>Company</h1>
            <ul className='flex flex-col gap-y-4 text-muted-foreground'>
                <a href="/" className='font-medium hover:text-primary duration-75'>About Services</a>
                <a href="/" className='font-medium hover:text-primary duration-75'>Contact & Support</a>
                <a href="/" className='font-medium hover:text-primary duration-75'>Success History</a>
                <a href="/" className='font-medium hover:text-primary duration-75'>Settings</a>
            </ul>
        </div>
        <div className='flex flex-col gap-y-4'>
            <h1 className='text-xl font-medium'>Quick Links</h1>
            <ul className='flex flex-col gap-y-4 text-muted-foreground'>
                <a href="/" className='font-medium hover:text-primary duration-75'>Home</a>
                <a href="/" className='font-medium hover:text-primary duration-75'>Features</a>
                <a href="/" className='font-medium hover:text-primary duration-75'>About</a>
                <a href="/" className='font-medium hover:text-primary duration-75'>Contact</a>
            </ul>
        </div>
    </section>
  )
}

export default Footer
