import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faHouseChimney,
} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { Link } from 'react-router-dom'

const BreadCrumb = ({ colorClass }) => {
  const { internationalschoolc } = useContext(AppContext)
  return (
    <div className='breadcrumb'>
      <div className='breadcrumbLinks'>
        <Link
          to='/'
          className={` breadcrumbLink breadcrumbHomeLink ${colorClass}`}
        >
          <FontAwesomeIcon icon={faHouseChimney} />
          Home
        </Link>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href='#' className={`breadcrumbLink ${colorClass}`}>
          Data Pathway
        </a>
        <FontAwesomeIcon icon={faChevronRight} />
        <a href='#' className={`breadcrumbLink ${colorClass}`}>
          {internationalschoolc.title}
        </a>
      </div>
    </div>
  )
}

export default BreadCrumb
