import { useContext, useState } from 'react'
import AppContext from '../../../context/AppContext'
import Stars from '../../../components/Stars/Stars'
import Faq from '../../../components/Faq/Faq'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMinus,
  faPlus,
  faHeart,
  faShare,
} from '@fortawesome/free-solid-svg-icons'

const CourseDetailsText = ({ currCourse }) => {
  const { addAmountToCart, addAmountToCartOpenCart } = useContext(AppContext)

  const [quantity, setQuantity] = useState(0)

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }
  const decreaseQuantity = () => {
    setQuantity(prev => prev - 1)
  }

  return (
    <div className='courseDetailsText'>
      {/* title component */}
      <h2 className='courseDetailsTitle'>
        {currCourse.title} <span className='ucspan'>CEU</span>
      </h2>
      {/*  */}
      {/* reviews component */}
      {/* <div className='courseDetailsReviews'>
        <div className='courseDetailsStars'>
          <Stars />
        </div>
        <p className='courseDetailsReviewsDesc'>
          <span className='count'>3</span>
          Customer review
        </p>
      </div> */}

      {/* course desc component */}
      <div className='courseDesc'>
        {currCourse.courseDesc.desc.map((item, i) => {
          return (
            <p key={i} className='courseDetailsDesc'>
              {item}
            </p>
          )
        })}

        {/* course desc list items */}
        <h2 className='courseTopicsTitle'>Course Topics:</h2>
        <ul className='courseDescList'>
          {currCourse.courseTopics.map((item, i) => {
            return (
              <li key={i} className='courseTopic'>
                {item}
              </li>
            )
          })}
        </ul>
      </div>

      {/* price component */}
      <h2 className='courseDetailsPrice'>${currCourse.price.toFixed(2)}</h2>
      {/* add quantity controls */}
      <div className='addQuantityControls'>
        <button
          className='addQuantityControl decrease'
          disabled={quantity === 0}
          onClick={() => decreaseQuantity()}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <p className='addQuantityCount'>{quantity}</p>
        <button
          className='addQuantityControl increase'
          onClick={() => increaseQuantity()}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      {/* cta component */}
      <div className='courseDetailsCta'>
        <div className='courseDetailsCtaCta'>
          <button
            onClick={() => addAmountToCart(currCourse.id, quantity)}
            className='cta'
            disabled={quantity === 0}
          >
            add to cart
          </button>
        </div>
        <div className='courseDetailsCtaCta'>
          <button
            className='cta cta-bg-sec'
            onClick={() => addAmountToCartOpenCart(currCourse.id, quantity)}
            disabled={quantity === 0}
          >
            buy now
          </button>
        </div>
      </div>
      {/* sec controls component */}
      <div className='courseDetailsSecControls'>
        <a href='#' className='cta-sec'>
          <FontAwesomeIcon icon={faHeart} />
          add to wishlist
        </a>

        <a href='#' className='cta-sec'>
          <FontAwesomeIcon icon={faShare} />
          share
        </a>
      </div>
      {/* faq */}
      <Faq faqItems={currCourse.faqItems} />
    </div>
  )
}

export default CourseDetailsText
