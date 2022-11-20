import React from 'react'

import liveSup from '../assets/liveSup.png'
import trust from '../assets/trust.png'
import ssh from '../assets/ssh.png'
import refer from '../assets/refer.png'
import coin from '../assets/coin.png'


const Section3 = () => {
  return (
    <div className='my-3 p-3'>
      <div className='text-center font-semibold text-2xl text-gray-400 my-10'>
        <h1 >WHY HASHROI ?</h1>
      </div>
      <div className='flex gap-3 items-center flex-col md:flex-row  '>
        <div className="flex justify-between items-center gap-5 bg-green-300 rounded-xl p-10">
            <div>
                <img src={coin} alt="pay"className="w-[200px] h-[100px] rounded-5xl" />
            </div>
            <div>
                <p>Instant deposits and payment</p>
                <p>All our payments are processed in 24 hours. No more waiting!</p>
            </div>
        </div>
        <div className="flex justify-between items-center gap-5 bg-green-200 rounded-xl p-10">
            
                <img src={ssh} alt="sec" className="w-[200px] h-[100px] rounded-5xl"/>
            
            <div>
                <p>EV SSL certified</p>
                <p>An Extended Validation SSL Certificate is the highest form of SSL Certificate on the market</p>
            </div>
        </div>
        <div className="flex justify-between items-center gap-5 bg-green-300 rounded-xl p-10">
            
                <img src={trust} alt="u"className="w-[200px] h-[100px] rounded-5xl" />
            
            <div>
                <p>Legally registered</p>
                <p>CoinsValue is registered in the UK, which means that we have a serious business.</p>
            </div>
            </div>
            {/* <div className="flex justify-between items-center bg-green-300 rounded-xl p-2">
            
                <img src={refer} alt="" className="w-[200px] h-[100px] rounded-5xl"/>
            
            <div className="">
                <p>Referral bonus</p>
                <p>Get 10% referral bonus for each person you refer to us</p>
            </div>
        </div> */}
        {/* <div className="flex justify-between items-center  bg-green-700 rounded-xl p-2">
            <div>
                <img src={liveSup} alt="" className="w-[200px] h-[100px]"/>
            </div>
            <div>
                <p>live support</p>
                <p>always available to assist you </p>
            </div>
        </div> */}
        </div>
      
    </div>

  )
}

export default Section3
