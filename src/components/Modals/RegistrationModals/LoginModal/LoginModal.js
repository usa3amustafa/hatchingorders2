import GoogleIcon from '../../../../assets/googleIcon.webp'
import { useState, useContext } from 'react'
import AppContext from '../../../../context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import GoogleAuthLogin from '../GoogleAuthLogin'

const LoginModal = () => {
  const {
    openSignupModal,
    openForgotPassModal,
    closeModal,
    openLoggedInModal,
    openVerificationModal,
    openNotFound,
    openDataIncorrect,
    setInternalServerError,
    loggedIn,
    setLoggedIn,
  } = useContext(AppContext)

  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(faEye)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    // succesful login go to home page

    // errors

    try {
      const response = await axios.post('/user/login', formData)

      if (response.status === 200) {
        // show you are logged in modal
        closeModal()
        localStorage.setItem('fullname', JSON.stringify(response.data.fullname))
        localStorage.setItem('email', JSON.stringify(response.data.email))
        localStorage.setItem('token', JSON.stringify(response.data.token))
        localStorage.setItem('userid', JSON.stringify(response.data.userid))

        openLoggedInModal()

        console.log(localStorage.getItem('token'))

        if (localStorage.getItem('token')) {
          setLoggedIn(true)
          localStorage.setItem('loggedIn', true)
        }
      }

      console.log(response)
    } catch (err) {
      console.error(err)
      // 405 please verify your email
      if (err.response.status === 405) {
        console.log('please verify your email')
        openVerificationModal()
      }
      // 404
      if (err.response.status === 404) {
        console.log('user not found ')
        openNotFound()
      }
      // 401
      if (err.response.status === 401) {
        console.log('password or email is incorrect')
        openDataIncorrect()
      }
      // 500
      if (err.response.status === 500) {
        console.log('internal server error')
        closeModal()
        setInternalServerError(true)
      }
    }
  }

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(faEye)
      setType('text')
    } else {
      setIcon(faEyeSlash)
      setType('password')
    }
  }

  return (
    <>
      <h2 className='registrationModalTitle'>Login to your account</h2>

      {/* form */}
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
        </div>

        <div className='form-el'>
          <label htmlFor='password' className='inputLabel'>
            Password
          </label>

          <div className='passwordInputWrapper'>
            <input
              type={type}
              name='password'
              className='passwordInput'
              onChange={handleChange}
              value={formData.password}
            />
            <div className='showPassBtn' onClick={handleToggle}>
              <FontAwesomeIcon icon={icon} />
            </div>
          </div>

          <p className='inputLabel modalLink' onClick={openForgotPassModal}>
            Forgot Password?
          </p>
        </div>

        <div className='form-el'>
          <button className='cta registrationCta'>Login</button>
        </div>
        <div className='form-el'>
          <GoogleAuthLogin />
        </div>

        <p className='logindesc inputLabel'>
          Don't have an account?
          <span className='modalLink' onClick={openSignupModal}>
            Signup Here
          </span>
        </p>
      </form>
    </>
  )
}

export default LoginModal
