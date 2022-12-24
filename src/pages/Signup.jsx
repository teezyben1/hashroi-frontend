import React from 'react'
import { useState } from 'react'
import { BiUserPlus } from 'react-icons/bi'
import { useSignup } from '../hooks/useSignup';
import { ThreeDots } from 'react-loader-spinner'


export const Signup = () => {
 const[name, setName]= useState('');
 const[email,setEmail] = useState('');
 const[password,setPassword] = useState('');
 const[bitcoinAddress, setBitcoinAddress] = useState('')
 const[liteAddress, setLiteAddress] = useState("");
 const[etherAddress, setEtherAddress] = useState("");
 const[tetherAddress, setTetherAddress] = useState("")
 const[checkbox, setCheckBox]= useState('unchecked')
 const [loader, setLoader] = useState('hidden')

  const {signup, error, isLoading } = useSignup()



// submit function
const handleSubmit = async (e) => {
    e.preventDefault()
    setLoader('block')
    await signup(name,email,password,bitcoinAddress,liteAddress,etherAddress,tetherAddress)
}

// fetch data for API


  return (
    <div className='w-full bg-green-500  flex justify-center items-center   '>
      <div>
          <div className=' w-[100px] mx-[100px] bg-green-300 rounded-full mt-2 mb-5'>
          <BiUserPlus
          className='w-[100px] h-[100px] fill-white '
          />
          </div>
          {error && <div className='text-red-500 text-md font-nunito mt- text-center bg-gray-300 rounded-md p-2 border-2 border-red-600'>{error.message}</div>}

      <form className='p-' onSubmit={handleSubmit}>
          <div>
              <label
              className='block p-1' 
              >Name:</label>
              <input
              className='border-2 p-2 rounded-md text-xl font-nunito' 
              type="text" 
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='name' />
          </div>
         
          <div>
              <label
              className='block p-1'>Email:</label>
              <input
              className='border-2 p-2 rounded-md text-xl font-nunito' 
              type="email" 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder='email@.com'/>
          </div>
          <div>
              <label
              className='block p-1' 
              >Bitcoin-Address:</label>
              <input
              className='border-2 p-2 rounded-md text-xl font-nunito' 
              type="text" 
              onChange={(e) => setBitcoinAddress(e.target.value)}
              value={bitcoinAddress}
              placeholder='bc1q9d4ywgfndn6...' />
          </div>
          <div>
              <label
              className='block p-1' 
            >Lite-Address:</label>
              <input
              className='border-2 p-2 rounded-md text-xl font-nunito' 
              type="text" 
              onChange={(e) => setLiteAddress(e.target.value)}
              value={liteAddress}
              placeholder='MGxNPPB7eBoWPUap...' />
          </div>
          <div>
              <label
              className='block p-1' 
              >Ethereum-Address:</label>
              <input
              className='border-2 p-2 rounded-md text-xl font-nunito' 
              type="text" 
              onChange={(e) => setEtherAddress(e.target.value)}
              value={etherAddress}
              placeholder='0x71C7656EC7ab88b...' />
          </div>
          <div>
              <label
              className='block' 
              >Tether(TRC20)-Address:</label>
              <input
              className='border-2 p-2 rounded-md text-xl font-nunito'  
              type="text" 
              onChange={(e) => setTetherAddress(e.target.value)}
              value={tetherAddress}
              placeholder='TR7NHqjeKQxGTCi8...' />
          </div>
          <div>
              <label
              className='block p-1' 
            >Password:</label>
              <input
              className='border-2 p-2 rounded-md text-xl font-nunito' 
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
               />
          </div>
          <div className='flex gap-3 mt-3'>
              <input
              className='border-2 p-2 rounded-md text-xl font-nunito' 
              type="checkbox" 
              onChange={(e) => setCheckBox(e.target.checked)}
              value={checkbox} />
              <p> I agree with <a href="#" className='text-blue-700'> Terms and conditions</a></p>
          </div>
          <div className='mt-4'>
              <button className='bg-green-900 p-2 rounded-xl text-white text-lg'>Signup</button>
              {/* <div className={`${loader}`}>
                  <ThreeDots
                      type="circle"
                      color='white'
                      height={30}
                      width={100}
                    />
                </div> */}
          </div>
          <div className='mt-3 mb-3 font-nunito'>
            <p>Already have an account? <a href="/login" className='text-blue-700'>Login</a></p>
          </div>
      </form>
     </div>
 </div>
  )
}
