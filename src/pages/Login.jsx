import React, { useState } from 'react'
import { BiUserCheck } from 'react-icons/bi'
import { useLogin } from '../hooks/useLogin'
import { ThreeDots } from 'react-loader-spinner'

export const Login = () => {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const [loader, setLoader] = useState('hidden')
  const {login, error, isLoading } = useLogin()

// handleSubmit function
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoader('block')
   
  await login(email,password)


}

// fetch data from API


  return (
    <div className='w-full  flex justify-center  bg-green-500 items-center mt-[120px]   '>
        <form className='' onSubmit={handleSubmit}>
            <div className=' w-[100px] mx-[100px]  bg-green-300 rounded-full mt-2 mb-5'>
              <BiUserCheck
                className='w-[100px] h-[100px] fill-white '
               />
            </div>
            {error && <div className='text-red-500 text-md font-nunito mt- text-center bg-gray-300 rounded-md p-2 border-2 border-red-600'>{error.message}</div>}
            <div>
            <label
              className='block p-1'>Email:</label>
              <input
              className='border-2 p-2 rounded-md text-xl' 
              type="email" 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder='email@.com'/>
            </div>
            <div>
            <label
              className='block p-1' 
            >Password:</label>
              <input
              className='border-2 p-2 rounded-md text-xl' 
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
               />
            </div>
            <div className='mt-4 flex items-center'>
                <button className='bg-green-900 p-2 rounded-xl text-white text-lg' onClick={handleSubmit}>Login</button>
                {/* <div className={`${loader}`}>
                  <ThreeDots
                      type="circle"
                      color='white'
                      height={30}
                      width={100}
                    />
                </div> */}
            </div>
            <div className='mt-3 mb-3'>
                <p>Don't have an account?  <a href="/signup" className='text-blue-700'>Register
                </a></p>
            </div>
        </form>
    </div>
  )
}
