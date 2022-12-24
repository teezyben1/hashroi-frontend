

      // GETTING USER INFO FROM THE BROWSER LOCAL_STORAGE 
    //   const URL = process.env.REACT_APP_URL
     const endPoint = 'pending-plans'
              
        export const pendingMining = async(id) => {
        const response = await fetch(`https://hashroi-api.onrender.com/${endPoint}/${id}`)
    return response.json()

}
