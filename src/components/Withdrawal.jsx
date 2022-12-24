import React, { useEffect, useState } from 'react'
import { userFromDb } from '../hooks/getUserInfo'
import { ThreeDots } from 'react-loader-spinner'
import { fetchUser } from '../utils/fetchUser'
import{ useWithdrawal} from '../hooks/useWithdrawal'


export const Withdrawal = () => {
    const [paymentMethod, setPaymentMethod] = useState('')
    const [amountInCrypto,setAmountInCrypto] = useState(0)
    const [amount,setAmount] = useState(50)
    const [address, setAdress] = useState('click to  see your address')
    const [showAddress, setShowAddress] = useState('hidden')
    const [showButton, setShowButton] = useState('')
    const [walletAddress, setWalletAddress] = useState('')
    const [showInfo, setShowInfo] = useState('hidden')
    const [amountError, setAmountError] = useState('hidden')
    const [cryptoAddress, setCryptoAddress ] = useState('')
    const [balance, setBalance] = useState(2000)
    const [loader, setLoader] = useState('hidden')
    const {withdraw, isLoading, error} =  useWithdrawal()

    const userInfo = fetchUser()
      const userId = userInfo.id



    const reset = ()=> {
        setShowButton('block')
        setShowAddress('hidden')
        setShowInfo('hidden')
        setAmountError('hidden')
    }

    const check = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(amount > balance){
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
            setCryptoAddress('Bitcoin')
        }

        if(paymentMethod === "LTC"){
            let sum = Number(amount) * 0.012786
            setAmountInCrypto(sum.toFixed(6)  + ' ' + 'LTC')
            setShowButton('hidden')
            setShowAddress('block')
            setWalletAddress('ltc1qvlh5lgrgtmmg0lv3gz34h2sfd5h9kvr230099g')
            setShowInfo('block')
            setCryptoAddress('litecoin')
        }

        if(paymentMethod === "ETH"){
            let sum = Number(amount) * 0.000812665 
            setAmountInCrypto(sum.toFixed(6)  + ' ' + 'ETH')
            setShowButton('hidden')
            setShowAddress('block')
            setWalletAddress('0xe1c8AE8e3aa2dEb9150f8bf4Bd21741b6Fc3A91d')
            setShowInfo('block')
            setCryptoAddress('ethereum')
        }

        if(paymentMethod === "TET"){
            let sum = Number(amount) * 0.999794 
            setAmountInCrypto(sum.toFixed(6)  + ' ' + 'TET')
            setShowButton('hidden')
            setShowAddress('block')
            setWalletAddress('TTwutwm9jw9fFRtunKgnpVQnEy2WtkCG22')
            setShowInfo('block')
            setCryptoAddress('tetherTRC20')
        }
    }
        
    }

    const handleWithdraw = async(e) => {
        e.preventDefault()
        setLoader('block')
        await withdraw(userId,amount, paymentMethod, address)

    }
    

    useEffect(() => {
        
          (async() => {
            const Data = await userFromDb(userId)
            setBalance(Data.user.balance)
           
           })();
        
      },[])



  return (
    <div className='    mt-1  shadow-sm  h-full '>
      <div>
        <h1 className='text-center mb-5 text-2xl capitalize font-nunito'>ask for withdrawal</h1>
        <h1 className='mb-5 text-2xl capitalize font-nunito'><span className='bg-red-200 rounded-md'> current balance: ${balance}</span></h1>
      </div>
        <div className={`${amountError} mb-3 bg-gray-200 w-[330px] rounded-sm`}><h1 className='text-red-600 text-lg capitalize'>insufficient balance</h1></div>
    
        <form onSubmit={handleWithdraw} className='flex flex-col gap-2'>
           
            <div className='flex flex-col '>
                <label htmlFor="amount" className='text-lg font-nunito-200 text-gray-900 font-semibold' >Amount$:</label>
                <input onClick={reset}  onChange={(e) => setAmount(e.target.value)} value={amount} type="number" className='border-2 p-1 w-[200px] rounded-md text-xl border-gray-600'/>
            </div>
           
            <div className='flex flex-col mt-2'>
              <div>
                    <p className='mb-2 font-semibold text-lg sm:text-xl text-gray-900'  >Choose a withdrawal Method</p>
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
            </div>
              

            <div className='mx-auto  p-2 rounded-2xl w-50 '>
                <button onClick={check} className={` ${showButton} bg-green-300 rounded-lg text-center mt-3 font-semibold text-lg text-gray-900 capitalize`} >{address}</button>
                <div className='mt-2'>
                  <p className='text-green-500 capitalize'>this is your {cryptoAddress}  address</p>
                    <h1 className={ `${showAddress} text-sm text-gray-900`}>{walletAddress}</h1>
                </div>
            </div>

            <div className={`${showInfo} mt-2`}>
                <p className='text-sm text-red-400'>{amountInCrypto} will be sent to the above address once withdrawal is approved. Approval takes 3 to 24 hours  </p>
                {/* TODO function for submitting mining plan to database */}
                <div className='flex items-center'>
                <button className={`bg-green-300 p-2 rounded-full mt-5 capitalize text-gray-900 font-semibold`}>withdraw</button>
                {/* <div className={`${loader} mt-4`}>
                  <ThreeDots
                      type="circle"
                      color='white'
                      height={30}
                      width={100}
                    />
                </div> */}

                </div>
            </div>
        </form>
    </div>
  )
}
export default Withdrawal