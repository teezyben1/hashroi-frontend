import React from 'react'
import crypto8 from '../assets/crypto8.png'
import Nav from '../components/Nav'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'


export const Home = () => {



  return (
    <div className='bg-gray-900 relative bg-gradient-to-tl from-gray-500 to-green-900 overflow-hidden p-2'>
        <div className='flex '>
          <img src={crypto8} alt="pic" className=' w-screen h-[500px] md:h-[600px] object-fit mix-blend-overlay' />
          <div className='absolute z-1 top-[-20px]' >
          <Nav className="sticky top-0"/>
          </div>
        </div>
        <Section1/>
        <div>
          <div>
            <Section2/>
          </div>
          <Section3/>

        </div>
      </div>

  )
}
export default Home