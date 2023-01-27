import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faHouseChimney,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const BreadCrumb = ({ colorClass, child }) => {
  console.log(colorClass)
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
        <span className={colorClass}>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
        <p className={`breadcrumbLink ${colorClass}`}>{child}</p>
      </div>
    </div>
  )
}

export default BreadCrumb
