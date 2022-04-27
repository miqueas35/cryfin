import React from "react";
import CarouselHome from "../components/CarouselHome";
import CarouserCripto from "../components/CarouserCripto";
import ShowProyect from "../components/ShowProyect";

function Home() {
  return (
    <div>
      <CarouselHome />
      <div className="container">
          <CarouserCripto />
          <ShowProyect />
      </div>
      
    </div>
  );
}

export default Home;
