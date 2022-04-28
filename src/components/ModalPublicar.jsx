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
      <h2 className="text-center m-2">Encuentra Inversores Aquí</h2>
      <div className="text-center">
        <button type="button" className="btn btn-success" onClick={openModal}>
          Publica tú Nuevo Proyecto!!!
        </button>
      </div>

      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h3>Publica tú proyecto</h3>
        <img src="https://placeimg.com/350/350/tech" alt="Tech" />
        <textarea
          className="my-2"
          name=""
          id=""
          cols="45"
          rows="5"
          placeholder="Aquí va la descripcion de tú proyecto"
        ></textarea>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          {
            <Link className="btn btn-success me-md-2" to="/projects">
              Publicar
            </Link>
          }
        </div>
      </Modal>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ModalPublicar;
