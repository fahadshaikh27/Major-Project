import { Button } from '@/components/ui/button'
import { FcGoogle } from "react-icons/fc"
import React from 'react'

const Register = () => {
  return (
    <section className='bg-background w-full h-screen flex justify-center items-center'>
        <div className='w-[300px] border p-5 flex flex-col justify-center items-center rounded-md'>
            <h1 className='text-xl font-medium mb-5'>Register</h1>
            <form className='w-full flex flex-col justify-center items-center'>
                <div className='w-full mb-5'>
                    <input className='w-full px-2 py-1 border rounded-sm outline-none' type="email" required placeholder='enter your email'/>
                </div>
                <div className='w-full mb-5'>
                    <input className='w-full px-2 py-1 border rounded-sm outline-none' type="password" required placeholder='create password'/>
                </div>
                <div className='w-full mb-5'>
                    <input className='w-full px-2 py-1 border rounded-sm outline-none' type="password" required placeholder='confirm password'/>
                </div>
                <div className='w-full flex items-center gap-2 mb-5'>
                    <input className='cursor-pointer' type="checkbox"/>
                    <p className='text-muted-foreground text-sm font-medium'>show password</p>
                 </div>
                 <a className='w-full' href="/login">
                    <Button className='w-full'>Register</Button>
                 </a>
                <div className='w-full mt-5 flex justify-center items-center gap-2 text-sm font-medium'>
                    <p className='text-muted-foreground'>Already have an account?</p>
                    <a href="/login" className='text-blue-600'>login</a>
                </div>
            </form>
            <Button className='mt-3 w-full text-muted-foreground flex gap-2' variant="outline">
                <FcGoogle size={16}/>
                Sign up with Google
            </Button>
        </div>
    </section>
  )
}

export default Register
