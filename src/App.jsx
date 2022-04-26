import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./css/style.css";
import Login from "./pages/Login";
import ModalPublicar from "./pages/ModalPublicar";
import Registro from "./pages/Registro";
import Selector from "./pages/Selector";
import ProtectedRoutes from "./routes/ProtectedRoutes";


const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="modal" element={<ModalPublicar/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="registro" element={<Registro/>}/>
        <Route path="selector" element={
          <ProtectedRoutes>
            <Selector/>
          </ProtectedRoutes>
        }/>
        
        
      </Routes>
      </BrowserRouter>
  
  );}

export default App;