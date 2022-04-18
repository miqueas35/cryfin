import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import React from 'react'
import Login from './pages/Login'
import Selector from './pages/Selector'
import PublicarProyecto from './pages/PublicarProyecto'
import Invertir from './pages/Invertir'
import "./css/login.css"

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element= {<Home/>}/> */}
        {/* <Route path='*' element= {<Error404/>}/> */}
        <Route path='login' element= {<Login/>}/>
        <Route path='selector' element= {<Selector/>}/>
        <Route path='publicarproyecto' element= {<PublicarProyecto/>}/>
        <Route path='invertir' element= {<Invertir/>}/>
      </Routes>
      </BrowserRouter>
  
  )
}

export default App