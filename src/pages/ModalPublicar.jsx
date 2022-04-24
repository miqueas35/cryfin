import Modal from "../components/Modal"
import { useModal } from "../hooks/useModal"

const ModalPublicar = () => {

    const [isOpenModal, openModal,closeModal ] = useModal(false)
  return (
    <div>
        <h2>Modal</h2>
        <button onClick={openModal}>Nuevo Proyecto</button>
        <Modal isOpen={isOpenModal} closeModal={closeModal}/>
    </div>
  )
}

export default ModalPublicar