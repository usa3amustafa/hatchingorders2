import jwtDecode from 'jwt-decode'
import { useEffect, useContext } from 'react'
import AppContext from '../../../context/AppContext'

import axios from 'axios'

const GoogleAuthLogin = () => {
  const { openSuccessModal, closeModal, openErrorModal } =
    useContext(AppContext)

  const handleCallbackResponse = async response => {
    console.log(response)
    const user = jwtDecode(response.credential)
    console.log(user)
    if (user) {
      const formData = {
        fullname: user.name,
        email: user.email,
      }

      try {
        const response = await axios.post('/user/gsignin', formData)
        console.log(response.data)
        console.log(response.message)
        console.log(response.status)

        // if successful show modal of succesful registration
        if (response.status === 200) {
          closeModal()
          openSuccessModal()
        }
      } catch (err) {
        console.error(err.response.status)

        // internal error 500 try again later show error modal
        if (err.response.status === 500) {
          closeModal()
          openErrorModal()
        }
      }
    }
  }

  useEffect(() => {
    const google = window.google
    google.accounts.id.initialize({
      client_id:
        '446068684203-fqsk4i0f0nipb7tneghbvja7ldiomof3.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    })

    google.accounts.id.renderButton(document.getElementById('signinDiv'), {
      // scope: 'profile email',
      // width: 300,
      // height: 50,
      // longtitle: true,
      // theme: 'light',
      // borderRadius: 50,
      // onsuccess: onSuccess,
      // onfailure: onFailure,
      theme: 'none',
    })
  }, [])

  return (
    <div>
      <div id='signinDiv'></div>
    </div>
  )
}

export default GoogleAuthLogin
