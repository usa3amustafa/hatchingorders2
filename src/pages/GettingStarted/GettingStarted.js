import welcomeIllustration from '../../assets/welcomeIllustration.webp'
import cardOneImg from '../../assets/cardOne.webp'
import cardTwoImg from '../../assets/cardTwo.webp'
import cardThreeImg from '../../assets/cardThree.webp'
import styles from './gettingStarted.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/Footer/Footer'

import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import AppContext from '../../context/AppContext'

import { useNavigate } from 'react-router-dom'

const GettingStarted = () => {
  const { setEmailSentVer, openLoginModal, closeModal } = useContext(AppContext)

  const [token, setUrlValue] = useState()
  const [tokenVerified, setTokenVerified] = useState('')
  const [email, setEmail] = useState('')
  const [redirect, setRedirect] = useState(false)

  const formData = {
    token,
  }

  const emailData = {
    email,
  }

  const verifyApi = async () => {
    try {
      const response = await axios.post('/user/verify', formData)
      console.log(token)
      console.log('el')
      console.log(response)
      if (response.status === 200) {
        console.log(response)
        setTokenVerified('verified')
      }
    } catch (err) {
      console.error(err.response.status)
      if (err.response.status === 404) {
        setTokenVerified('invalid')
      } else if (err.response.status === 401) {
        setTokenVerified('expired')
      } else if (err.response.status === 404) {
        setTokenVerified('empty')
      } else if (err.response.status === 401) {
        setTokenVerified('expired')
      } else if (err.response.status === 406) {
        setTokenVerified('already-verified')
        setRedirect(true)
      } else if (err.response.status === 500) {
        setTokenVerified('error')
      }
    }
  }
  const resendEmail = async () => {
    try {
      const response = await axios.post('/user/verify-email-resend', emailData)

      if (response.status === 200) {
        closeModal()
        setEmailSentVer(true)
      }

      //
    } catch (err) {}
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)

    const value = urlParams.get('token')
    setUrlValue(value)
    const parts = value.split('_')
    const myEmail = parts[0]
    setEmail(myEmail)
  }, [token])

  verifyApi()

  return (
    <>
      {tokenVerified === 'verified' && (
        <div>
          <div className='container'>
            <div className={styles.welcome}>
              <div className={styles.welcomeImg}>
                <img src={welcomeIllustration} alt='' loading='lazy' />
              </div>
              <h2 className={styles.title}>
                <span className={styles.userName}>John Doe</span>, welcome to
                Hatching Results
              </h2>
            </div>
          </div>

          <div className='container'>
            <h2 className={styles.getStartedTitle}>Get Started</h2>
          </div>

          <div className='container'>
            <div className={`${styles.card} ${styles.cardOne}`}>
              <div className={styles.cardLeftCol}>
                <h2 className={styles.cardTitle}>Access your Account</h2>
                <p className={styles.cardDesc}>
                  Access invoices from courses you have purchased.
                </p>
                <button
                  onClick={openLoginModal}
                  className={`${styles.cardCta} ${styles.cardOneCta}`}
                >
                  Login to your account <FontAwesomeIcon icon={faRightLong} />
                </button>
              </div>
              <div className={styles.cardRightCol}>
                <img src={cardOneImg} alt='' loading='lazy' />
              </div>
            </div>

            <div className={`${styles.card} ${styles.cardTwo} `}>
              <div className={styles.cardLeftCol}>
                <img src={cardTwoImg} alt='' loading='lazy' />
              </div>
              <div className={styles.cardRightCol}>
                <h2 className={styles.cardTitle}>Select your Courses</h2>
                <p className={`${styles.cardDesc} ${styles.cardTwoDesc}`}>
                  Select the course you are interested in. You can purchase a
                  single class at a time or purchase a specific pathway at once.
                  You are able to purchase classes for your staff just by adding
                  them to your cart and entering their email address. They will
                  receive an invite to the course.
                </p>
                <button className={`${styles.cardCta} ${styles.cardTwoCta}`}>
                  Explore <FontAwesomeIcon icon={faRightLong} />
                </button>
              </div>
            </div>

            <div className={`${styles.card} ${styles.cardThree} `}>
              <div className={styles.cardLeftCol}>
                <h2 className={styles.cardTitle}>Start Your Course!</h2>
                <p className={styles.cardDesc}>
                  Start your course now. You will use the same login for your
                  courses that you used for purchasing them.
                </p>
                <button className={`${styles.cardCta} ${styles.cardThreeCta}`}>
                  Start now <FontAwesomeIcon icon={faRightLong} />
                </button>
              </div>
              <div className={styles.cardRightCol}>
                <img src={cardThreeImg} alt='' loading='lazy' />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      )}

      {tokenVerified === 'empty' && (
        <>
          <h2
            style={{
              height: '90vh',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            Token Expired
          </h2>
          <button className='cta' onClick={() => resendEmail()}>
            Resend Verification Email
          </button>
        </>
      )}

      {tokenVerified === 'expired' && (
        <>
          <h2
            style={{
              height: '90vh',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            Token Expired
          </h2>
          <button className='cta' onClick={() => resendEmail()}>
            Resend Verification Email
          </button>
        </>
      )}

      {tokenVerified === 'already-verified' && (
        <>
          <h2
            style={{
              height: '90vh',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            Already verified, please login to continue
          </h2>
        </>
      )}

      {tokenVerified === 'error' && (
        <>
          <h2
            style={{
              height: '90vh',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            Something went wrong
          </h2>
        </>
      )}
    </>
  )
}

export default GettingStarted
