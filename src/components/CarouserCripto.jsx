import React, { useEffect, useState } from "react";
import "../css/carousel.css";
import { getCoinCarousel } from "../helpers/criptoCarousel";
import CardCripto from "./CardCripto";

function CarouserCripto() {
  const [cripto, setCripto] = useState({
    loading: true,
  });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getCoinCarousel(index).then((data) => {
      const { items } = data;
      setCripto({
        loading: false,
        data: items,
      });
    });
  }, []);

  console.log(cripto);
  return (
    <>
      {cripto.loading ? (
        <h3 className="text-white text-center">Cargando información...</h3>
      ) : (
        <div
          id="carouselExampleControls"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner my-3">
            <div className="carousel-item active" onChange={() => setIndex(0)}>
              <div className="conteiner">
                <div className="row">
                  <div className="col d-flex">
                    {cripto.data.map((cripto, index) => (
                      <CardCripto key={index} cripto={cripto}  />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" onChange={() => setIndex(1)}>
              <div className="conteiner">
                <div className="row">
                  <div className="col d-flex">
                    {cripto.data.map((cripto, index) => (
                      <CardCripto key={index} cripto={cripto}  />
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
