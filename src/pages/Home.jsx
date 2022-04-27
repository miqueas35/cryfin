import React from "react";
import CarouselHome from "../components/CarouselHome";
import CarouserCripto from "../components/CarouserCripto";
import Footer from "../components/Footer";
import NavbarCryFIn from "../components/NavbarCryFIn";
import ShowProyect from "../components/ShowProyect";

function Home() {
  return (
    <div>
      <div>
        <NavbarCryFIn/>
      </div>
      <div>
      <CarouselHome />
          <CarouserCripto />
          <ShowProyect />
       </div>
      <div>
        <Footer/>
      </div>
   
    </div>
    
  );
}

export default Home;
