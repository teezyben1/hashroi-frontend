import React from 'react'
import {navLink} from '../data'
import { Link } from 'react-router-dom'



const SideBar = () => {
  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar'>
                <div className='flex flex-col'>

      {navLink.map((list) => (
            <Link to = {list.to} className="flex flex-row, p-3 text-gray-200 text-2xl shadow-md mr-10 ">{list.name}</Link>
                        ))}
                        </div>
    </div>
  )
}

export default SideBar
