import React from "react";
import NavbarCryFIn from "../components/NavbarCryFIn";
import Footer from "../components/Footer";

import Miqueas from "../img/Nosotros/Miqueas.jpg";
import Cecy from "../img/Nosotros/Cecy.jpg";
import Juan from "../img/Nosotros/Juan.jpg";

import "../css/aboutUs.css";

function AboutUs() {
  return (
    <div>
      <div>
        <NavbarCryFIn />
      </div>
      <div className="container">
        <div className=" row d-flex justify-content-center">
          <div className="col my-3">
            <h2 className="display-4 text-center">Conocenos</h2>
          </div>
        </div>
        <div className=" row d-flex justify-content-center">
          <div className="col-4">
            <div className="card my-3">
              <img src={Juan} className="card-img-top" alt="jAA" />
              <div className="card-body">
                <h4 className="card-title text-uppercase">
                  Juan Agustin Alejandro
                </h4>
                <span className="text-uppercase my-3">Fullstack developer</span>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <p className="card-text my-3">
                    <img
                      className="envelope mx-2"
                      src="https://unpkg.com/@icon/icofont/icons/envelope.svg"
                    />
                    alejandro4juan@gmail.com
                  </p>
                </li>
                <li className="list-group-item">
                  {" "}
                  <p className="card-text">
                    <a
                      href="https://www.linkedin.com/in/jaalejandro/"
                      target="_blank"
                    >
                      <img
                        className="envelope mx-2"
                        src="https://unpkg.com/@icon/icofont/icons/linkedin.svg"
                      />
                      Juan Agustín Alejandro
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-4">
            <div className="card my-3">
              <img src={Miqueas} className="card-img-top" alt="mA" />
              <div className="card-body">
                <h4 className="card-title text-uppercase">Marcelo Acevedo</h4>
                <span className="text-uppercase my-3">Fullstack developer</span>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <p className="card-text my-3">
                    <img
                      className="envelope mx-2"
                      src="https://unpkg.com/@icon/icofont/icons/envelope.svg"
                    />
                    miqueasacevedo2017@gmail.com
                  </p>
                </li>
                <li className="list-group-item">
                  {" "}
                  <p className="card-text">
                    <a
                      href="https://www.linkedin.com/in/marcelo-acevedo-3b0aa6238"
                      target="_blank"
                    >
                      <img
                        className="envelope mx-2"
                        src="https://unpkg.com/@icon/icofont/icons/linkedin.svg"
                      />
                      Marcelo Acevedo
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-4">
            <div className="card my-3">
              <img src={Cecy} className="card-img-top" alt="cD" />
              <div className="card-body">
                <h4 className="card-title text-uppercase">Cecilia Dip</h4>
                <span className="text-uppercase my-3">Fullstack developer</span>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <p className="card-text my-3">
                    <img
                      className="envelope mx-2"
                      src="https://unpkg.com/@icon/icofont/icons/envelope.svg"
                    />
                    cecidip41@gmail.com
                  </p>
                </li>
                <li className="list-group-item">
                  {" "}
                  <p className="card-text">
                    <a
                      href="https://www.linkedin.com/in/cecilia-dip-b7550a16b/"
                      target="_blank"
                    >
                      <img
                        className="envelope mx-2"
                        src="https://unpkg.com/@icon/icofont/icons/linkedin.svg"
                      />
                      Cecilia Dip
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
