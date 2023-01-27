import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faAnglesRight } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect, useRef } from 'react'

import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

import styles from './nav.module.css'

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false)

  let ref = useRef()

  useEffect(() => {
    const handler = event => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [dropdown])

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true)
  }

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false)
  }

  return (
    <li
      className='menu-items'
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            className={styles.dropdownBtn}
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown(prev => !prev)}
          >
            {items.title}{' '}
            {depthLevel > 0 ? (
              <span className={styles.dropdownIcon}>
                <FontAwesomeIcon icon={faAnglesRight} />
              </span>
            ) : (
              <span className={styles.dropdownIcon}>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <>
          <Link to={`/${items.to}`}>{items.title}</Link>
        </>
      )}
    </li>
  )
}

export default MenuItems
