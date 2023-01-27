import React from 'react'

const StripePayment = ({ activePayment, handleClick }) => {
  return (
    <div
      onClick={() => handleClick('stripe')}
      className={`paymentMethod invoicePayment ${
        activePayment === 'stripe' ? 'active' : ''
      }`}
    >
      <h2 className='paymentMethodTitle stripePaymentTitle'>
        <span className='paymentTitleLogo'>S</span> Stripe
      </h2>

      <p className='paymentMethodDesc'>
        Process your payment by credit card . Limit of 15 courses per person. If
        you need to purchases more then 15 courses please contact us.
      </p>
    </div>
  )
}

export default StripePayment
