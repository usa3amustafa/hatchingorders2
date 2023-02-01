import React from 'react'
import Modal from '../../shared/Modal/Modal'
import Logo from './Logo'
import Cart from './Cart'
import PaymentMethods from './PaymentMethods'
import { useContext } from 'react'
import AppContext from '../../../context/AppContext'

import './checkoutModal.css'

const Index = () => {
  const { closeModal, openRegistrationModal } = useContext(AppContext)
  const openLoginModal = () => {
    closeModal()
    openRegistrationModal()
  }

  return (
    <Modal type={'checkout'}>
      <Logo />
      <div className='checkoutModalLeftCol'>
        <Cart />
      </div>
      <div className='checkoutModalRightCol'>
        {localStorage.getItem('loggedIn') ? (
          <PaymentMethods />
        ) : (
          <section className='bg-grey flex-column'>
            <div className='registrationRightColLogo flex-column'>
              <h2 className='login-first-title'>
                To continue with payment, You Need to Login First
              </h2>
              <button onClick={openLoginModal} className='cta'>
                Login
              </button>
            </div>
          </section>
        )}
      </div>
    </Modal>
  )
}

export default Index
