import React from "react";
import invercionImg from "../Img/Inversiones/inversiones.png";
import invercionImg2 from "../Img/Inversiones/inversiones2.png";
import invercionImg3 from "../Img/Inversiones/inversiones3.png";
import "../css/carousel.css";

function CarouselHome() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner imgConfig">
        <div className="carousel-item active ">
          <img src={invercionImg} className="d-block  " alt="inversiones" />
        </div>
        <div className="carousel-item ">
          <img src={invercionImg2} className="d-block  " alt="inversiones2" />
        </div>
        <div className="carousel-item ">
          <img src={invercionImg3} className="d-block  " alt="inversiones3" />
        </div>
        <div className="container d-flex ">
          <p className="card-text col-3 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dicta
            placeat sapiente quae doloremque inventore quidem omnis harum porro
            optio. Fugiat numquam ad repudiandae iure modi natus beatae
            assumenda unde.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarouselHome;
