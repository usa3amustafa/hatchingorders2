import { useState } from 'react'

const ContactusLeftCol = () => {
  const [formData, setFormData] = useState({
    fullname: 'usama',
    email: '',
    message: '',
  })
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (formData.fullname && formData.email && formData.message) {
      console.log(formData)
    }
  }

  return (
    <>
      <h2 className='registrationModalTitle'>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <div className='form-el'>
          <label htmlFor='name' className='inputLabel'>
            Name
          </label>
          <input
            type='text'
            name='fullname'
            className='registrationInput'
            onChange={handleChange}
            value={formData.fullname}
          />
        </div>

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
          <label htmlFor='message' className='inputLabel'>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            className='registrationInput contactUsMessage'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>

      <div className='form-el'>
        <button
          className='cta registrationCta'
          onClick={handleSubmit}
          disabled={
            formData.fullname === '' ||
            formData.email === '' ||
            formData.message === ''
          }
        >
          Send Message
        </button>
      </div>
    </>
  )
}
export default ContactusLeftCol
