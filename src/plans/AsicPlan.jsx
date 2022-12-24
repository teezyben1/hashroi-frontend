import React, { useState } from 'react'
import { useCreatePlan } from '../hooks/useCreatePlan'
import { fetchUser } from '../utils/fetchUser'

export const AsicPlan = () => {
    const [paymentMethod, setPaymentMethod] = useState('')
    const [amountInCrypto,setAmountInCrypto] = useState(0)
    const [amount,setAmount] = useState(543)
    const [address, setAdress] = useState('click to  see address')
    const [showAddress, setShowAddress] = useState('hidden')
    const [showButton, setShowButton] = useState('')
    const [walletAddress, setWalletAddress] = useState('')
    const [showInfo, setShowInfo] = useState('hidden')
    const [amountError, setAmountError] = useState('hidden')
    const [profit, setProfit] = useState(0)
    const [total, setTotal] = useState(0)
    const [showProfit, setShowProfit] = useState('hidden')
    const [planName, setPlanName] = useState('Asic plan')
    const {createPlan, isLoading, error} =  useCreatePlan()
    const [roi, setRoi] = useState(7)
    const[days,setdays] =useState(10)

      // GETTING USER INFO FROM THE BROWSER LOCAL_STORAGE 
  const userInfo = fetchUser()
  const userId = userInfo.id



    const reset = ()=> {
        setShowButton('block')
        setShowAddress('hidden')
        setShowInfo('hidden')
        setAmountError('hidden')
        setShowProfit('hidden')
    }

    const check = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setShowProfit('block')
        setProfit(7 / 100 * amount)
        setTotal(7 / 100 * amount  + +amount)
        if(amount < 543){
            setAmountError('block')
        }else if(amount > 1800){
            setAmountError('block')
        }

        else{
        if(paymentMethod === "BTC"){
            let sum = Number(amount) * 0.000059391
            setAmountInCrypto(sum.toFixed(6) + ' ' + 'BTC')
            setShowButton('hidden')
            setShowAddress('block')
            setWalletAddress('bc1q9fac0umxvv6ygs4yw9srxcx8yj6py2ec3hlfxp')
            setShowInfo('block')
        }

        if(paymentMethod === "LTC"){
            let sum = Number(amount) * 0.012786
            setAmountInCrypto(sum.toFixed(6)  + ' ' + 'LTC')
            setShowButton('hidden')
            setShowAddress('block')
            setWalletAddress('ltc1qvlh5lgrgtmmg0lv3gz34h2sfd5h9kvr230099g')
            setShowInfo('block')
        }

        if(paymentMethod === "ETH"){
            let sum = Number(amount) * 0.000812665 
            setAmountInCrypto(sum.toFixed(6)  + ' ' + 'ETH')
            setShowButton('hidden')
            setShowAddress('block')
            setWalletAddress('0xe1c8AE8e3aa2dEb9150f8bf4Bd21741b6Fc3A91d')
            setShowInfo('block')
        }

        if(paymentMethod === "TET"){
            let sum = Number(amount) * 0.999794 
            setAmountInCrypto(sum.toFixed(6)  + ' ' + 'TET')
            setShowButton('hidden')
            setShowAddress('block')
            setWalletAddress('TTwutwm9jw9fFRtunKgnpVQnEy2WtkCG22')
            setShowInfo('block')
        }
    }
        
    }

const createMiningPlan = async(e) => {
    e.preventDefault()
        await createPlan( userId, planName, amount, profit, total, roi, days, paymentMethod)
        
    
}



  return (
    <div className=' shadow-sm  h-full '>
        <div className={`${amountError} mb-3 bg-gray-200 w-[330px] rounded-sm font-nunito `}><h1 className='text-red-600 text-sm'>Amount should range from $543 - $1,800</h1></div>
    
        <form onSubmit={createMiningPlan} className='flex flex-col gap-2'>
            <div className='flex flex-col   '>
                <label className='text-lg font-nunito text-gray-900 capitalize '>plan:</label>
                <input  type="text" className='font-nunito border-2 p-1 w-[200px] capitalize text-xl rounded-md border-gray-600' value={planName} disabled  />
            </div>
            <div className='flex flex-col   '>
                <label  className='text-lg font-nunito text-gray-900 font-semibold'>Roi:</label>
                <input  type="text" className='font-nunito border-2 p-1 w-[200px] text-xl rounded-md border-gray-600' value={`${roi}%`} disabled  />
            </div>
            <div className='flex flex-col '>
                <label  className='text-lg font-nunito text-gray-900 font-semibold' >Amount$:</label>
                <input onClick={reset}  onChange={(e) => setAmount(e.target.value)} value={amount} type="number" className='font-nunito border-2 p-1 w-[200px] rounded-md text-xl border-gray-600'/>
            </div>
            <div className={` ${showProfit} flex flex-col `}  >
              <p className='font-nunito capitalize text-gray-900'>profit: ${profit}</p>
              <p className='font-nunito capitalize text-gray-900'>total return: ${total}</p>
            </div>
           
            <div className='flex flex-col mt-2'>
              <div>
                    <p className='mb-2 font-nunito text-lg sm:text-xl text-gray-900'  >Choose a Payment Method</p>
                    <select
                    onClick={reset} 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md capitalize cursor-pointer" 
                    >
                        <option value="other" className='bg-white font-nunito'>Select Category</option>
                        <option className='text-base border-0 outline-none font-nunito bg-white text-black'
                            value="BTC">Bitcoin</option>
                            <option className='text-base border-0 outline-none font-nunito  bg-white text-black'
                            value="LTC">Litecoin</option>
                            <option className='text-base border-0 outline-none font-nunito  bg-white text-black'
                            value="ETH">Ethereum</option>
                            <option className='text-base border-0 outline-none font-nunito  bg-white text-black'
                            value="TET">Tether TRC20</option>
                    </select>
              </div>
              
            
               <p className='text-base text-gray-800 pt-3 font-nunito'>You are paying: {amountInCrypto}</p>
            </div>
              

            <div className='mx-auto  p-2 rounded-2xl w-50 '>
                <button onClick={check} className={` ${showButton} font-nunito bg-green-300 rounded-lg text-center mt-3 font-semibold text-lg text-gray-900 capitalize`} >{address}</button>
                <div className='mt-1'>
                    <p className='text-green-500 text-emerald-400 capitalize font-nunito'>Please pay to this address</p>
                    <h1 className={ `${showAddress} text-sm font-nunito text-gray-900`}>{walletAddress}</h1>
                </div>
            </div>

            <div className={`${showInfo} mt-5`}>
                <p className='text-sm text-red-400'>Send  {amountInCrypto} to the above address. After you have made the payment come back and click start mining to activate your mining plan  </p>
                {/* TODO function for submitting mining plan to database */}
                <button className={`bg-green-300 p-2 rounded-full mt-7 capitalize text-gray-900 font-nunito`}>start mining</button>
            </div>
        </form>
    </div>
  )
}
export default AsicPlan