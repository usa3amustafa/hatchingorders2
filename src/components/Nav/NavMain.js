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
    successModal,
    errorModal,
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
                    <button onClick={() => openRegistrationModal()}>
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
      {showRegistration && <RegistrationModal />}
      {successModal && <SuccessModal />}
      {errorModal && <ErrorModal />}
    </>
  )
}

export default NavMain
