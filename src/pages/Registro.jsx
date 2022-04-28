import { useForm } from "../hooks/useForm";
import logo from "../img/Logo.png";
import "../css/login.css";
import Mensaje from "../components/Mensaje";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const initialForm = {
  nombre: "",
  apellido: "",
  pais: "",
  email: "",
  password: "",
};

const validationsForms = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

  if (!form.nombre.trim()) {
    errors.nombre = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.nombre.trim())) {
    errors.nombre = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!form.apellido.trim()) {
    errors.apellido = "El campo 'Apellido' es requerido";
  } else if (!regexName.test(form.apellido.trim())) {
    errors.apellido =
      "El campo 'Apellido' solo acepta letras y espacios en blanco";
  }

  if (!form.pais.trim()) {
    errors.pais = "El campo 'País' es requerido";
  } else if (!regexName.test(form.pais.trim())) {
    errors.pais = "El campo 'País' solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.password.trim()) {
    errors.password = "El campo 'Password' es requerido";
  } else if (!regexPassword.test(form.password.trim())) {
    errors.password = "El campo 'Password' es incorrecto";
  }

  return errors;
};

let styles = {
  color: "#FF3270",
};
const Registro = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForms);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 my-3">
            <div className="card d-flex justify-content-center p-3">
              <div className="d-flex justify-content-center">
                <img
                  src={logo}
                  className="img-fluid img-logo w-50 h-50"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title display-5  text-center mb-3">Regístrate</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <div className="row">
                <div className="d-grid gap-2 col-12 mx-auto my-5 form-group w-50 text-center">
                  <label>
                    <p className="text-uppercase">Nombre</p>
                  </label>
                  <div className="input-wrapper">
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.nombre}
                      className="input w-100"
                      type="text"
                      name="nombre"
                      required
                    />
                  </div>
                  {errors.nombre && <p style={styles}>{errors.nombre}</p>}
                </div>
                {errors.nombre && <p style={styles}>{errors.nombre}</p>}
              </div>
            </div>

            <div className="form-group mb-3">
              <div className="row">
                <div className="d-grid gap-2 col-12 mx-auto my-5 form-group w-50 text-center">
                  <label>
                    <p className="text-uppercase">Apellido</p>
                  </label>
                  <div className="input-wrapper">
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.apellido}
                      className="input w-100"
                      type="text"
                      name="apellido"
                      required
                    />
                  </div>
                  {errors.apellido && <p style={styles}>{errors.apellido}</p>}
                </div>
              </div>
            </div>

            <div className="form-group mb-3">
              <div className="row">
                <div className="d-grid gap-2 col-12 mx-auto my-5 form-group w-50 text-center">
                  <label>
                    <p className="text-uppercase">País</p>
                  </label>
                  <div className="input-wrapper">
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.pais}
                      className="input w-100"
                      type="text"
                      name="pais"
                      required
                    />
                  </div>
                  {errors.pais && <p style={styles}>{errors.pais}</p>}
                </div>
              </div>
            </div>

            <div className="form-group mb-3">
              <div className="row">
                <div className="d-grid gap-2 col-12 mx-auto my-5 form-group w-50 text-center">
                  <label>
                    <p className="text-uppercase">Correo electrónico</p>
                  </label>
                  <div className="input-wrapper">
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.email}
                      className="input w-100"
                      type="email"
                      placeholder="ejemplo@ejemplo.com.ar"
                      name="email"
                      required
                    />
                  </div>
                  {errors.email && <p style={styles}>{errors.email}</p>}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="d-grid gap-2 col-12 mx-auto my-5 form-group w-50 text-center">
                <div className="form-group mb-3">
                  <label>
                    <p className="text-uppercase">Crea tu contraseña</p>
                  </label>
                  <div className="input-wrapper">
                    <input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.password}
                      className="input w-100"
                      type="password"
                      name="password"
                      required
                    />
                  </div>
                  {errors.password && <p style={styles}>{errors.password}</p>}
                </div>
                <label>
                  <p>
                    La contraseña debe tener entre 8 y 16 caracteres, al menos
                    un dígito, al menos una minúscula y al menos una mayúscula.
                    NO puede tener otros símbolos.
                  </p>
                </label>
              </div>
            </div>

            <div className="row">
              <div className="d-grid gap-2 col-6 mx-auto my-5">
                <Link className="btn" to="projects">
                  Registrarme
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
{
  /* {loading && <Loader/>} 
    {response && (
      <Mensaje msg = "Los datos han sido enviados"/>
    )} */
}

export default Registro;
