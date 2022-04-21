import { BrowserRouter,Routes,Route } from "react-router-dom"
import "./css/style.css"
import Login from "./pages/Login"
import Selector from "./pages/Selector"


const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="selector" element={<Selector/>}/>
      </Routes>
      </BrowserRouter>
  
  )
}

export default App
