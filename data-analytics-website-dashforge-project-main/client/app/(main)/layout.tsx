import Sidebar from '@/components/Sidebar';
import UserNav from '@/components/UserNav';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className='h-screen'>
      <UserNav />
      <section className='w-full h-[87%] bg-muted flex'>
        <Sidebar />
        {children}
      </section>
    </section>
  );
};

export default Layout;
