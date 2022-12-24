import React, { useEffect, useRef, useState } from 'react'
import { HiMenu } from 'react-icons/hi'
  import { AiFillCloseCircle} from 'react-icons/ai'
  import { Link, Route, Routes, useNavigate} from 'react-router-dom'
  import { SideBar} from '../components/SideBar'

  import  h2  from '../assets/h2.png'
import { MiningPlan } from '../components/MiningPlan'
import { RecentMining } from '../components/RecentMining'
import { CurrentMining } from '../components/CurrentMining'
import { Withdrawal } from '../components/Withdrawal'
import { Faq } from '../components/Faq'
import { MyStats } from '../components/MyStats'
import { TestPlan } from '../plans/TestPlan'
import { BitmainPlan } from '../plans/BitmainPlan'
import { HalongPlan } from '../plans/HalongPlan'
import { SuperPlan } from '../plans/SuperPlan'
import { WaltonPlan } from '../plans/WaltonPlan'
import { AsicPlan } from '../plans/AsicPlan'
import { PendingMining } from '../components/PendingMining'
import { SuccessPage } from '../components/SuccessPage'
import { WithdrawSuccess } from '../components/WithdrawSuccess'
import { fetchUser } from '../utils/fetchUser'



export const Home = () => {
  const [toggleSidebar, setToggleSidebar ] = useState(false)
  const scrollRef = useRef(null)
  const[pendingPlan, setPendingPlan] = useState([])
  const[currentPlan, setCurrentPlan] = useState([])
  const[minedPlan, setMinedPlan] = useState([])
  const [user, setUser] = useState(null )
  const userInfo = fetchUser()

  const navigate = useNavigate();




  useEffect(() =>{
    setUser(userInfo)
    if(!userInfo) navigate('/login')

  },[])


  // useEffect(() =>{
    

  // },[]) 



  useEffect(() =>{

    scrollRef.current.scrollTo(0,0)
  },[])




  return (
    <div className='flex bg-gray-200 md:flex-row flex-col h-screen transition-height duration-75 ease-out  '>
    {/* FOR SIDEBAR */}
      <div className='hidden md:flex h-screen flex-initial  '>
        <SideBar user={userInfo && userInfo}/>
      </div>
        
        {/* FOR THE HEADER ON SMALL DEVICE */}
      <div className='flex md:hidden flex-row'>
          <div className="p-2 w-full flex flex-row justify-between item-center shadow-md">
              <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)}/>
              <Link to="/">
                  <img src={h2} alt="logo" className='w-28'  />
              </Link>                                  

              
          </div>
        {/* TOGGLING SIDEBAR ON SMALL DEVICE */}
          {toggleSidebar && (
              <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
                  <div className="absolute w-full flex justify-end items-center p-2">
                    <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(false)}/>   
                  </div>
                  <SideBar closeToggle={setToggleSidebar} user={userInfo && userInfo}/>
              </div>
          )}
      </div> 
      <div className='p-5 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>
      <Routes>
        <Route path='/' element={<MiningPlan/>}/>
        <Route path='/recent-mining' element={<RecentMining user={userInfo && userInfo}/>}/>
        <Route path='/pending-mining' element={<PendingMining  user={userInfo && userInfo}/>}/>
        <Route path='/my-stats' element={<MyStats user={userInfo && userInfo}/>} />
        <Route path='/withdrawal' element={<Withdrawal user={userInfo && userInfo}/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/current-mining' element={<CurrentMining user={userInfo && userInfo}/>}/>
        <Route path='/test-plan' element={<TestPlan/>}/>
        <Route path='/bitmain-rig-plan' element={<BitmainPlan/>}/>
        <Route path='/halong-rig-plan' element={<HalongPlan/>}/>
        <Route path='/super-rig-plan' element={<SuperPlan/>}/>
        <Route path='/asic-rig-plan' element={<AsicPlan/>}/>
        <Route path='/Walton-rig-plan' element={<WaltonPlan/>}/>
        <Route path='/success' element={<SuccessPage/>}/>
        <Route path='/withdraw-success' element={<WithdrawSuccess/>}/>

      </Routes>
      </div>
      </div>
  )
}
export default Home