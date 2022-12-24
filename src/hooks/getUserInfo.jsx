

      // GETTING USER INFO FROM THE BROWSER LOCAL_STORAGE 
      const URL = process.env.REACT_APP_URL
     const endPoint = 'user-info'
     const endPoint1 = 'mined-plans'
     const endPoint2 = 'withdrawals'

      
      
      export const userFromDb = async(id) => {
    const response = await fetch(`${URL}/${endPoint}/${id}`)
    return response.json()

}

export const mined= async(id) => {

    const response = await fetch(`${URL}/${endPoint1}/${id}`)
    return response.json()

}

       
export const totalWithdrawals= async(id) => {

    const response = await fetch(`${URL}/${endPoint2}/${id}`)
    return response.json()

}

