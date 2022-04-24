import Modal from "../components/Modal"
import { useModal } from "../hooks/useModal"

const ModalPublicar = () => {

    const [isOpenModal, openModal,closeModal ] = useModal(false)
  return (
    <div>
        <h2>Modal</h2>
        <button onClick={openModal}>Nuevo Proyecto</button>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <h3>Publica tú proyecto</h3>
          <img src="https://placeimg.com/350/350/tech" alt="Tech" />
          <p>aqui va la descripcion del proyecto</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-success me-md-2" type="button">Publicar</button>
</div>
          </Modal>
    </div>
  )
}

export default ModalPublicar