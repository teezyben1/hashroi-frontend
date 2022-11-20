import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import { AiFillCloseCircle } from 'react-icons/ai'



import logo from '../assets/logo.png'
import {navLink} from '../data'
import SideBar from './SideBar'


const Nav = () => { 
    const [toggleSidebar, setToggleSidebar] = useState(false)
    const [hide, setHide] = useState('')


    const expand = () => {
        setToggleSidebar(true)
        setHide('hidden')
        
    }

    const close = () => {
        setToggleSidebar(false)
        setHide('')
    }


  return (
    <div className='md:flex md:justify-between md:items-center md:p-4 mt-1 p-2   w-screen shadow-lg '>
       <Link to={'/'}>

       <img src={logo} alt="logo" className=' w-[150px] h-[150px] hidden md:block  ' />

       
            <img src={logo} alt="logo" className='absolute left-[-15px] w-[100px] h-[100px] md:hidden   ' />
       </Link>
            
        
        {/* Nav link for small screen */}
        <div className='md:hidden absolute right-[15px] top-0'>
            <HiMenu 
            onClick={expand}
            className={`w-[50px] h-20 mt-2  text-gray-200 ${hide} `}/>

           

        {toggleSidebar && (
                  <div className="absolute right-0 top-0 w-5/5 bg-blackOverlay h-[350px]   shadow-md  animate-slide-in mt-5 rounded-lg z-10 ">
                     <div className="absolute w-full flex justify-end items-center p-2">
                     <AiFillCloseCircle fontSize={30} className="cursor-pointer text-gray-300 " onClick={close} />   

                     </div>
                    {/* <div className='flex flex-row'> */}

                  {navLink.map((list) => (
                            <Link to = {list.to} className="flex flex-row, p-3 text-gray-200 text-2xl shadow-md mr-10 ">{list.name}</Link>
                        ))}
                        
                    </div>

                    
                    // </div>
                
            )}
        </div>



        {/* Nav link for big screen */}
        <div className=' hidden md:flex flex-start gap-4 mr-[60px]'>
            {navLink.map((list) => (
                <Link to = {list.to} className="text-gray-200 text-2xl shadow-md hover:border hover:bg-black hover:rounded-md">{list.name}</Link>
            ))}
        </div>
        <div className=' flex absolute top-[200px] left-[30px] flex-col md:top-[200px] md:left-[60px]'>
            <h1 className='font-semibold text-4xl text-green-100 capitalize text-center md:text-8xl'>Supercharge your </h1>
            <h2 className='font-light text-2xl text-blue-100 capitalize mt-3  md:text-5xl md:mt-5' > mining  potential with <br/> <span className='text-5xl text-green-100  mt-2 uppercase ml-[100px] font-semibold md:ml-[500px]'>hashroi</span></h2>

        </div>
        <div className='absolute top-[460px] left-[130px] border bg-gray-900 rounded-xl cursor-pointer md:top-[500px] md:left-[450px] md:mt-2'>
            <Link to={'/login'}>
            <h1 className='text-2xl text-white p-2 capitalize'>get started</h1>
            </Link>
        </div>


      
    </div>
  )
}

export default Nav
