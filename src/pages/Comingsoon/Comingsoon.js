import styles from './comingsoon.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
const Comingsoon = () => {
  const { closeModal } = useContext(AppContext)
  return (
    <div className='container'>
      <div className={styles.comingsoon}>
        <h1 className={styles.comingsoonTitle}>
          The Course is still in development and will be available Soon
        </h1>

        <Link
          to='/arizona'
          className={styles.gobackLink}
          onClick={() => closeModal()}
        >
          Go Back
        </Link>
      </div>
    </div>
  )
}

export default Comingsoon
