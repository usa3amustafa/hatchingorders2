import { text } from '@fortawesome/fontawesome-svg-core'
import { useState, useContext } from 'react'

import AppContext from '../../../context/AppContext'
import Thankyou from '../ThankyouModal/Thankyou'

const InvoiceForm = () => {
  const { closeModal, openThankyouModal } = useContext(AppContext)

  const [userName, setUserName] = useState('')
  const [schoolName, setSchoolName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [invoiceMeInfo, setinvoiceMeInfo] = useState({})

  const handleNameChange = e => {
    setUserName(e.target.value)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handleNumberChange = e => {
    setNumber(e.target.value)
  }

  const handleSchoolNameChange = e => {
    setSchoolName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setinvoiceMeInfo({
      userName,
      email,
      number,
      schoolName,
    })
    setUserName('')
    setEmail('')
    setNumber('')
    setSchoolName('')
    closeModal()
    openThankyouModal()
  }

  console.log(invoiceMeInfo)

  return (
    <form>
      <input
        type='text'
        name='name'
        placeholder='Your Name'
        className='invoiceInput'
        onChange={handleNameChange}
        value={userName}
      />
      <input
        type='email'
        name='email'
        placeholder='Your Email'
        className='invoiceInput'
        onChange={handleEmailChange}
        value={email}
      />
      <input
        type='number'
        name='number'
        placeholder='Your Phone No'
        className='invoiceInput'
        onChange={handleNumberChange}
        value={number}
      />

      <input
        type='text'
        name='name'
        placeholder='Your School Name'
        className='invoiceInput'
        onChange={handleSchoolNameChange}
        value={schoolName}
      />

      <button
        type='submit'
        className='invoiceFormCta'
        onClick={handleSubmit}
        disabled={
          text === '' || email === '' || number === '' || schoolName === ''
        }
      >
        Invoice Me
      </button>
    </form>
  )
}

export default InvoiceForm
