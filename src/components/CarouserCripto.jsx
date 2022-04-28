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

  const [index, setIndex] = useState(0);
  // let index;

  const CambioCripto = () => {
    getCoinCarousel(index).then((data) => {
      const { items } = data;
      setCripto({
        loading: false,
        data: items,
      });
    });
    temporizador();
  };

  useEffect(() => {
    CambioCripto();
  }, [index]);

  const temporizador = () => {
    setTimeout(() => {
      if (index === 0) {
        setIndex(1);
      } else {
        setIndex(0);
      }
    }, 10000);
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
