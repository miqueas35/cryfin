import React from 'react' 
import logo from '../img/Logo.png'

const Login = () => {
  return (
    <div className="container">
        <div className="row card-login">
            <div className="col-12 col-md-4">
                <div className="card">
                <div className="d-flex justify-content-center p-3 bg-light">
              <img src={logo} className="card-img-top img-logo" alt="logo" />
            </div>
  <div className="card-body">
    <h5 className="card-title text-center">Inicio de sesión</h5>
    <form> 
    <div className="form-group mb-3">
                  <label>
                    <b>Correo electrónico</b>
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
                    <b>Contraseña</b>
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    required
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-outline-success">Iniciar</button>
                </div>
    </form>
    </div>
    {/* <div className="text-center bg-light py-3">
              <LoginGoogle />
            </div> */}
  
                </div> 
           </div>
         </div>       
    </div>  
    
  )
}

export default Login

