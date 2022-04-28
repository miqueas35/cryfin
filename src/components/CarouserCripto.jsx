import React, { useEffect, useState } from "react";
import "../css/carousel.css";
import { getCoinCarousel } from "../helpers/criptoCarousel";
import CardCripto from "./CardCripto";
import Loading from "./Loading";

function CarouserCripto() {
  const [cripto, setCripto] = useState({
    loading: true,
    data: null,
  });

  let index =0;

  const CambioCripto = () => {
    getCoinCarousel(index).then((data) => {
      const { items } = data;
      setCripto({
        loading: false,
        data: items,
      });
    });
  };

  useEffect(() => {
    CambioCripto();
    temporizador();
  }, []);

  const temporizador = () => {
      setInterval( ()=> {
      if (index === 0) {
        index = 1;
      } else {
        index = 0;
        }
        CambioCripto()
      console.log(index);
    },5000);
  };

  console.log(cripto);
  return (
    <>
      {cripto.loading ? (
        <Loading />
      ) : (
        <div
          id="carouselExampleControls"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div className="conteiner">
                <div className="row">
                  <div className="col d-flex">
                    {cripto.data.map((cripto, index) => (
                      <CardCripto key={index} cripto={cripto} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="conteiner">
                <div className="row">
                  <div className="col d-flex">
                    {cripto.data.map((cripto, index) => (
                      <CardCripto key={index} cripto={cripto} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CarouserCripto;
