import React from 'react'
import cloud from '../assets/cloud.jpg'

const Section2 = () => {
  return (
    <div>
      <div className=' relative  w-full h-[300px] rounded-md border outline-none '>
        <img src={cloud} alt="pic"  className='absolute w-full h-full object-cover mix-blend-overlay'/>
        <p className='absolute top-[10px] left-[10px] p-5 text-gray-200 text-lg font-semibold  md:text-3xl'>TAKE CONTROL OF YOUR CRYPTOCURRENCY MINING WITH HASHROI</p>
        <p className='absolute top-[120px] text-gray-200 p-2 text-center font-medium text-xl md:text-4xl md:font-semibold md:top-[100px]'>It's super simple - Your mining rigs are already set up and running. As soon as you've set up your account, you can start to mine your
           first coins using our Bitcoin 
          cloud mining service.</p>
      </div>
    </div>
  )
}

export default Section2
