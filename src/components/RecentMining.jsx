import React from 'react'
import { GiProcessor } from 'react-icons/gi'
import { FcApproval } from 'react-icons/fc'
import { MiningPlan } from './MiningPlan'
export const RecentMining = () => {
  return (
    <div className='relative'>
      <h1 className='text-center text-gray-900 text-3xl font-nunito mb-8'>Your previous mining</h1>
      <div className='bg-green-300 rounded-xl flex flex-col '>
        <div className='bg-green-300 p-2'><span className='font-bold uppercase'> Plan: </span> <span className='font-semibold'> Test Plan</span></div>
        <div className='bg-green-900 p-2'><span className='font-bold uppercase'> amount: </span> <span className='font-semibold bg-red-200 rounded-md p-1'> $500</span></div>
        <div className='p-2'><span className='font-bold uppercase'> roi: </span> <span className='font-semibold bg-red-200 rounded-md p-1'> 5%</span></div>
        <div className='bg-green-900 p-2'><span className='font-bold uppercase'> days: </span> <span className='font-semibold bg-red-200 rounded-md p-1'> 10</span></div>

        <div className= ' bg-green-300 p-2'><span className='font-bold uppercase'> profit: </span> <span className='font-semibold bg-red-200 rounded-md p-1'> $250</span></div>
        <div className='bg-green-900 p-2 flex gap-3'><span className='font-bold uppercase'> total: </span> <span className='font-semibold bg-red-200 rounded-md p-1'> $750</span> <FcApproval className='w-9 h-9'/></div>

        <div className='bg-green-300 p-2'><span className='font-bold uppercase'> started: </span> <span className='font-semibold'> 22-nov-2022</span></div>
        <div className='bg-green-900 p-2'><span className='font-bold uppercase'> ends: </span> <span className='font-semibold'> 01-dec-2022</span></div>
        
        <div className='absolute right-0 flex  bg-green-900 mx-auto rounded-xl'>
        <FcApproval className='w-9 h-9'/>
          <p className='text-lg text-gray-100 pr-1'>Mined</p>
        </div>

      </div>
      <div className='mt-10 text-center capitalize font-nunito text-2xl'><h1>add more mining to your current mining</h1></div>
        <MiningPlan/>

    </div>
  )
}