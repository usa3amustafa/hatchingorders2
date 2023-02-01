import { useContext } from 'react'
import AppContext from '../../../context/AppContext'
import Modal from '../../shared/Modal/Modal'
import './logoutModal.css'

const LogoutModal = () => {
  const { closeModal, setLoggedOut, setLogoutPrb } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('fullname')
    localStorage.removeItem('userid')
    localStorage.removeItem('email')
    localStorage.removeItem('loggedIn')
    closeModal()
    if (!localStorage.getItem('token')) {
      setLoggedOut(true)
    } else {
      setLogoutPrb(true)
    }
  }

  return (
    <Modal type='thankyou'>
      <div className='thankyouModal'>
        <h2 className='registrationModalTitle'>
          Welcome &nbpsp;
          <span className='logoutUsername'>
            {localStorage.getItem('fullname').replaceAll('"', '')}
          </span>
        </h2>

        <h2 className='registrationModalTitle'>
          <span className='logoutEmail'>
            {localStorage.getItem('email').replaceAll('"', '')}
          </span>
        </h2>

        <div className='form-el'>
          <button className='cta' onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default LogoutModal
