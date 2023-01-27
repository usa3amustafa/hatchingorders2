import React from 'react'
import Modal from '../../shared/Modal/Modal'
import Logo from './Logo'
import Cart from './Cart'
import PaymentMethods from './PaymentMethods'

import './checkoutModal.css'

const index = () => {
  return (
    <Modal type={'checkout'}>
      <Logo />
      <div className='checkoutModalLeftCol'>
        <Cart />
      </div>
      <div className='checkoutModalRightCol'>
        <PaymentMethods />
      </div>
    </Modal>
  )
}

export default index
