import { menuItemsData } from './menuItemsData'
import MenuItems from './MenuItems'
import styles from './nav.module.css'

const Navbar = () => {
  return (
    <nav>
      <ul className={`${styles.navLinks} ${styles.navLinksLeft}}`}>
        {menuItemsData.map((menu, index) => {
          const depthLevel = 0
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />
        })}
      </ul>
    </nav>
  )
}

export default Navbar
