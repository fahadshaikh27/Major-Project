import React from 'react'
import { HiMiniChartBar } from "react-icons/hi2";
import { ModeToggle } from './ThemeToggle';
import  UserProfile  from './UserProfile';

const UserNav = () => {
  return (
    <nav id='home' className='bg-background flex justify-between items-center py-4 px-10 border-b sticky top-0'>
        <div className='flex items-center gap-1'>
            <HiMiniChartBar className='text-primary' size={20}/>
            <h1 className='text-xl text-primary font-bold'>DashForge</h1>
        </div>
        <div className='flex justify-between items-center gap-4'>
            <UserProfile/>
            <ModeToggle/>
        </div>
    </nav>
  )
}

export default UserNav
