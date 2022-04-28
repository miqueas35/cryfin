import React, { useEffect } from "react";
import logo from "../img/Logo.png";
// import LoginGoogle from '../components/LoginGoogle'
import "../css/login.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row card-login">
          <div className="col-12 mt-3">
            <div className="card d-flex justify-content-center p-3">
              <div className="d-flex justify-content-center p-3">
                <img
                  src={logo}
                  className="img-fluid img-logo w-50 h-50"
                  alt="logo"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title display-5 text-center my-3">
                  Iniciar sesión
                </h5>
                <form>
                  <div className="row">
                    <div className="d-grid gap-2 col-12 mx-auto my-5 form-group w-50 text-center">
                      <label>
                        <p className="text-uppercase">Correo electrónico</p>
                      </label>
                      <div class="input-wrapper">
                        <input
                          className="input w-100"
                          type="email"
                          placeholder="ejemplo@ejemplo.com.ar"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="d-grid gap-2 col-12 mx-auto my-5 form-group w-50 text-center">
                      <label>
                        <p className="text-uppercase ">Contraseña</p>
                      </label>
                      <div class="input-wrapper">
                        <input
                          className="input w-100"
                          type="password"
                          name="password"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-grid gap-2 col-6 mx-auto my-5">
                      <Link className="btn" to="/projects">
                        Iniciar Sesión
                      </Link>
                      <Link className="btn" to="/registro">
                        Registrarse
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              {/* <div className='text-center bg-light py-3'>
      <LoginGoogle/>

    </div>
   */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
