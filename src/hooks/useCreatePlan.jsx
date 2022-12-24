import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export const useCreatePlan = () => {
    const URL = 'https://hashroi-api.onrender.com'
     const endPoint = 'create-mining'
      
    const navigate = useNavigate()

 const[error, setError] = useState(null)
 const[isLoading, setIsLoading] =useState(null)
//  const[user, setUser] = useState(null)

    const createPlan = async (userId, planName, amount, profit, total, roi, days, paymentMethod) => {
        setIsLoading(true);
        setError(null);

        
        const response = await fetch(`${URL}/${endPoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId, planName, amount, profit, total, roi, days, paymentMethod})
        
        })
        const result = await response.json();
        if(result.plan){
            navigate('/success',{replace:true})
        }

        
}
return { createPlan, isLoading, error}
}
