import { useState, useContext } from 'react'
import AppContext from '../../../../context/AppContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'

const ForgotPassModal = () => {
  const { openLoginModal, openSignupModal } = useContext(AppContext)

  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(faEye)

  // const [formData, setFormData] = useState({
  //   password: '',
  //   repeatPassword: '',
  // })
  const [formData, setFormData] = useState({
    email: '',
  })
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()

    // find an account against the provided email

    // if yes send reset password email and show pop up that you have been sent an email with instructions to reset your password

    // if email is not registered show popup that
    // no accounts found against your provided email
    console.log(formData)
    try {
      const response = await axios.post('/user/forgetpassword', formData)
      if (response.status.data === 200) {
        console.log('email send successfully')
      }
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  // const handleToggle = () => {
  //   if (type === 'password') {
  //     setIcon(faEye)
  //     setType('text')
  //   } else {
  //     setIcon(faEyeSlash)
  //     setType('password')
  //   }
  // }

  return (
    <>
      <h2 className='registrationModalTitle'>Find your account</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-el'>
          <label htmlFor='email' className='inputLabel'>
            Email Address
          </label>
          <input
            type='email'
            name='email'
            className='registrationInput'
            onChange={handleChange}
            value={formData.email}
          />
          {/* email not found error message */}
        </div>

        <div className='form-el'>
          <button className='cta registrationCta'>Find Your Account</button>
        </div>
      </form>

      <p className='logindesc inputLabel'>
        Already have an account?
        <span className='modalLink' onClick={openLoginModal}>
          Login Here
        </span>
      </p>

      <p className='logindesc inputLabel'>
        Don't have an account?
        <span className='modalLink' onClick={openSignupModal}>
          Signup Here
        </span>
      </p>
    </>
  )
}

export default ForgotPassModal
