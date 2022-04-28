import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
import { Link } from "react-router-dom";
import NavbarCryFIn from "./NavbarCryFIn";
import Footer from "./Footer";

const ModalPublicar = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <div>
      <div>
        <NavbarCryFIn />
      </div>
      <div className="container cont-home">
        <div className="row">
          <div className="col-6 offset-3">
            <h2 className="display-5 text-center my-3">
              Encuentra inversores aquí
            </h2>
            <div className="text-center">
              <button type="button" className="btn" onClick={openModal}>
                Publica tu Nuevo Proyecto
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h3>Publica tu proyecto</h3>
        <img src="https://placeimg.com/350/350/tech" alt="Tech" />
        <textarea
          className="my-2"
          name=""
          id=""
          cols="45"
          rows="5"
          placeholder="Aquí va la descripcion de tu proyecto"
        ></textarea>

        <div className="row">
          <div className="d-grid gap-2 col-12 mx-auto my-5 form-group w-100 text-center">
            <div class="input-wrapper">
              <input
                className="input w-100"
                type="text"
                name="inversion"
                placeholder="Monto solicitado"
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-grid gap-2 col-12 mx-auto my-5 form-group w-100 text-center">
            <div class="input-wrapper">
              <input
                className="input w-100"
                type="text"
                name="billetera"
                placeholder="Ingrese su billetera"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="d-grid gap-2 col-6 mx-auto my-5">
              <Link className="btn" to="/projects">
                Publicar
              </Link>
            </div>
          </div>
        </div>
      </Modal>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ModalPublicar;
