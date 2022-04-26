import React, { useEffect, useState } from "react";
import "../css/carousel.css";
import invercionImg from "../Img/Inversiones/inversiones.png";
import { getCoinCarousel } from "../helpers/criptoCarousel";

function CarouserCripto() {
  const [cripto, setCripto] = useState({
    loading: true,
  });

  useEffect(() => {
      getCoinCarousel().then((data) => {
        const {items} = data; 
      setCripto({
        loading: false,
        data: items,
      });
    });
}, []);

console.log(cripto);
  return (
      <div>
          { cripto.loading ? (<h3 className="text-white text-center">Cargando información...</h3>) : (
              <div
                  id="carouselExampleControls"
                  class="carousel slide "
                  data-bs-ride="carousel"
              >
                  <div class="carousel-inner my-3">
                      <div class="carousel-item active">
                          <div className="conteiner">
                              <div className="row">
                                  <div className="col d-flex">
                                      <div class="card ">
                                          <div class="row g-0 cripto">
                                              <div className="col-6">
                                                  <img
                                                      src={cripto.data[0].logo_url}
                                                      class="img-fluid "
                                                      alt="..."
                                                  />
                                              </div>
                                              <div class="col-6 d-flex align-items-center">
                                                  <p class="card-text ">${cripto.data[0].quote_rate}</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="card ">
                                          <div class="row g-0 cripto">
                                              <div className="col-6">
                                                  <img src={invercionImg} class="img-fluid " alt="..." />
                                              </div>
                                              <div class="col-6 d-flex align-items-center">
                                                  <p class="card-text ">This is a</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="card ">
                                          <div class="row g-0 cripto">
                                              <div className="col-6">
                                                  <img src={invercionImg} class="img-fluid " alt="..." />
                                              </div>
                                              <div class="col-6 d-flex align-items-center ">
                                                  <p class="card-text ">This is a</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="card ">
                                          <div class="row g-0 cripto">
                                              <div className="col-6">
                                                  <img src={invercionImg} class="img-fluid " alt="..." />
                                              </div>
                                              <div class="col-6 d-flex align-items-center">
                                                  <p class="card-text ">This is a</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="card ">
                                          <div class="row g-0 cripto">
                                              <div className="col-6">
                                                  <img src={invercionImg} class="img-fluid " alt="..." />
                                              </div>
                                              <div class="col-6 d-flex align-items-center">
                                                  <p class="card-text ">This is a</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div class="carousel-item">
                          <div className="conteiner">
                              <div className="row">
                                  <div className="col d-flex">
                                      <div class="card ">
                                          <div class="row g-0 cripto">
                                              <div className="col-6">
                                                  <img src={invercionImg} class="img-fluid " alt="..." />
                                              </div>
                                              <div class="col-6 d-flex align-items-center">
                                                  <p class="card-text ">This is a</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="card ">
                                          <div class="row g-0 cripto">
                                              <div className="col-6">
                                                  <img src={invercionImg} class="img-fluid " alt="..." />
                                              </div>
                                              <div class="col-6 d-flex align-items-center">
                                                  <p class="card-text ">This is a</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="card ">
                                          <div class="row g-0 cripto">
                                              <div className="col-6">
                                                  <img src={invercionImg} class="img-fluid " alt="..." />
                                              </div>
                                              <div class="col-6 d-flex align-items-center">
                                                  <p class="card-text ">This is a</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="card ">
                                          <div class="row g-0 cripto">
                                              <div className="col-6">
                                                  <img src={invercionImg} class="img-fluid " alt="..." />
                                              </div>
                                              <div class="col-6 d-flex align-items-center">
                                                  <p class="card-text ">This is a</p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="card ">
                                          <div class="row g-0 cripto">
                                              <div className="col-6">
                                                  <img src={invercionImg} class="img-fluid " alt="..." />
                                              </div>
                                              <div class="col-6 d-flex align-items-center">
                                                  <p class="card-text ">This is a</p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      </div>
          
                  
              </div>)} 
    </div>
  );
}

export default CarouserCripto;
