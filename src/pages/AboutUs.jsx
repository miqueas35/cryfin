import React from "react";
import invercionImg from "../img/Inversiones/inversiones2.png";
import "../css/aboutUs.css";

function AboutUs() {
  //style="max-width: 540px;"
  return (
    <div className=" row d-flex justify-content-center">
      <div className=" col-5 g-4 text-center fondo ">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-5">
              <img src={invercionImg} className="img-fluid radius" alt="..." />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h3 className="card-title">María Cecilia Dip</h3>
                <h5 className="card-title">FullStack </h5>
                <p className="card-text">
                  <img
                    height="32"
                    width="32"
                    src="https://unpkg.com/@icon/icofont/icons/envelope.svg"
                  />
                  cecidip41@gmail.com
                </p>

                <a
                  href="https://www.linkedin.com/in/cecilia-dip-b7550a16b/"
                  className="card-text"
                >
                  <img
                    height="32"
                    width="32"
                    src="https://unpkg.com/@icon/icofont/icons/linkedin.svg"
                  />
                  <i className="icofont-linkedin"></i> Cecilia Dip
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-5">
              <img src={invercionImg} className="img-fluid radius" alt="..." />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h3 className="card-title">María Cecilia Dip</h3>
                <h5 className="card-title">FullStack </h5>
                <p className="card-text">
                  <img
                    height="32"
                    width="32"
                    src="https://unpkg.com/@icon/icofont/icons/envelope.svg"
                  />
                  cecidip41@gmail.com
                </p>

                <a
                  href="https://www.linkedin.com/in/cecilia-dip-b7550a16b/"
                  className="card-text"
                >
                  <img
                    height="32"
                    width="32"
                    src="https://unpkg.com/@icon/icofont/icons/linkedin.svg"
                  />
                  <i className="icofont-linkedin"></i> Cecilia Dip
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-5">
              <img src={invercionImg} className="img-fluid radius" alt="..." />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h3 className="card-title">María Cecilia Dip</h3>
                <h5 className="card-title">FullStack </h5>
                <p className="card-text">
                  <img
                    height="32"
                    width="32"
                    src="https://unpkg.com/@icon/icofont/icons/envelope.svg"
                  />
                  cecidip41@gmail.com
                </p>

                <a
                  href="https://www.linkedin.com/in/cecilia-dip-b7550a16b/"
                  className="card-text"
                >
                  <img
                    height="32"
                    width="32"
                    src="https://unpkg.com/@icon/icofont/icons/linkedin.svg"
                  />
                  <i className="icofont-linkedin"></i> Cecilia Dip
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
