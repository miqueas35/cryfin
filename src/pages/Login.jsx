import React, { useEffect } from 'react' 
import logo from '../img/Logo.png'
import LoginGoogle from '../components/LoginGoogle'
import "../css/login.css"
import Footer from "../components/Footer"
import {Link} from 'react-router-dom'

const Login = () => {

  useEffect(() => {
   localStorage.removeItem('auth')
   localStorage.removeItem('user')
  }, []

  )
  return (
    <div className="container">
        <div className="row card-login">
            <div className="col-12 col-md-5 mt-3">
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
                
                <div className="d-grid gap-2">
                  <Link className="btn btn-outline-success" to="/projects">Iniciar Sesión</Link>
                 <Link className="btn btn-success" to="/registro">Registrarse</Link>
                </div>
              
    </form>
    </div>
    <div className='text-center bg-light py-3'>
      <LoginGoogle/>

    </div>
  
                </div> 
           </div>
         </div>  
         <div>
           <Footer/>
           </div>     
    </div>  
    
  )
}

export default Login

