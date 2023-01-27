import addToCart from '../../assets/add-to-cart.webp'
import Stars from '../Stars/Stars'
import courseCardImg from '../../assets/course-img.webp'
import { React, useContext } from 'react'
import AppContext from '../../context/AppContext'

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'

import { coursesData } from '../../coursesData'

import { Link } from 'react-router-dom'
import GoToTop from '../../GoToTop'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import './coursescarousel.css'

const CoursesCarousel = ({ slidesPerView, courseCards }) => {
  const { addOneToCart } = useContext(AppContext)
  const swiper = useSwiper()
  return (
    <>
      <div className='carousel'>
        <Swiper
          spaceBetween={10}
          slidesPerView={slidesPerView}
          navigation={true}
          modules={[Navigation, Thumbs]}
          className='course-cards container-2'
        >
          {coursesData.slice(0, 7).map(c => {
            return (
              <SwiperSlide key={c.id} className='course-card'>
                <div
                  className={`course-card-img ${c.new && 'new'}`}
                  style={{ backgroundImage: `url(${c.bgImg})` }}
                >
                  <button
                    className='course-cta'
                    onClick={() => addOneToCart(c.id)}
                  >
                    <img src={addToCart} alt='' loading='lazy' /> add to cart
                  </button>
                </div>
                <Link to={c.to}>
                  <div className='course-desc'>
                    <h2 className='course-title'>
                      {c.title.length > 50
                        ? `${c.title.slice(0, 50)}...`
                        : c.title}
                    </h2>

                    <div className='course-desc-info'>
                      <div className='course-desc-right'>{/* <Stars /> */}</div>
                      <h3 className='course-price'>
                        {Number(c.price) ? `$${c.price.toFixed(2)}` : c.price}
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <GoToTop />
    </>
  )
}

export default CoursesCarousel
