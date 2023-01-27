import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Stars() {
  return (
    <div className='stars'>
      <FontAwesomeIcon icon={faStar} className='star filled-star' />
      <FontAwesomeIcon icon={faStar} className='star filled-star' />
      <FontAwesomeIcon icon={faStar} className='star filled-star' />
      <FontAwesomeIcon icon={faStar} className='star filled-star' />
      <FontAwesomeIcon icon={faStar} className='star blank-star' />
    </div>
  )
}

export default Stars
