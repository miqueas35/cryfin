import React, { useEffect, useState } from "react";
import { getCoinCarousel } from "../helpers/criptoCarousel";
import CarouselCripto from "./CarouselCripto";

function CriptoLoading() {
  const [cripto, setCripto] = useState({
    loading: true,
  });
  let index = 0;

  const CambioCripto = () => {
    getCoinCarousel(index).then((data) => {
      const { items } = data;
      setCripto({
        loading: false,
        data: items,
      });
    }); 
    temporizador()
  }

  useEffect(() => {
    CambioCripto()
        
  }, []);

  const temporizador = () => {
    setTimeout(() => {
      if (index === 0) {
        index = 1
      } else {
        index = 0
      }
      
      CambioCripto()
      
    }, 10000)
  }
  // console.log(cripto);
  return (
    <>
      {cripto.loading ? (
        <h3 className="text-white text-center">Cargando información...</h3>
      ) : (
        <CarouselCripto cripto={cripto} />
      )}
    </>
  );
}

export default CriptoLoading;
