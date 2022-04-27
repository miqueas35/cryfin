import Modal from "./Modal"
import { useModal } from "../hooks/useModal"

const ModalPublicar = () => {

    const [isOpenModal, openModal,closeModal ] = useModal(false)
  return (
    <div>
        <h2>Modal</h2>
        <button className="btn" onClick={openModal}>Nuevo Proyecto</button>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <h3>Publica tú proyecto</h3>
          <img src="https://placeimg.com/350/350/tech" alt="Tech" />
          <textarea className="my-2" name="" id="" cols="45" rows="5" placeholder="Aquí va la descripcion de tú proyecto"></textarea>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn me-md-2" type="button">Publicar</button>
</div>
          </Modal>
    </div>
  )
}

export default ModalPublicar