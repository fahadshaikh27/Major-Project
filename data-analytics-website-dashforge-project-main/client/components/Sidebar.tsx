// SideBar.js
'use client'
import React, { useState } from 'react';
import SideNav from './SideNav';
import { MdDashboard, MdAnalytics, MdInsertChart, MdDataset, MdLiveHelp, MdFeedback } from 'react-icons/md';

const SideBar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('Home');

  const handleNavItemClick = (navItem : any) => {
    setSelectedNavItem(navItem);
  };

  return (
    <div className='w-[20%] h-full px-10 py-5 bg-background border-r'>
      <div>
        <SideNav
        href='/dataset'
          placeholder="Dataset" 
          Icon={MdDataset} 
          isSelected={selectedNavItem === "Home"} 
          onClick={() => handleNavItemClick("Home")} 
        />
        <SideNav 
        href='/dashboard'
          placeholder="Dashboard" 
          Icon={MdDashboard} 
          isSelected={selectedNavItem === "Dashboard"} 
          onClick={() => handleNavItemClick("Dashboard")} 
        />
        <SideNav 
        href='/analytics'
          placeholder="Analytics" 
          Icon={MdAnalytics} 
          isSelected={selectedNavItem === "Analytics"} 
          onClick={() => handleNavItemClick("Analytics")} 
        />
        <SideNav 
        href='/graphs'
          placeholder="Graphs" 
          Icon={MdInsertChart} 
          isSelected={selectedNavItem === "Graphs"} 
          onClick={() => handleNavItemClick("Graphs")} 
        />
      </div>
      <div className='mt-12'>
        <SideNav 
        href='/support'
          placeholder="Support" 
          Icon={MdLiveHelp} 
          isSelected={selectedNavItem === "Support"} 
          onClick={() => handleNavItemClick("Support")} 
        />
        <SideNav 
        href='/feedback'
          placeholder="Feedback" 
          Icon={MdFeedback} 
          isSelected={selectedNavItem === "Feedback"} 
          onClick={() => handleNavItemClick("Feedback")} 
        /> 
      </div>
    </div>
  );
};

export default SideBar;
