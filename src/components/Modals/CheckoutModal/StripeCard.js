import React, { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import axios from 'axios'
import CardSection from './CardSection'

export default function StripeCard() {
  const stripe = useStripe()
  const elements = useElements()
  const [clientSecret, setClientSecret] = useState(null)

  const handleSubmit = async event => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const data = {
      amount: 2500,
      currency: 'usd',
    }
    await axios
      .post('/invoice/create-payment-intent', data)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data.secrit)
          setClientSecret(response.data.secrit)
        } else if (response.status === 401) {
          console.log('Unauthorized')
        }
      })
      .catch(error => {})

    if (clientSecret) {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: 'Laeeq khan niazi',
          },
        },
      })

      if (result.error) {
        // Show error to your customer (for example, insufficient funds)
        var code = result.error.code
        if (code === 'expired_card') {
        } else if (code === 'card_declined') {
        } else if (code === 'expired_card') {
        } else if (code === 'incorrect_cvc') {
        } else if (code === 'processing_error') {
        } else if (code === '	incorrect_number') {
        }
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === 'succeeded') {
          // Show a success message to your customer
          // There's a risk of the customer closing the window before callback
          // execution. Set up a webhook or plugin to listen for the
          // payment_intent.succeeded event that handles any business critical
          // post-payment actions.
          console.log('Done payment')
        }
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1rem' }}>
        <CardSection />
      </div>
      <br />
      <button className='cta bg-sec' disabled={!stripe}>
        Confirm order
      </button>
    </form>
  )
}
