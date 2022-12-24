

// GETTING USER INFO FROM THE BROWSER LOCAL_STORAGE 
// const URL = process.env.REACT_APP_URL
     const endPoint = 'mined-plans'
        export const mined= async(id) => {
        const response = await fetch(`https://hashroi-api.onrender.com/${endPoint}/${id}`)
    return response.json()

}
