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
        <NavbarCryFIn />
      </div>
      <div>
        <CarouselHome />
        <div className="container">
          <div className="row pt-3">
            <CarouserCripto />
          </div>
          <div className="row py-3">
            <ShowProyect />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
