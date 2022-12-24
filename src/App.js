import React, { useEffect } from 'react'
import { Routes, Route,  useNavigate } from 'react-router-dom'
import { Home } from './containers/Home'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { fetchUser } from './utils/fetchUser'




const App = () => {



   

  
  
  return (
    <Routes>
    <Route  path='/*' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
  
  
  </Routes>
    
  )
}

export default App
