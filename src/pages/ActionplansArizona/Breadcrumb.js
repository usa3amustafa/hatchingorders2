import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faHouseChimney,
} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

const BreadCrumb = ({ colorClass }) => {
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
          Tier 1 Action Plans & Pre/Post Tests
        </a>
      </div>
    </div>
  )
}

export default BreadCrumb
