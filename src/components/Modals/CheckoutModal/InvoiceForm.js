import { text } from '@fortawesome/fontawesome-svg-core'
import { useState, useContext } from 'react'
import { getCourseData } from '../../../coursesData'
import AppContext from '../../../context/AppContext'
import Thankyou from '../ThankyouModal/Thankyou'

import axios from 'axios'

const InvoiceForm = () => {
  const { closeModal, cartProducts, getTotalCost } = useContext(AppContext)

  const [userName, setUserName] = useState('')
  const [schoolName, setSchoolName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [invoiceMeInfo, setinvoiceMeInfo] = useState({})

  const courseData = getCourseData(1)

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

  const handleSubmit = async e => {
    e.preventDefault()

    const courseData = cartProducts.map(item => {
      const { id, title, price } = getCourseData(item.id)
      return { id, title, price, quantity: item.quantity }
    })

    setinvoiceMeInfo({
      userName,
      email,
      number,
      schoolName,
      userid: localStorage.getItem('userid'),
      cartProducts: courseData,
      totalCost: getTotalCost(),
    })

    const token = localStorage.getItem('token')

    const config = {
      headers: {
        Authorization: token,
      },
    }

    console.log(token)

    try {
      const response = await axios.post('/invoice/place-order', invoiceMeInfo)

      if (response.status === 200) {
        closeModal()
        // setPasswordChanged(true)
      }
    } catch (err) {
      console.error(err)
      if (err.response.status === 401) {
      } else if (err.response.status === 498) {
      } else if (err.response.status === 402) {
      } else if (err.response.status === 403) {
      }
      // 401 passwords donont match
      // 498 token cannot be authenticated
      // 402 token expired
      // 403 failed to update password
    }

    setUserName('')
    setEmail('')
    setNumber('')
    setSchoolName('')
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
