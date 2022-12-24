import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { fetchUser } from "../utils/fetchUser";

export const useWithdrawal = () => {
    const navigate = useNavigate()

 const[error, setError] = useState(null)
 const[isLoading, setIsLoading] =useState(null)
//  const[user, setUser] = useState(null)



    const withdraw = async (userId, amount,paymentMethod, address) => {
        const URL = process.env.REACT_APP_URL
     const endPoint = 'withdraw'
        setIsLoading(true);
        setError(null);
       

        
        const response = await fetch(`${URL}/${endPoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId,amount, paymentMethod,address})
        
        })
        const result = await response.json();
        // console.log(result)
        console.log(result.message)
        if(result.message === 'withdraw success'){
            navigate('/withdraw-success')
        }

        
}
return { withdraw, isLoading, error}
}
