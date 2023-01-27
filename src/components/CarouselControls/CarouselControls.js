import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

function CarouselControls() {
  return (
    <>
      <div className='carousel-control left-btn'>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>

      <div className='carousel-control right-btn'>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </>
  )
}

export default CarouselControls
