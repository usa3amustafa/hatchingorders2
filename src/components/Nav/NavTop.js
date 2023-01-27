import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

import styles from './nav.module.css'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const NavTop = () => {
  const { openNavtop, closeNavtop } = useContext(AppContext)

  return (
    <div
      className={`bg-sec ${styles.navTop} ${
        !openNavtop ? `${styles.closeNavtop}` : ''
      }`}
    >
      <div className={`container ${styles.navTopBar}`}>
        <button className={styles.leftIcon}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <p className={styles.navTopBarText}>
          For course assistance, click on the chat icon to connect with an
          Client Advisor.
        </p>

        <button className={styles.rightIcon}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        <button className={styles.closeIcon} onClick={closeNavtop}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  )
}

export default NavTop
