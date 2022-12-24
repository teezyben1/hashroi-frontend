

      // GETTING USER INFO FROM THE BROWSER LOCAL_STORAGE 
      
     const URL = process.env.REACT_APP_URL
     const endPoint = 'current-plan'
      
      export const currentMining = async(id) => {
    const response = await fetch(`${URL}/${endPoint}/${id}`)
    return response.json()

}
