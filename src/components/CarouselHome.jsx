import React from "react";
import invercionImg from "../img/Inversiones/inversiones.png";
import invercionImg2 from "../img/Inversiones/inversiones2.png";
import invercionImg3 from "../img/Inversiones/inversiones3.png";
import "../css/carousel.css";

function CarouselHome() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner imgConfig">
        <div className="carousel-item active ">
          <img
            src={invercionImg}
            className="d-block img-fluid"
            alt="inversiones"
          />
        </div>
        <div className="carousel-item ">
          <img
            src={invercionImg2}
            className="d-block img-fluid"
            alt="inversiones2"
          />
        </div>
        <div className="carousel-item ">
          <img
            src={invercionImg3}
            className="d-block img-fluid"
            alt="inversiones3"
          />
        </div>
        <div className="txt-container text-uppercase">
          Crypto Future Investments es la forma más rápida y fácil de invertir
          desde tu casa
        </div>
      </div>
    </div>
  );
}

export default CarouselHome;

// container
// d-flex
// align-items-center
// justify-content-end">
