import React, { useState } from 'react'
import { GiMiner } from 'react-icons/gi'
import { GiCycle } from 'react-icons/gi'
import { RiFolderReceivedLine } from 'react-icons/ri'
import { GiReceiveMoney } from 'react-icons/gi'
import { BiStats } from 'react-icons/bi'
import { FaQuestion } from 'react-icons/fa'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'

export const SideBar = ({closeToggle} ) => {
  
  const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-duration-all duration-200 ease-in-out capitalize'
  const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-100 hover:text-black transition-duration-all duration-200 ease-in-out capitalize'


const handleCloseSidebar =()=> {
  if(closeToggle) closeToggle(false) 
}

// TODO fetch user data
// TODO create logout function


  return (
    <div className='flex flex-col justify-between bg-green-500 h-full overflow-y-scroll min-w-210 hide-scrollbar'>
      <div>
      <div className='flex flex-col p-1 items-center bg-green-500 mb-5'>
        {/* TODO get the first character of user name */}
        <div className='w-10 h-10 bg-green-300 rounded-full text-center text-4xl mt-2 text-gray-900 mb-1'><h1>B</h1></div>
        <div className='text-2xl text-gray-900'><p>Benjamin</p></div>
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
      <div className='flex gap-2 p-4 items-center justify-center'>
        
        <RiLogoutCircleLine className="w-9 h-9"/>
        <h5>Logout</h5>
      </div>
    </div>
  )
}