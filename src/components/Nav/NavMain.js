import Navbar from './Navbar'
import styles from './nav.module.css'

import logo from '../../assets/hatchfulLogo.webp'
import searchIcon from '../../assets/search.webp'
import cartIcon from '../../assets/cart.webp'
import userIcon from '../../assets/user.webp'

import CheckoutModal from '../Modals/CheckoutModal'
import { Link } from 'react-router-dom'

import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Thankyou from '../Modals/ThankyouModal/Thankyou'

import RegistrationModal from '../Modals/RegistrationModals/RegistrationModal'
import SuccessModal from '../Modals/SuccessModal/SuccessModal'
import ErrorModal from '../Modals/ErrorModal/ErrorModal'
import Contactus from '../Contactus/Contactus'
import LogoutModal from '../Modals/LogoutModal/Logout'

const NavMain = () => {
  const {
    openNavtop,
    sticky,
    showCartModal,
    openCartModal,
    cartProducts,
    showRegistration,
    openRegistrationModal,
    showThankyou,
    internalServerError,
    registered,
    contactusModal,
    loggedInModal,
    verifyEmail,
    notfound,
    dataIncorrect,
    emailSent,
    emailSentVer,
    emailNotFound,
    openLogoutModal,
    logoutModal,
    loggedOut,
    logoutPrb,
  } = useContext(AppContext)

  const cartTotalItems = cartProducts.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  )
  return (
    <>
      {/* navbar */}
      <div
        className={`${styles.navMain} ${
          !openNavtop ? `${styles.moveUp}` : ''
        } ${sticky ? `${styles.sticky}` : ''}`}
      >
        <div className={styles.navContainer}>
          <nav>
            <div className={styles.navBar}>
              <div className={styles.logo}>
                <Link to='/'>
                  <img
                    src={logo}
                    alt=''
                    className={styles.logoImg}
                    loading='lazy'
                  />
                </Link>
              </div>

              <div className={styles.navFlex}>
                {/* these need to be handled */}

                <Navbar />

                <ul className={`${styles.navLinks} ${styles.navLinksRight}`}>
                  <li className={styles.cartLink} onClick={openCartModal}>
                    <button>
                      <img src={cartIcon} alt='' loading='lazy' />
                    </button>
                    <p className={styles.cartCount}>{cartTotalItems}</p>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        localStorage.getItem('loggedIn') === 'true'
                          ? openLogoutModal()
                          : openRegistrationModal()

                        console.log(typeof localStorage.getItem('loggedIn'))
                      }}
                    >
                      <img src={userIcon} alt='' loading='lazy' />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {showCartModal && <CheckoutModal />}
      {showThankyou && <Thankyou />}
      {contactusModal && <Contactus />}
      {/* signup modals */}
      {showRegistration && <RegistrationModal />}
      {registered && (
        <SuccessModal
          msg='Please Check Your Inbox With verification Email'
          desc='You have been Registered Successfuly'
        />
      )}
      {internalServerError && (
        <ErrorModal msg='Something went wrong' desc='Please try again later' />
      )}
      {/* logged in modals */}
      {loggedInModal && (
        <SuccessModal msg='Logged In' desc='You have successfuly logged in' />
      )}
      {verifyEmail && (
        <SuccessModal
          msg='Verification Required'
          desc='Please check your mail to verify your email'
        />
      )}
      {notfound && (
        <ErrorModal
          msg='Not Found'
          desc='Sorry not account was found for the email you entered'
        />
      )}
      {dataIncorrect && (
        <ErrorModal
          msg='Incorrect Password or Email'
          desc='Kindly check Your Login Credentials'
        />
      )}

      {/* forgot password */}
      {emailSent && (
        <SuccessModal
          msg='An email with instructions has been sent'
          desc='Please check your mail for more instructions'
        />
      )}
      {emailNotFound && (
        <ErrorModal
          msg='Email not found'
          desc='No account found against the enetered email'
        />
      )}

      {/* logout modal */}
      {logoutModal && <LogoutModal />}
      {loggedOut && (
        <SuccessModal msg='Logged Out' desc='You have succesfully logged out' />
      )}

      {logoutPrb && (
        <ErrorModal
          msg='Something Went Wrong'
          desc='unable to logout , please try again!'
        />
      )}

      {/* getting started */}
      {emailSentVer && (
        <SuccessModal
          msg='Verification Required'
          desc='Please check your mail to verify your email'
        />
      )}
    </>
  )
}

export default NavMain
