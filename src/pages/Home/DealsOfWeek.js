import CoursesCarousel from '../../components/CoursesCarousel/CoursesCarousel'
import addToCart from '../../assets/add-to-cart.webp'
import Timer from '../../components/timer/Timer'

const DealsOfWeek = () => {
  return (
    <section className='dealsSection'>
      <div className=' deals'>
        <div className='sale container'>
          <div className='sale-left'>
            <p className='deals-subtitle'>Highlighted items</p>
            <h2 className='deals-title'>deals of the week</h2>

            {/* timer */}
            <Timer />

            <a href='#' className='cta'>
              <img src={addToCart} alt='' loading='lazy' /> $25% Off
            </a>
          </div>

          <div className='sale-right'>
            <div className='sale-right-img'></div>
          </div>
        </div>

        <div className='deals-course-carousel container-2'>
          <CoursesCarousel slidesPerView={4} />
        </div>
      </div>
    </section>
  )
}

export default DealsOfWeek
