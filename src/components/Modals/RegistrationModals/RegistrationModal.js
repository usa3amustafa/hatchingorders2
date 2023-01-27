import Modal from '../../shared/Modal/Modal'
import { useState } from 'react'

import './registrationModal.css'
import RegistrationRightCol from './RegistrationRightCol'
import SignupModal from './SignupModal/SignupModal'
import LoginModal from './LoginModal/LoginModal'
import ForgotPassModal from './ForgotPassModal/ForgotPassModal'

import { useContext } from 'react'
import AppContext from '../../../context/AppContext'

const RegistrationModal = () => {
  const { showLogin, showForgotPass, showSignup } = useContext(AppContext)

  return (
    <Modal type='registration'>
      <div className='registrationModal'>
        <div className='registrationModalLeftCol'>
          {showSignup && <SignupModal />}
          {showLogin && <LoginModal />}
          {showForgotPass && <ForgotPassModal />}
        </div>
        <RegistrationRightCol />
      </div>
    </Modal>
  )
}

export default RegistrationModal
