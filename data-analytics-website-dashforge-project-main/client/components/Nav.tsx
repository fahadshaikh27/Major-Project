import React from 'react'
import { HiMiniChartBar } from "react-icons/hi2";
import { Button } from './ui/button'
import { ModeToggle } from './ThemeToggle';

const Nav = () => {
  return (
    <nav id='nav' className='bg-background flex justify-between items-center py-4 px-10 border-b sticky top-0'>
        <div className='flex items-center gap-1'>
            <HiMiniChartBar className='text-primary' size={20}/>
            <h1 className='text-xl text-primary font-bold'>DashForge</h1>
        </div>
        <ul className='flex justify-between w-[30%]'>
            <a className='font-medium hover:text-primary duration-75' href='/'>Home</a>
            <a className='font-medium hover:text-primary duration-75' href='/'>Features</a>
            <a className='font-medium hover:text-primary duration-75' href='/'>About</a>
            <a className='font-medium hover:text-primary duration-75' href='/'>Contact</a>
        </ul>
        <div className='flex justify-between items-center gap-4'>
          <a href="/login">
            <Button className='w-24'>Login</Button>
          </a>
          <ModeToggle/>
        </div>
    </nav>
  )
}

export default Nav
