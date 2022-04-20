import React from "react";
import CarouselHome from "../components/CarouselHome";
import CriptoLoading from "../components/CriptoLoading";
import ShowProyect from "../components/ShowProyect";

function Home() {
  return (
    <div>
      <CarouselHome />
          <CriptoLoading />
          <ShowProyect />

      
    </div>
  );
}

export default Home;
