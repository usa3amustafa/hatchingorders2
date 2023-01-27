import CoursesCarousel from '../../components/CoursesCarousel/CoursesCarousel'

const DealsOfWeek = () => {
  return (
    <section className='dealsSection'>
      <div className=' deals'>
        <div className='sale container'>
          <div className='sale-left'>
            <p className='deals-subtitle'>Highlighted items</p>
            <h2 className='deals-title'>deals of the week</h2>

            {/* timer */}
            <div className='timer'>
              <p className='timer-el days'>01</p>
              <p className='colon'>:</p>

              <p className='timer-el hours'>23</p>
              <p className='colon'>:</p>

              <p className='timer-el minutes'>43</p>
              <p className='colon'>:</p>

              <p className='timer-el seconds'>12</p>
            </div>

            <a href='#' className='cta'>
              <img src='./img/course-cards/add-to-cart.png' alt='' /> $25% Off
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
