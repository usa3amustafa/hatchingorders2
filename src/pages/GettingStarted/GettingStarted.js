import welcomeIllustration from '../../assets/welcomeIllustration.webp'
import cardOneImg from '../../assets/cardOne.webp'
import cardTwoImg from '../../assets/cardTwo.webp'
import cardThreeImg from '../../assets/cardThree.webp'
import styles from './gettingStarted.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/Footer/Footer'

import { useEffect, useState } from 'react'
import axios from 'axios'

const GettingStarted = () => {
  const [token, setUrlValue] = useState()
  const [tokenVerified, setTokenVerified] = useState('')
  const [email, setEmail] = useState('')

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
      // 200 success show get started

      //
    } catch (err) {
      console.error(err)
      if (err.response.status === 404) {
        setTokenVerified('invalid')
      } else if (err.response.status === 401) {
        setTokenVerified('expired')
      }
      // 404 token invalid  token not valid
      // 401 token expired  token not valid
    }
  }
  const resendEmail = async () => {
    try {
      const response = await axios.post('/user/verify-email-resend', emailData)

      if (response.status === 200) {
        console.log('Email Sent')
      }
      // 200 success show get started

      //
    } catch (err) {
      console.error(err)
      if (err.response.status === 404) {
        setTokenVerified('invalid')
      } else if (err.response.status === 401) {
        setTokenVerified('expired')
      }
      // 404 token invalid  token not valid
      // 401 token expired  token not valid
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    console.log(urlParams)
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
                <button className={`${styles.cardCta} ${styles.cardOneCta}`}>
                  Create an account <FontAwesomeIcon icon={faRightLong} />
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

      {tokenVerified === 'invalid' && (
        <h2
          style={{
            height: '90vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Invalid Token
        </h2>
      )}

      {tokenVerified === 'expired' && (
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
          <button className='cta' onClick={() => resendEmail()}>
            Resend Verification Email
          </button>
        </h2>
      )}
    </>
  )
}

export default GettingStarted
