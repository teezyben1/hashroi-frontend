import React, { useState } from 'react'
import { GiMiner } from 'react-icons/gi'
import { GiCycle } from 'react-icons/gi'
import { RiFolderReceivedLine } from 'react-icons/ri'
import { GiReceiveMoney } from 'react-icons/gi'
import { BiStats } from 'react-icons/bi'
import { FaQuestion } from 'react-icons/fa'
import { MdPendingActions } from 'react-icons/md'
import { RiLogoutCircleLine } from 'react-icons/ri'
import {  NavLink, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import{userFromDb} from '../hooks/getUserInfo'
import { fetchUser } from "../utils/fetchUser"


export const SideBar = ({closeToggle, user} ) => {
  const [balance, setBalance] = useState(0)
  const [userName, setUserName] = useState(null)
  const [userIcon, setUserIcon] = useState('')
  const navigate = useNavigate();
  const userInfo = fetchUser()


  const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-duration-all duration-200 ease-in-out capitalize'
  const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-100 hover:text-black transition-duration-all duration-200 ease-in-out capitalize'


const handleCloseSidebar =()=> {
  if(closeToggle) closeToggle(false) 
}


// TODO fetch user data


useEffect(() => {
  
  (async() => {
    const Data = await userFromDb(userInfo.id)
    setBalance(Data.user.balance)
    const splitUserName =Data.user.name.split("")
    setUserIcon(splitUserName[0]);
    setUserName(Data.user.name)
    
  })();
  
},[])


// TODO create logout function
const logout = ()=>{
  localStorage.clear()
  
  navigate('/login')
}



  return (
    <div className='flex flex-col justify-between bg-green-500 h-full overflow-y-scroll min-w-210 hide-scrollbar'>
      <div>
      <div className='flex flex-col p-1 items-center bg-green-700 mb-5'>
        {/* TODO get the first character of user name */}
        <div className='w-10 h-10 bg-green-300 rounded-full text-center text-4xl mt-2 text-gray-900 mb-1'><h1>{userIcon}</h1></div>
        <div className='text-3xl text-gray-900 font-nunito'><p>{userName}</p></div>
        <div><p className='font-nunito text-2xl mt-2'>${balance}</p></div>
      </div>
      
      <div className='flex  gap-2 p-4 items-center justify-center'   >
        <NavLink to={'/'} className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle} onClick={handleCloseSidebar}>
        <GiMiner className="w-9 h-9"/>
        <h3>Mining Plans</h3>
        </NavLink>
        
      </div>
      <div className='flex gap-2 p-4 items-center justify-center'>
        <NavLink to="/current-mining" className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle} onClick={handleCloseSidebar}>
        <GiCycle className="w-9 h-9"/>
        <h3>Current Mining</h3>
        </NavLink>
      </div>
      <div className='flex gap-2 p-4 items-center justify-center'>
        <NavLink to="/pending-mining" className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle} onClick={handleCloseSidebar}>
        <MdPendingActions className="w-9 h-9"/>
        <h3>Pending Mining</h3>
        </NavLink>
      </div>
      <div className='flex gap-2 p-4 items-center justify-center'>
        <NavLink to={'/recent-mining'} className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle} onClick={handleCloseSidebar}>
        <RiFolderReceivedLine className="w-9 h-9"/>
        <h3>Recent Mining</h3>
        </NavLink>
      </div>
      <div className='flex gap-2 p-4 items-center justify-center'>
        <NavLink to={'/my-stats'} className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle} onClick={handleCloseSidebar}>
        <BiStats className="w-9 h-9"/>
        <h3>My Stats</h3>
        </NavLink>
      </div>
      <div className='flex gap-2 p-4 items-center justify-center'>
        <NavLink to={'/withdrawal'} className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle} onClick={handleCloseSidebar}>
        <GiReceiveMoney className="w-9 h-9"/>
        <h3>Withdrawal</h3>
        </NavLink>
      </div>
      <div className='flex gap-2 p-4 items-center justify-center'>
        <NavLink to={'/faq'} className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle} onClick={handleCloseSidebar}>
        <FaQuestion className="w-9 h-9"/>
        <h3>FAQ</h3>
        </NavLink>
      </div>
      
      </div>
      <div className='flex gap-2 p-4 items-center justify-center' onClick={logout}>
        
        <RiLogoutCircleLine className="w-9 h-9"/>
        <h5>Logout</h5>
      </div>
    </div>
  )
}