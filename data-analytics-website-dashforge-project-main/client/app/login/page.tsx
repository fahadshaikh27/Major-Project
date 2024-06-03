import { Button } from '@/components/ui/button'
import { FcGoogle } from "react-icons/fc"
import React from 'react'

const Login = () => {
  return (
    <section className='w-[100%] h-screen flex justify-center items-center bg-background'>
        <div className=' w-[300px] border p-5 flex flex-col justify-center items-center rounded-md'>
            <h1 className='text-xl font-medium mb-5'>Login</h1>
            <form className='w-full flex flex-col justify-center items-center'>
                <div className='w-full mb-5'>
                    <input className='w-full px-2 py-1 border rounded-md outline-none' type="email" required placeholder='enter your email'/>
                </div>
                <div className='w-full mb-5'>
                    <input className='w-full px-2 py-1 border rounded-md outline-none' type="password" required placeholder='enter your password'/>
                </div>
                <div className='w-full flex items-center gap-2 mb-2'>
                    <input className='cursor-pointer' type="checkbox"/>
                    <p className='text-muted-foreground text-sm'>show password</p>
                </div>
                <div className='w-full mb-3'>
                    <a className='text-blue-600 text-sm' href="#">Forgot password?</a>
                </div>
                <a className='w-full' href="/register">
                    <Button className='w-full'>Login</Button>
                </a>
                <div className='w-full mt-5 flex justify-center items-center gap-2 text-sm font-medium'>
                    <p className='text-muted-foreground'>Don't have an account?</p>
                    <a href="/register" className='text-blue-600'>register</a>
                </div>
            </form>
            <Button className='mt-3 w-full text-muted-foreground flex gap-2' variant="outline">
                <FcGoogle size={16}/>
                Login with Google
            </Button>
        </div>
    </section>
  )
}

export default Login
