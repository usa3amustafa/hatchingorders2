import React from 'react'

const InvoiceMe = ({ activePayment, handleClick }) => {
  return (
    <div
      onClick={() => handleClick('invoice')}
      className={`paymentMethod invoicePayment ${
        activePayment === 'invoice' ? 'active' : ''
      }`}
    >
      <h2 className='paymentMethodTitle '>
        <span className='paymentTitleLogo'>I</span> Invoice Me
      </h2>

      <p className='paymentMethodDesc'>
        If you need to be invoiced please contact us and someone will get back
        to you shortly.
      </p>
    </div>
  )
}

export default InvoiceMe
