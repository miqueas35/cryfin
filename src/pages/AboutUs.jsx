import React from "react";
import NavbarCryFIn from "../components/NavbarCryFIn";
import Footer from "../components/Footer";

import Miqueas from "../img/Nosotros/Miqueas.jpg"
import Cecy from "../img/Nosotros/Cecy.jpg"

import "../css/aboutUs.css";

function AboutUs() {
  return (
    <div>
      <div>
        <NavbarCryFIn/>
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
  <img src="https://media-exp1.licdn.com/dms/image/D4E03AQH5i1dkk-fSgg/profile-displayphoto-shrink_800_800/0/1631025677847?e=1656547200&v=beta&t=M8o-_TpHojY1_bCj_kypYaZzK8KOZQWm6Vkq7DEvVXE" 
  class="card-img-top" alt="jAA"/>
  <div className="card-body">
    <h4 className="card-title text-uppercase">Juan Agustin Alejandro</h4>
    <span className="text-uppercase my-3">Fullstack developer</span>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><p className="card-text my-3">
                    <img
                      className="envelope mx-2"
                      src="https://unpkg.com/@icon/icofont/icons/envelope.svg"
                    />
                    cecidip41@gmail.com
                  </p>
    </li>
    <li className="list-group-item"> <p className="card-text">
                  <a
                    href="https://www.linkedin.com/in/cecilia-dip-b7550a16b/" target="_blank">
                    <img
                      className="envelope mx-2"
                      src="https://unpkg.com/@icon/icofont/icons/linkedin.svg"/>
                     Cecilia Dip
                  </a>
                </p></li>
  </ul>
</div>
</div>
    



    <div className="col-4">
    <div className="card my-3">
  <img src={Miqueas} 
  class="card-img-top" alt="cecyD"/>
  <div className="card-body">
    <h4 className="card-title text-uppercase">Marcelo Ezequiel Acevedo</h4>
    <span className="text-uppercase my-3">Fullstack developer</span>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><p className="card-text my-3">
                    <img
                      className="envelope mx-2"
                      src="https://unpkg.com/@icon/icofont/icons/envelope.svg"
                    />
                    miqueasacevedo2017@gmail.com
                  </p>
    </li>
    <li className="list-group-item"> <p className="card-text">
                  <a
                    href="https://www.linkedin.com/in/marcelo-acevedo-3b0aa6238" target="_blank">
                    <img
                      className="envelope mx-2"
                      src="https://unpkg.com/@icon/icofont/icons/linkedin.svg"/>
                     Marcelo Acevedo
                  </a>
                </p></li>
  </ul>
</div>
</div>

<div className="col-4">
    <div className="card my-3">
  <img src={Cecy} 
  class="card-img-top" alt="cecyD"/>
  <div className="card-body">
    <h4 className="card-title text-uppercase">María Cecilia Dip</h4>
    <span className="text-uppercase my-3">Fullstack developer</span>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><p className="card-text my-3">
                    <img
                      className="envelope mx-2"
                      src="https://unpkg.com/@icon/icofont/icons/envelope.svg"
                    />
                    cecidip41@gmail.com
                  </p>
    </li>
    <li className="list-group-item"> <p className="card-text">
                  <a
                    href="https://www.linkedin.com/in/cecilia-dip-b7550a16b/" target="_blank">
                    <img
                      className="envelope mx-2"
                      src="https://unpkg.com/@icon/icofont/icons/linkedin.svg"/>
                     Cecilia Dip
                  </a>
                </p></li>
  </ul>
</div>
</div>

   
          </div>
      </div>


    <div>
      <Footer/>
    </div>
    
    </div>
  );
}

export default AboutUs;
