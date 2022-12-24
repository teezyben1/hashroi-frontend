import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export const useSignup = () => {
const navigate = useNavigate()
 const[error, setError] = useState(null)
 const[isLoading, setIsLoading] =useState(null)
//  const[user, setUser] = useState(null)

    const signup = async (name,email,password,bitcoinAddress,liteAddress,etherAddress,tetherAddress) => {
        const URL = 'https://hashroi-api.onrender.com'
     const endPoint = 'signup'
        setIsLoading(true);
        setError(null);

        
        const response = await fetch(`${URL}/${endPoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password,
                bitcoinAddress,
                liteAddress,
                tetherAddress,
                etherAddress})
        
        })
        const result = await response.json();
        console.log(result)

        if (!result.error) {
            setIsLoading(false)
            setError(result)
            
        }

        if(result.token){

            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(result))
            navigate('/',{replace:true})

        }
}
return { signup, isLoading, error}
}
