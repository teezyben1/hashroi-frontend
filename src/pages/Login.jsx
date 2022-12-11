import React from 'react'
import { BiUserCheck } from 'react-icons/bi'

export const Login = () => {

// handleSubmit function
const handleSubmit = () =>{}

// fetch data from API


  return (
    <div className='w-full  flex justify-center  bg-green-500 items-center mt-[120px]   '>
        <form className=''>
            <div className=' w-[100px] mx-[100px]  bg-green-300 rounded-full mt-2 mb-5'>
              <BiUserCheck
                className='w-[100px] h-[100px] fill-white '
               />
            </div>
            <div>
                <label
                className='block p-1' 
                htmlFor="name:">Username:</label>
                <input
                className='border-2 p-2 rounded-md text-xl' 
                type="text" 
                name='username' 
                placeholder='username' />
            </div>
            <div>
                <label
                className='block p-1' 
                htmlFor="username">Password:</label>
                <input        
                className='border-2 p-2 rounded-md text-xl' 
                type="password" 
                name='password'  
                placeholder='password'/>
            </div>
            <div className='mt-4'>
                <button className='bg-green-900 p-2 rounded-xl text-white text-lg' onClick={handleSubmit}>Login</button>
            </div>
            <div className='mt-3 mb-3'>
                <p>Don't have an account?  <a href="/signup" className='text-blue-700'>Register
                </a></p>
            </div>
        </form>
    </div>
  )
}
