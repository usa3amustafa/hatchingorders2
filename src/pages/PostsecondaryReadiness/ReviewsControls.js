import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const ReviewsControls = ({ activeTab, setActiveTab }) => {
  const handleClick = tab => {
    setActiveTab(tab)
  }

  return (
    <div className='reviewsControls'>
      <div className='reviewsControlsLeft'>
        <span
          className={`reviewsControlLeft ${
            activeTab === 'reviews' ? 'active' : ''
          }`}
          onClick={() => handleClick('reviews')}
        >
          Reviews (<span className='count'>8</span>)
        </span>
        <span
          className={`reviewsControlLeft ${
            activeTab === 'questions' ? 'active' : ''
          }`}
          onClick={() => handleClick('questions')}
        >
          Questions (<span className='count'>12</span>)
        </span>
      </div>

      <div className='reviewsControlsRight'>
        <div className='reviewsControlsRightControl'>
          Sort :
          <div className='selectList'>
            <select name='sortBy' id='sortBy' className='sortBySelectList'>
              <option value='newest'>Newest</option>
              <option value='newest'>Oldest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsControls
