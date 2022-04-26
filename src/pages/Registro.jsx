import { useForm } from '../hooks/useForm'
import logo from '../img/Logo.png'
import "../css/login.css"
import Mensaje from '../components/Mensaje'

const initialForm = {
  nombre:"",
  apellido:"",
  pais:"",
  email:"",
  password:"",

}

const validationsForms = (form) => {
  let errors = {} 
   let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
   let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

  if(!form.nombre.trim()){
    errors.nombre="El campo 'Nombre' es requerido";
  } else if(!regexName.test(form.nombre.trim())){
    errors.nombre = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if(!form.apellido.trim()){
    errors.apellido="El campo 'Apellido' es requerido";
  } else if(!regexName.test(form.apellido.trim())){
    errors.apellido = "El campo 'Apellido' solo acepta letras y espacios en blanco";
  }

  if(!form.pais.trim()){
    errors.pais="El campo 'País' es requerido";
  } else if(!regexName.test(form.pais.trim())){
    errors.pais = "El campo 'País' solo acepta letras y espacios en blanco";
  }

  if(!form.email.trim()){
    errors.email="El campo 'Email' es requerido";
  } else if(!regexEmail.test(form.email.trim())){
    errors.email = "El campo 'Email' es incorrecto";
  }

  if(!form.password.trim()){
    errors.password="El campo 'Password' es requerido";
  } else if(!regexPassword.test(form.password.trim())){
    errors.password = "El campo 'Password' es incorrecto";
  }

  return errors
}

let styles = {
  fontWeight: "bold", 
  color: "#dc3545",
}
const Registro = () => {

const {form,
  errors,
  loading,
  response,
  handleChange,
  handleBlur,
  handleSubmit,} = useForm(initialForm, validationsForms)

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
    <form onSubmit={handleSubmit}> 
    <div className="form-group mb-3">
                  <label>
                    <b>Nombre</b>
                  </label>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.nombre}
                    className="form-control"
                    type="text"
                    name="nombre"
                    required
                  />
                  {errors.nombre && <p style={styles}>{errors.nombre}</p>}
                </div>
                <div className="form-group mb-3">
                  <label>
                    <b>Apellido</b>
                  </label>
                  <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.apellido}
                    className="form-control"
                    type="text"
                    name="apellido"
                    required
                  />
                  {errors.apellido && <p style={styles}>{errors.apellido}</p>}
                </div>
                <div className="form-group mb-3">
                  <label>
                    <b>País</b>
                  </label>
                  <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.pais}
                    className="form-control"
                    type="text"
                    name="pais"
                    required
                  />
                  {errors.pais && <p style={styles}>{errors.pais}</p>}
                </div>
                <div className="form-group mb-3">
                  <label>
                    <b>Ingresa tú correo electronico</b>
                  </label>
                  <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.email}
                    className="form-control"
                    type="email"
                    placeholder="example@example.com.ar"
                    name="email"
                    required
                  />
                  {errors.email && <p style={styles}>{errors.email}</p>}
                </div>
                <div className="form-group mb-3">
                  <label>
                    <b>Crea tu contraseña</b>
                  </label>
                  <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.password}
                    className="form-control"
                    type="password"
                    name="password"
                    required
                  />
                  {errors.password && <p style={styles}>{errors.password}</p>}
                </div>
                <div className="d-grid gap-2">
                 
                 <button className="btn btn-outline-success" type="submit">Registrarme</button>
                </div>
              
    </form>
    {/* {loading && <Loader/>} */}
    {response && (
      <Mensaje msg = "Los datos han sido enviados" bgColor="#198754"/>
    )}
    </div>
    
  
                </div> 
           </div>
         </div>       
    </div>  
  )
}

export default Registro