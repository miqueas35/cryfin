import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import NavbarCryFIn from "./components/NavbarCryFIn"
import Footer from "./components/Footer"
import Loading from "./components/Loading"
import ProjectContainer from "./pages/ProjectContainer"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Registro from "./pages/Registro"
import AboutUs from "./pages/AboutUs"



import "../src/css/style.css"
import "bootstrap/dist/css/bootstrap.min.css"

import "bootstrap/dist/js/bootstrap.bundle"




const App = () => {
    return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="*" element={ <Error404/> }/>
        {/* <Route path="modal" element={ <ModalPublicar/> }/> */}
        <Route path="login" element={ <Login/> }/>
        <Route path="registro" element={ <Registro/> }/>
        <Route path="about" element = { <AboutUs/> }/>
        <Route path="projects" element = { <ProjectContainer/> }/>
        {/* <Route path="selector" element={
          <ProtectedRoutes>
            <Selector/>
          </ProtectedRoutes>
        }/> */}
        
        
      </Routes>
      </BrowserRouter>
    );
  };
  
  
  

export default App;