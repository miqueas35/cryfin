import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import NavbarCryFIn from "./components/NavbarCryFIn"
import Footer from "./components/Footer"
import Loading from "./components/Loading"
import ProjectContainer from "./components/ProjectContainer"


// import Home from "./pages/Home"


import "../src/css/style.css"
import "bootstrap/dist/css/bootstrap.min.css"

import "bootstrap/dist/js/bootstrap.bundle"




const App = () => {
    return (

      <div>
        <Error404/>
      </div>
    );
  };
  
  
  

export default App;