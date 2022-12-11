import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GiMining, GiTrophyCup, GiUnlocking } from 'react-icons/gi'
import { GrTools } from 'react-icons/gr'
import { BsPinFill } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'


export const MiningPlan = () => {
          return (
            <div className=' p-5 flex flex-col justify-center'>
              <div className=' mb-9'>
                <h2 className='text-3xl font-nunito-200 text-center font-bold text-gray-900 uppercase'>Select your plan and start mining</h2>
              </div>
              <div className='flex flex-col gap-9 md:flex-row md:flex-wrap'>
                {/* card start */}
                  <div className='flex flex-col justify-center items-center bg-green-500 rounded-lg shadow-2xl w-[300px]'>
                  <Link to={'/test-plan'} >
                
                  <GiMining className='w-[150px] h-[150px] mb-5 mt-4 mx-auto'/>
                  <div className='capitalized'>
                    <h1 className='uppercase text-2xl text-center text-gray-900 font-bold mb-2'>test plan</h1>
                    <p className='text-green-200 font-semibold capitalize text-3xl text-center mb-3'>daily 5% for 1 times(s) capital  back after 5Days</p>
                    <h4 className='capitalize text-center font-bold text-gray-900 text-md'>capital back after 5days'</h4>
                    <h2 className='text-center text-4xl font-semibold mt-2'>$50 - $500</h2>
                  </div>
                  <div className='flex items-center justify-center mt-5 mb-9'>
                  <h1 className='text-center bg-green-300 p-3 rounded-3xl text-2xl font-semibold capitalize text-gray-900'>start mining</h1>
                  </div>

                </Link>
                </div>
                {/* card end */}
                {/* card start */}
                <div className='flex flex-col justify-center items-center bg-green-500 rounded-lg shadow-2xl w-[300px]'>
                  <Link to={`/asic-rig-plan`} >
                
                  <GrTools className='w-[150px] h-[150px] mb-5 mt-4 mx-auto'/>
                  <div className='capitalized'>
                    <h1 className='uppercase text-2xl text-center text-gray-900 font-bold mb-2'>ascic rig plan</h1>
                    <p className='text-green-200 font-semibold capitalize text-3xl text-center mb-3'>daily 7% for 1 times(s) capital  back after 10Days</p>
                    <h4 className='capitalize text-center font-bold text-gray-900 text-md'>capital back after 10days'</h4>
                    <h2 className='text-center text-4xl font-semibold mt-2'>$543 - $1800</h2>
                  </div>
                  <div className='flex items-center justify-center mt-5 mb-9'>
                  <h1 className='text-center bg-green-300 p-3 rounded-3xl text-2xl font-semibold capitalize text-gray-900'>start mining</h1>
                  </div>

                </Link>
                </div>
                {/* card end */}
                {/* card start */}
                <div className='flex flex-col justify-center items-center bg-green-500 rounded-lg shadow-2xl w-[300px]'>
                  <Link to={`/halong-rig-plan`} >
                
                  <GiUnlocking className='w-[150px] h-[150px] mb-5 mt-4 mx-auto'/>
                  <div className='capitalized'>
                    <h1 className='uppercase text-2xl text-center text-gray-900 font-bold mb-2'>halong rig plan</h1>
                    <p className='text-green-200 font-semibold capitalize text-3xl text-center mb-3'>daily 10% for 1 times(s) capital  back after 22Days</p>
                    <h4 className='capitalize text-center font-bold text-gray-900 text-md'>capital back after 22days'</h4>
                    <h2 className='text-center text-4xl font-semibold mt-2'>$1872 - $9800</h2>
                  </div>
                  <div className='flex items-center justify-center mt-5 mb-9'>
                  <h1 className='text-center bg-green-300 p-3 rounded-3xl text-2xl font-semibold capitalize text-gray-900'>start mining</h1>
                  </div>

                </Link>
                </div>
                {/* card end */}
                {/* card start */}
                <div className='flex flex-col justify-center items-center bg-green-500 rounded-lg shadow-2xl w-[300px]'>
                  <Link to={`/bitmain-rig-plan`} >
                
                  <FaUsers className='w-[150px] h-[150px] mb-5 mt-4 mx-auto'/>
                  <div className='capitalized'>
                    <h1 className='uppercase text-2xl text-center text-gray-900 font-bold mb-2'>bitmain rig plan</h1>
                    <p className='text-green-200 font-semibold capitalize text-3xl text-center mb-3'>daily 12% for 1 times(s) capital  back after 25Days</p>
                    <h4 className='capitalize text-center font-bold text-gray-900 text-md'>capital back after 25days'</h4>
                    <h2 className='text-center text-4xl font-semibold mt-2'>$10,000 - $34,000</h2>
                  </div>
                  <div className='flex items-center justify-center mt-5 mb-9'>
                  <h1 className='text-center bg-green-300 p-3 rounded-3xl text-2xl font-semibold capitalize text-gray-900'>start mining</h1>
                  </div>

                </Link>
                </div>
                {/* card end */}
                {/* card start */}
                <div className='flex flex-col justify-center items-center bg-green-500 rounded-lg shadow-2xl w-[300px]'>
                  <Link to={`/walton-rig-plan`} >
                
                  <BsPinFill className='w-[150px] h-[150px] mb-5 mt-4 mx-auto'/>
                  <div className='capitalized'>
                    <h1 className='uppercase text-2xl text-center text-gray-900 font-bold mb-2'>walton rig plan</h1>
                    <p className='text-green-200 font-semibold capitalize text-3xl text-center mb-3'>daily 15% for 1 times(s) capital  back after 22Days</p>
                    <h4 className='capitalize text-center font-bold text-gray-900 text-md'>capital back after 22days'</h4>
                    <h2 className='text-center text-4xl font-semibold mt-2'>$35,000 - $100,000</h2>
                  </div>
                  <div className='flex items-center justify-center mt-5 mb-9'>
                  <h1 className='text-center bg-green-300 p-3 rounded-3xl text-2xl font-semibold capitalize text-gray-900'>start mining</h1>
                  </div>

                </Link>
                </div>
                {/* card end */}
                {/* card start */}
                <div className='flex flex-col justify-center items-center bg-green-500 rounded-lg shadow-2xl w-[300px]'>
                  <Link to={`/super-rig-plan`} >
                
                  <GiTrophyCup className='w-[150px] h-[150px] mb-5 mt-4 mx-auto'/>
                  <div className='capitalized'>
                    <h1 className='uppercase text-2xl text-center text-gray-900 font-bold mb-2'>super rig plan</h1>
                    <p className='text-green-200 font-semibold capitalize text-3xl text-center mb-3'>daily 5% for 1 times(s) capital  back after 182Days</p>
                    <h4 className='capitalize text-center font-bold text-gray-900 text-md'>capital back after 182days'</h4>
                    <h2 className='text-center text-4xl font-semibold mt-2'>$100,000 - $500,000</h2>
                  </div>
                  <div className='flex items-center justify-center mt-5 mb-9'>
                  <h1 className='text-center bg-green-300 p-3 rounded-3xl text-2xl font-semibold capitalize text-gray-900'>start mining</h1>
                  </div>
                </Link>
                </div>
                {/* card end */}
              </div>
              
            </div>
          )
}
