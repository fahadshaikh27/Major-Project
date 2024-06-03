import React from 'react'
import { Button } from './ui/button';

const Contact = () => {
    return (
        <div className='px-10 mb-24 w-[50%]'>
            <h1 className='text-2xl font-medium mb-6'>Contact Us</h1>
            <form>
                <div className='flex flex-col mb-6'>
                    <label className='mb-4 text-muted-foreground' htmlFor="email">Email</label>
                    <input className='border bg-muted p-2 outline-none rounded-md' name='email' type="email" />
                </div>
                <div className='flex flex-col mb-6'>
                    <label className='mb-4 text-muted-foreground' htmlFor="description">Description</label>
                    <textarea className='border bg-muted resize-none p-2 outline-none rounded-md' name="description" rows={5}></textarea>
                </div>
                <Button className='w-[20%]'>Send</Button>
            </form>
        </div>
      );
}

export default Contact
