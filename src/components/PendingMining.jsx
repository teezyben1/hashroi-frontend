import React,{useState, useEffect } from 'react'
import { GiProcessor } from 'react-icons/gi'
import { MiningPlan } from './MiningPlan'
import {pendingMining} from '../hooks/getPendingPlan'
import  formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { fetchUser } from "../utils/fetchUser"




export const  PendingMining = () => {
  const userInfo = fetchUser()

  
  const [data, setData] = useState([])

  useEffect(() => {
    (async() => {
     const Data = await pendingMining(userInfo.id)
     setData(Data.pendingPlans)
    
  
    })()
    


  },[])

  




  return (
    <div className='relative'>
      <h1 className='text-center text-gray-900 text-3xl font-nunito mb-8'>Your pending mining</h1>
      {data.map((plan) => (

      <div className='bg-green-300 rounded-xl flex flex-col mb-5 '>
        <div className='bg-green-300 p-2'><span className='font-bold uppercase font-nunito'> Plan: </span> <span className='font-nunito text-lg'>{plan.planName}</span></div>
        <div className='bg-green-900 p-2'><span className='font-bold uppercase font-nunito'> amount: </span> <span className='font-semibold font-nunito bg-red-200 rounded-md p-1'>${plan.amount}</span></div>
        <div className='p-2'><span className='font-bold uppercase font-nunito'> roi: </span> <span className='font-semibold bg-red-200 font-nunito rounded-md p-1'> {plan.roi}%</span></div>
        <div className='bg-green-900 p-2'><span className='font-bold uppercase font-nunito'> days: </span> <span className='font-semibold font-nunito bg-red-200 rounded-md p-1'>{plan.days}</span></div>

        <div className= ' bg-green-300 p-2'><span className='font-bold uppercase font-nunito'> profit: </span> <span className='font-semibold font-nunito bg-red-200 rounded-md p-1'> ${plan.profit.toFixed()}</span></div>
        <div className='bg-green-900 p-2'><span className='font-bold uppercase font-nunito '> total: </span> <span className='font-semibold font-nunito bg-red-200 rounded-md p-1'> ${plan.total.toFixed()}</span></div>

        <div className='bg-green-300 p-2'><span className='font-bold uppercase font-nunito'> started: </span> <span className='font-semibold font-nunito text-gray-900'>{formatDistanceToNow(new Date(plan.createdAt),{ addSuffix:true })}</span></div>
        <div className='bg-green-900 p-2'><span className='font-bold uppercase font-nunito'> ends: </span> <span className='font-semibold font-nunito text-gray-100'> {formatDistanceToNow(new Date(plan.createdAt ).setDate(new Date(plan.createdAt ).getDate() + 10))}</span></div>
        
        <div className='absolute right-0 flex  bg-red-600 mx-auto rounded-xl'>
          <GiProcessor className='w-6 h-6 '/>
          <p className='text-lg  '>Pending....</p>
        </div>

      </div>

      ))
       }

      <div className='mt-10 text-center capitalize font-nunito text-2xl'><h1>add more mining to your current mining</h1></div>
        <MiningPlan/>

    </div>
  )
}
