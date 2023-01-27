import './modal.css'

import { useContext } from 'react'
import AppContext from '../../../context/AppContext'

const Modal = ({ children, isLogin, type }) => {
  const { closeModal } = useContext(AppContext)

  return (
    <>
      <div className={`modal modal-${type}`}>{children}</div>

      <div className='overlay' onClick={closeModal}></div>
    </>
  )
}

export default Modal
