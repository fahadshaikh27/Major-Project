import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

const Card = ({ title, description, Icon }: { title: string; description: string; Icon: IconType}) => {
  return (
    <div className='w-[25%]'>
      <div className='border rounded-lg p-4 shadow-md'>
        <Icon className='text-primary p-2 bg-muted rounded-md mb-4' size={45}/>
        <h1 className='mb-4 text-xl font-medium'>{title}</h1>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
