import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
const navigate = useNavigate()
 const[error, setError] = useState(null)
 const[isLoading, setIsLoading] =useState(null)
//  const[user, setUser] = useState(null)

    const login = async (email,password) => {
        // const URL = 'https://hashroi-api.onrender.com'
    //  const endPoint = 'login'
        setIsLoading(true);
        setError(null);

        
        const response = await fetch('https://elated-fatigues-bull.cyclic.app/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password,
                })
        
        })
        const result = await response.json();
        console.log(result)
        //   const userId = userI    //   const userId = userInfo.id

    //   const userId = userInfo.id


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
return { login, isLoading, error}
}
