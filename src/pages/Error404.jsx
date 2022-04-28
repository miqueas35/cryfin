import React from "react";
import error404 from "../img/error404.png";
import "../css/error404.css";
import NavbarCryFIn from "../components/NavbarCryFIn";
import Footer from "../components/Footer";

const Error404 = () => {
  return (
    <div>
      <div>
        <NavbarCryFIn />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="error">
            <img src={error404} alt="Error 404" className="img-Error" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Error404;
