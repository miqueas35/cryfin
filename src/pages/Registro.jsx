import React from 'react'
import logo from '../img/Logo.png'
import "../css/login.css"

const Registro = () => {
  return (
    <div className="container">
        <div className="row card-login">
            <div className="col-12 col-md-5 mt-3">
                <div className="card">
                <div className="d-flex justify-content-center p-3 bg-light">
              <img src={logo} className="card-img-top img-logo" alt="logo" />
            </div>
  <div className="card-body">
    <h5 className="card-title text-center">Regístrate</h5>
    <form> 
    <div className="form-group mb-3">
                  <label>
                    <b>Nombre</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    name="nombre"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>
                    <b>Apellido</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="apellido"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>
                    <b>País</b>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="pais"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>
                    <b>Ingresa tú correo electronico</b>
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="example@example.com.ar"
                    name="email"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>
                    <b>Crea tu contraseña</b>
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                 
                 <button className="btn btn-outline-success" type="button">Registrarme</button>
                </div>
              
    </form>
    </div>
    
  
                </div> 
           </div>
         </div>       
    </div>  
  )
}

export default Registro