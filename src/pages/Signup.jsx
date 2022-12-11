import React from 'react'
import { BiUserPlus } from 'react-icons/bi'

export const Signup = () => {
  


// submit function

// fetch data for API


  return (
    <div className='w-full bg-green-500  flex justify-center items-center   '>
      <div>
          <div className=' w-[100px] mx-[100px] bg-green-300 rounded-full mt-2 mb-5'>
          <BiUserPlus
          className='w-[100px] h-[100px] fill-white '
          />
          </div>

      <form className='p-'>
          <div>
              <label
              className='block p-1' 
              htmlFor="name:">Name:</label>
              <input
              className='border-2 p-2 rounded-md text-xl' 
              type="text" 
              name='name' 
              placeholder='name' />
          </div>
          <div>
              <label
              className='block p-1' 
              htmlFor="username">Username:</label>
              <input
              className='border-2 p-2 rounded-md text-xl' 
              type="text" 
              name='username'  
              placeholder='username'/>
          </div>
          <div>
              <label
              className='block p-1' htmlFor="email">Email:</label>
              <input
              className='border-2 p-2 rounded-md text-xl' 
              type="email" 
              name="email" 
              placeholder='email@.com'/>
          </div>
          <div>
              <label
              className='block p-1' 
              htmlFor="bitcoin-Address">Bitcoin-Address:</label>
              <input
              className='border-2 p-2 rounded-md text-xl' 
              type="text" 
              name='bitcoinAddress' 
              placeholder='bc1q9d4ywgfndn6...' />
          </div>
          <div>
              <label
              className='block p-1' 
              htmlFor="lite-Address">Lite-Address:</label>
              <input
              className='border-2 p-2 rounded-md text-xl' 
              type="text" 
              name='liteAddress' 
              placeholder='MGxNPPB7eBoWPUap...' />
          </div>
          <div>
              <label
              className='block p-1' 
              htmlFor="ethereum-Address">Ethereum-Address:</label>
              <input
              className='border-2 p-2 rounded-md text-xl' 
              type="text" 
              name='etherAddress' 
              placeholder='0x71C7656EC7ab88b...' />
          </div>
          <div>
              <label
              className='block' 
              htmlFor="tether(TRC20)-Address">Tether(TRC20)-Address:</label>
              <input
              className='border-2 p-2 rounded-md text-xl'  
              type="text" 
              name='tetherAddress' 
              placeholder='TR7NHqjeKQxGTCi8...' />
          </div>
          <div>
              <label
              className='block p-1' 
              htmlFor="password">Password:</label>
              <input
              className='border-2 p-2 rounded-md text-xl' 
              type="password" 
              name='password' />
          </div>
          <div className='flex gap-3 mt-3'>
              <input
              className='border-2 p-2 rounded-md text-xl' 
              type="checkbox" 
              name="term" 
              value="checked" />
              <p> I agree with <a href="#" className='text-blue-700'> Terms and conditions</a></p>
          </div>
          <div className='mt-4'>
              <button className='bg-green-900 p-2 rounded-xl text-white text-lg'>Signup</button>
          </div>
          <div className='mt-3 mb-3'>
            <p>Already have an account? <a href="/login" className='text-blue-700'>Login</a></p>
          </div>
      </form>
     </div>
 </div>
  )
}
