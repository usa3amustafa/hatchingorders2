import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'

import paypalIcon from '../../assets/paypal.png'
import visaIcon from '../../assets/visa.png'
import mastercardIcon from '../../assets/masterCard.png'
import aExpressIcon from '../../assets/aExpress.png'

function Footer({ className }) {
  return (
    <footer className={className}>
      <div className={`container footer ${className}`}>
        <div className='footerTop'>
          <div className='footerCol footerCol1'>
            <h2 className='footerColTitle'>Info</h2>
            <a href='#' className='footerLink'>
              Hatching Results
            </a>
            <a href='#' className='footerLink'>
              San Macros
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
            <a href='#' className='footerLink'>
              Refunds and Returns
            </a>
            <a href='#' className='footerLink'>
              Contact Us
            </a>
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
              <img src={paypalIcon} className='paymentOptionImg' alt='' />
            </div>
            <div className='paymentOption'>
              <img src={mastercardIcon} className='paymentOptionImg' alt='' />
            </div>
            <div className='paymentOption'>
              <img src={visaIcon} className='paymentOptionImg' alt='' />
            </div>
            <div className='paymentOption'>
              <img src={aExpressIcon} className='paymentOptionImg' alt='' />
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
