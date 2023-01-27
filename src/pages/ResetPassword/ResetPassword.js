import { useState, useEffect } from 'react'
import AppContext from '../../context/AppContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

import './resetPassword.css'

import axios from 'axios'

const ResetPassword = () => {
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState(faEye)
  const [error, setError] = useState(true)
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [token, setToken] = useState('')

  const formData = {
    token: token,
    newpassword: password,
    reenterpassword: repeatPassword,
  }

  const handlePassChange = e => {
    setPassword(e.target.value)

    if (e.target.value !== repeatPassword) {
      setError(true)
    } else {
      setError(false)
    }
  }
  const handleRepeatPassChange = e => {
    setRepeatPassword(e.target.value)

    if (e.target.value !== password) {
      setError(true)
    } else {
      setError(false)
    }
  }
  const handleSubmit = async e => {
    e.preventDefault()
    console.log(formData)
    try {
      const response = await axios.post('/user/reset', formData)
      console.log(response)
      if (response.status === 200) {
        console.log('password reset succesfully')
      }
    } catch (err) {
      console.error(err)
      if (err.response.status === 401) {
        console.log('passwords donot match')
      } else if (err.response.status === 498) {
        console.log('token cannot be authenticated')
      } else if (err.response.status === 402) {
        console.log('token cannot be authenticated')
      } else if (err.response.status === 403) {
        console.log('failed to update password')
      }
      // 401 passwords donont match
      // 498 token cannot be authenticated
      // 402 token expired
      // 403 failed to update password
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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    console.log(urlParams)
    const value = urlParams.get('token')
    setToken(value)
    const parts = value.split('_')
    const myEmail = parts[0]
  }, [token])

  return (
    <>
      <div className='resetPasswordMain'>
        <h2 className='registrationModalTitle'>Create new password</h2>

        {/* form */}
        <form onSubmit={handleSubmit}>
          <div className='form-el'>
            <label htmlFor='password' className='inputLabel'>
              New Password
            </label>
            <div className='passwordInputWrapper'>
              <input
                type={type}
                name='password'
                className='passwordInput'
                onChange={handlePassChange}
                value={password}
              />
              <div className='showPassBtn' onClick={handleToggle}>
                <FontAwesomeIcon icon={icon} />
              </div>
            </div>
          </div>

          <div className='form-el'>
            <label htmlFor='repeatPassword' className='inputLabel'>
              Repeat Password
            </label>
            <div className='passwordInputWrapper'>
              <input
                type={type}
                name='repeatPassword'
                className='passwordInput'
                onChange={handleRepeatPassChange}
                value={repeatPassword}
              />
              <div className='showPassBtn' onClick={handleToggle}>
                <FontAwesomeIcon icon={icon} />
              </div>
            </div>

            {error && (
              <p className='inputLabel errorMsg'>Passwords donot match </p>
            )}
          </div>

          <div className='form-el'>
            <button className='cta registrationCta setPasswordBtn'>
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ResetPassword
