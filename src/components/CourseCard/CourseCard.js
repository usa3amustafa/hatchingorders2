import courseCardImg from '../../assets/course-img.webp'
import addToCart from '../../assets/add-to-cart.webp'
import Stars from '../Stars/Stars'
import { Link } from 'react-router-dom'
import { React, useContext } from 'react'
import AppContext from '../../context/AppContext'
import { coursesData } from '../../coursesData'

function CourseCard({ courseData, isGridItem, isLeftCol }) {
  const { addOneToCart } = useContext(AppContext)

  return (
    <div
      className={`course-card ${isGridItem ? 'w-100' : ''} ${
        isLeftCol ? 'left-col' : ''
      }`}
    >
      <div
        className={`course-card-img ${courseData.new && 'new'}`}
        style={{ backgroundImage: `url(${courseData.bgImg})` }}
      >
        <button
          className='course-cta'
          onClick={() => addOneToCart(courseData.id)}
        >
          <img src={addToCart} alt='' loading='lazy' /> add to cart
        </button>
      </div>
      <Link to={courseData.to}>
        <div className='course-desc'>
          <h2 className='course-title'>
            {isLeftCol
              ? courseData.title
              : courseData.title.length > 40
              ? `${courseData.title.slice(0, 50)}...`
              : courseData.title}
          </h2>

          <div className='course-desc-info'>
            <div className='course-desc-right'>{/* <Stars /> */}</div>
            <h3 className='course-price'>
              {Number(courseData.price)
                ? `$${courseData.price.toFixed(2)}`
                : courseData.price}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CourseCard
