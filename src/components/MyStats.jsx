import React from 'react'
import { RiAnticlockwiseLine, RiBankCard2Line } from 'react-icons/ri'
import { VscCompassActive} from 'react-icons/vsc'
import { MdOutlinePendingActions } from 'react-icons/md'
import { GiPayMoney, GiProfit, GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi'
import { GrMoney } from 'react-icons/gr'

export const MyStats = () => {
  return (
    <div className='mt-2 flex flex-col gap-4'>
      <h1 className='text-2xl text-center mb-3 capitalize font-nunito'>my stats</h1>
      <div className='w-full bg-green-900 flex flex-col justify-center items-center p-5'>
        <GrMoney className="w-10 h-10 mb-5"/>
        <h1 className='text-4xl text-gray-800 mb-3'>0</h1>
        <h1 className='text-gray-900 font-semibold uppercase text-2xl'>total mining</h1>
      </div>
      <div className='w-full bg-green-300 flex flex-col justify-center items-center p-5'>
        <VscCompassActive className='w-10 h-10 mb-5'/>
        <h1 className='text-4xl text-gray-800 mb-3'>0</h1>
        <h1 className='text-gray-900 font-semibold uppercase text-2xl'>active mining</h1>
      </div>
      <div className='w-full bg-green-900 flex flex-col justify-center items-center p-5'>
        <MdOutlinePendingActions className='w-10 h-10 mb-5'/>
        <h1 className='text-4xl text-gray-800 mb-3'>0</h1>
        <h1 className='text-gray-900 font-semibold uppercase text-2xl'>pending mining</h1>
      </div>
      <div className='w-full bg-green-300 flex flex-col justify-center items-center p-5'>
        <GiPayMoney className='w-10 h-10 mb-5'/>
        <h1 className='text-4xl text-gray-800 mb-3'>$0</h1>
        <h1 className='text-gray-900 font-semibold uppercase text-2xl'>total invest</h1>

      </div>
      <div className='w-full bg-green-900 flex flex-col justify-center items-center p-5'>
        <GiReceiveMoney className='w-10 h-10 mb-5'/>
        <h1 className='text-4xl text-gray-800 mb-3'>$0</h1>
        <h1 className='text-gray-900 font-semibold uppercase text-2xl'>total return</h1>
      </div>
      <div className='w-full bg-green-300 flex flex-col justify-center items-center p-5'>
        <GiTakeMyMoney className='w-10 h-10 mb-5'/>
        <h1 className='text-4xl text-gray-800 mb-3'>$0</h1>
        <h1 className='text-gray-900 font-semibold uppercase text-2xl'>total withdrawal</h1>
      </div>
    </div>
  )
}
