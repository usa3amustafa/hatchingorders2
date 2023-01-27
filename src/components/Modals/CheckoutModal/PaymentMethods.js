import StripePayment from './StripePayment'
import InvoiceMe from './InvoiceMe'
import InvoiceForm from './InvoiceForm'
import { useState } from 'react'
import StripeCard from '../../StripeComponent/StripeCard'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(
  'pk_test_51MPoAzEjnz23PEVT1TWTpwcjWF65PusHVqUNK2QFC6nMbgboJRc0mz1qR5OMZ1UzXb4sYPWuviZ01TaAuRQLt8cS00NIfYobVb'
)

const PaymentMethods = () => {
  const [activePayment, setActivePayment] = useState('stripe')

  const handleClick = method => {
    setActivePayment(method)
  }

  return (
    <>
      <h2 className='paymentMethodsTitle'>Payment Methods</h2>

      <StripePayment activePayment={activePayment} handleClick={handleClick} />
      <InvoiceMe activePayment={activePayment} handleClick={handleClick} />

      <div className='paymentMethodForm'>
        {activePayment === 'stripe' ? (
          <Elements stripe={stripePromise}>
            <StripeCard />
          </Elements>
        ) : (
          <InvoiceForm />
        )}
      </div>
    </>
  )
}

export default PaymentMethods
