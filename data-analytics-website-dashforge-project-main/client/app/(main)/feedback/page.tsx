import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <section className='w-[80%] p-6'>
      <div className='bg-background rounded-lg border'>
        <div className='w-[60%] p-6 flex flex-col gap-y-4'>
          <h1 className='text-2xl'>User Feedback</h1>
          <p className='text-muted-foreground'>Your feedback is invaluable to us and will help shape the future development of our website. Thank you for your time!</p>
          <form className='flex flex-col gap-y-4'>
            <label htmlFor="name" className='text-muted-foreground'>Name</label>
            <input type="text" name="name" id="name" className='border bg-muted p-2 outline-none rounded-md' />
            <label htmlFor="message" className='text-muted-foreground'>Message</label>
            <textarea className='border bg-muted resize-none p-2 outline-none rounded-md' name="message" rows={5}></textarea>
            <Button className='w-[25%] mt-2'>
              Submit Feedback
            </Button>
          </form>
          </div>
      </div>
    </section>
  )
}

export default page