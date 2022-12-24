import React, { useEffect, useState } from 'react'
import { VscCompassActive} from 'react-icons/vsc'
import { MdOutlinePendingActions } from 'react-icons/md'
import { GiMoneyStack, GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi'
import { GrMoney } from 'react-icons/gr'
import {userFromDb, mined, totalWithdrawals} from '../hooks/getUserInfo'
import { fetchUser } from "../utils/fetchUser"


export const MyStats = () => {

  const [data, setData] = useState([])
  const [plan, setPlan] = useState(0)
  const [totalInvest, setTotalInvest] = useState(0)
  const[totalReturn, setTotalReturn] = useState(0)
  const [pending, setPending] = useState(0)
  const [activePlan, setActivePlan] = useState(0)
  const[totalWithdraw, setTotalWithdraw] = useState()
  const userInfo = fetchUser()


  useEffect(() => {
    (async() => {
     const Data = await userFromDb(userInfo.id)
     setData(Data.user)
     setPlan(Data.plans)     
     setPending(Data.plans.map((a)=>a.isPending).filter((c)=> c === 1).length)
     setActivePlan(Data.plans.map((a)=>a.isCurrent).filter((c)=> c === 1).length)
     
    })();
    (async() => {
      const minedData = await mined(userInfo.id)
      const totalWithdraw1 = await totalWithdrawals(userInfo.id)
      setTotalInvest(minedData.minedPlans.map((a)=>a.amount).reduce((a,b)=> a+ b))
      setTotalReturn(minedData.minedPlans.map((a)=>a.profit).reduce((a,b)=> a+ b))
      setTotalWithdraw(totalWithdraw1.totalWithdraw.map((a)=>a.amount).reduce((a,b)=> a+b))

      
       
      
      
 
     })();


  },[])

  return (
    <div className='mt-2 flex flex-col gap-4'>
      <h1 className='text-2xl text-center mb-3 capitalize font-nunito'>my stats</h1>
      <div className='w-full bg-green-300 flex flex-col justify-center items-center p-5'>
        <GiMoneyStack className="w-10 h-10 mb-5"/>
        <h1 className='text-4xl text-gray-800 mb-3'>${data.balance}</h1>
        <h1 className='text-gray-900 font-semibold uppercase text-2xl'>balance</h1>
      </div>
      <div className='w-full bg-green-900 flex flex-col justify-center items-center p-5'>
        <GrMoney className="w-10 h-10 mb-5"/>
        <h1 className='text-4xl text-gray-800 mb-3'>{plan.length}</h1>
        <h1 className='text-gray-900 font-semibold uppercase text-2xl'>total mining</h1>
      </div>
      <div className='w-full bg-green-300 flex flex-col justify-center items-center p-5'>
        <VscCompassActive className='w-10 h-10 mb-5'/>
        <h1 className='text-4xl text-gray-800 mb-3'>{activePlan}</h1>
        <h1 className='text-gray-900 font-semibold uppercase text-2xl'>active mining</h1>
      </div>
      <div className='w-full bg-green-900 flex flex-col justify-center items-center p-5'>
        <MdOutlinePendingActions className='w-10 h-10 mb-5'/>
        <h1 className='text-4xl text-gray-800 mb-3'>{pending}</h1>
        <h1 className='text-gray-900 font-semibold uppercase text-2xl'>pending mining</h1>
      </div>
      <div className='w-full bg-green-300 flex flex-col justify-center items-center p-5'>
        <GiPayMoney className='w-10 h-10 mb-5'/>
        <h1 className='text-4xl text-gray-800 mb-3'>${totalInvest}</h1>
        <h1 className='text-gray-900 font-semibold uppercase text-2xl'>total invest</h1>

      </div>
      <div className='w-full bg-green-900 flex flex-col justify-center items-center p-5'>
        <GiReceiveMoney className='w-10 h-10 mb-5'/>
        <h1 className='text-4xl text-gray-800 mb-3'>${totalReturn.toFixed()}</h1>
        <h1 className='text-gray-900 font-semibold uppercase text-2xl'>total profit</h1>
      </div>
      <div className='w-full bg-green-300 flex flex-col justify-center items-center p-5'>
        <GiTakeMyMoney className='w-10 h-10 mb-5'/>
        <h1 className='text-4xl text-gray-800 mb-3'>${totalWithdraw}</h1>
        <h1 className='text-gray-900 font-semibold uppercase text-2xl'>total withdrawal</h1>
      </div>
    </div>
  )
}
