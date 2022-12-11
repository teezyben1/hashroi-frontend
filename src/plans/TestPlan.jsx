import React, { useState } from 'react'

export const TestPlan = () => {
    const [paymentMethod, setPaymentMethod] = useState('')
    const [amountInCrypto,setAmountInCrypto] = useState(0)
    const [amount,setAmount] = useState(50)
    const [address, setAdress] = useState('click to  see address')
    const [showAddress, setShowAddress] = useState('hidden')
    const [showButton, setShowButton] = useState('')
    const [walletAddress, setWalletAddress] = useState('')
    const [showInfo, setShowInfo] = useState('hidden')
    const [amountError, setAmountError] = useState('hidden')


    const reset = ()=> {
        setShowButton('block')
        setShowAddress('hidden')
        setShowInfo('hidden')
        setAmountError('hidden')
    }

    const check = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(amount < 50){
            setAmountError('block')
        }else if(amount > 500){
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



  return (
    <div className='    mt-10  shadow-sm  h-full '>
        <div className={`${amountError} mb-3 bg-gray-200 w-[330px] rounded-sm`}><h1 className='text-red-600 text-sm'>Amount should range from $50 - $500</h1></div>
    
        <form className='flex flex-col gap-2'>
            <div className='flex flex-col   '>
                <label htmlFor="planName" className='text-lg font-nunito-200 text-gray-900 font-semibold'>Plan:</label>
                <input  type="text" className='border-2 p-1 w-[200px] text-xl rounded-md border-gray-600' value="Test Plan" disabled  />
            </div>
            <div className='flex flex-col '>
                <label htmlFor="amount" className='text-lg font-nunito-200 text-gray-900 font-semibold' >Amount$:</label>
                <input onClick={reset}  onChange={(e) => setAmount(e.target.value)} value={amount} type="number" className='border-2 p-1 w-[200px] rounded-md text-xl border-gray-600'/>
            </div>
           
            <div className='flex flex-col mt-2'>
              <div>
                    <p className='mb-2 font-semibold text-lg sm:text-xl text-gray-900'  >Choose a Payment Method</p>
                    <select
                    onClick={reset} 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md capitalize cursor-pointer" 
                    >
                        <option value="other" className='bg-white'>Select Category</option>
                        <option className='text-base border-0 outline-none  bg-white text-black'
                            value="BTC">Bitcoin</option>
                            <option className='text-base border-0 outline-none  bg-white text-black'
                            value="LTC">Litecoin</option>
                            <option className='text-base border-0 outline-none  bg-white text-black'
                            value="ETH">Ethereum</option>
                            <option className='text-base border-0 outline-none  bg-white text-black'
                            value="TET">Tether TRC20</option>
                    </select>
              </div>
               <p className='text-base text-gray-800 pt-3'>You are paying: {amountInCrypto}</p>
            </div>
              

            <div className='mx-auto  p-2 rounded-2xl w-50 '>
                <button onClick={check} className={` ${showButton} bg-green-300 rounded-lg text-center mt-3 font-semibold text-lg text-gray-900 capitalize`} >{address}</button>
                <div className='mt-5'>
                    <p className='text-green-500 capitalize'>Please pay to this address</p>
                    <h1 className={ `${showAddress} text-sm text-gray-900`}>{walletAddress}</h1>
                </div>
            </div>

            <div className={`${showInfo} mt-10`}>
                <p className='text-sm text-red-400'>Send  {amountInCrypto} to the above address. After you have made the payment come back and click start mining to activate your mining plan  </p>
                {/* TODO function for submitting mining plan to database */}
                <button className={`bg-green-300 p-2 rounded-full mt-5 capitalize text-gray-900 font-semibold`}>start mining</button>
            </div>
        </form>
    </div>
  )
}
export default TestPlan