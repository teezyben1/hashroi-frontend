import React from 'react'

import money from '../assets/money.png'
import world from '../assets/world.png'
import people from '../assets/people.png'
import dollar from '../assets/dollar.png'



const Section1 = () => {
  return (
    <div className='flex justify-around gap-5 items-center my-10 p-5 flex-col md:flex-row'>
      <div className='flex flex-row gap-5  p-5 w-full items-center bg-green-300 rounded-md'>
        <div>
          <img src={people} alt="f" className='w-30 h-20' />
        </div>
        <div>
          <h1 className='text-4xl font-semibold text-gray-700'>2454 <span className='text-5xl'>+</span></h1>
          <h1 className='text-2xl text-gray-900 font-medium'>All Members</h1>
        </div>
      </div>

      <div className='flex flex-row gap-5 w-full p-5 items-center bg-green-300 rounded-md'>
        <div>
          <img src={dollar} alt="f" className='w-30 h-20' />
        </div>
        <div>
          <h1 className='text-4xl font-semibold text-gray-700'> <span>$</span> 600 <span className='text-5xl'>k</span></h1>
          <h1 className='text-2xl text-gray-900 font-medium'>Total Mining</h1>
        </div>
      </div>

      <div className='flex flex-row gap-5 w-full p-5 items-center bg-green-300 rounded-md'>
        <div>
          <img src={world} alt="n"  className='w-30 h-20'/>
        </div>
        <div>
          <h1 className='text-4xl font-semibold text-gray-700'>50 <span className='text-5xl'>+</span></h1>
          <h1 className='text-2xl text-gray-900 font-medium'>World Country</h1>
        </div>
      </div>
      


    </div>
  )
}

export default Section1
