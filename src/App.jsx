import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

// import React from 'react'

const App=()=>{
    return(
     <BrowserRouter>
     <Routes>
         <Route path='login' element={<Login/>}/>
     </Routes>
     </BrowserRouter>
    )

    
}
export default App