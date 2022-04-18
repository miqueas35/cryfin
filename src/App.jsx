import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import NavbarCryFIn from "./components/NavbarCryFIn"
import Footer from "./components/Footer"
import Loading from "./components/Loading"
// import Home from "./pages/Home";


import "../src/css/style.css"


const App = () => {
    return (

      <Footer>
      </Footer>

      // <BrowserRouter>
      //   <Routes>
      //     <Route
      //       path="/"
      //       element={
      //           <Home />
      //       }
      //     />


          
      //     {/* <Route
      //       path="coin/:coinId"
      //       element={
      //         <ProtectedRoutes>
      //           <CoinScreen />
      //         </ProtectedRoutes>
      //       }
      //     />
      //     <Route path="login" element={<LoginScreen />} />
      //     <Route path="*" element={<Error404 />} /> */}
      //   </Routes>
      // </BrowserRouter>
    );
  };
  
  export default App;
  