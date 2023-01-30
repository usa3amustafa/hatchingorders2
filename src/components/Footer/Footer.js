import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'

import paypalIcon from '../../assets/paypal.webp'
import visaIcon from '../../assets/visa.webp'
import mastercardIcon from '../../assets/masterCard.webp'
import aExpressIcon from '../../assets/aExpress.webp'

import { useContext } from 'react'
import AppContext from '../../context/AppContext'

function Footer({ className }) {
  const { openContactusModal } = useContext(AppContext)
  return (
    <footer className={className}>
      <div className={`container footer ${className}`}>
        <div className='footerTop'>
          <div className='footerCol footerCol1'>
            <h2 className='footerColTitle'>Info</h2>
            <a
              href='https://hatchingorders.com'
              target='_blank'
              className='footerLink'
            >
              Hatching Results
            </a>
            <a
              href='https://hatchingorders.com/public/university-credits'
              target='_blank'
              className='footerLink'
            >
              San Marcos
            </a>
            <a href='#' className='footerLink'>
              Blog
            </a>
            <a href='#' className='footerLink'>
              Terms and Conditions
            </a>
            <a href='#' className='footerLink'>
              Privacy Policy
            </a>
            <a href='#' className='footerLink'>
              Press
            </a>
          </div>

          <div className='footerCol footerCol2'>
            <h2 className='footerColTitle'>Customer Care</h2>
            {/* <a href='#' className='footerLink'>
              Refunds and Returns
            </a> */}
            <p className='footerLink' onClick={openContactusModal}>
              Contact Us
            </p>
            <a href='#' className='footerLink'>
              Sitemap
            </a>
          </div>

          <div className='footerCol footerCol3'>
            <h2 className='footerColTitle'>Subscribe</h2>
            <p className='footerColDesc'>
              Get the latest news and promotions on your inbox
            </p>

            <div className='footerColEmail'>
              <input
                type='email'
                className='footerColEmailInput'
                placeholder='Email address'
              />

              <button className='footerColEmailBtn'>
                <FontAwesomeIcon icon={faRightLong} />
              </button>
            </div>
          </div>
        </div>

        <div className={`footerBottom ${className}`}>
          <div className='paymentOptions'>
            <div className='paymentOption'>
              <img
                src={mastercardIcon}
                className='paymentOptionImg'
                alt=''
                loading='lazy'
              />
            </div>
            <div className='paymentOption'>
              <img
                src={visaIcon}
                className='paymentOptionImg'
                alt=''
                loading='lazy'
              />
            </div>
            <div className='paymentOption'>
              <img
                src={aExpressIcon}
                className='paymentOptionImg'
                alt=''
                loading='lazy'
              />
            </div>
          </div>

          <p className='footerBottomText'>
            2022 Hatching Orders. All Rights Reserved. Designed by Lavt Tech
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
