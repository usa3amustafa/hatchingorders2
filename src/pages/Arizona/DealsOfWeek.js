import CoursesCarousel from '../../components/CoursesCarousel/CoursesCarousel'

const DealsOfWeek = ({ className }) => {
  return (
    <section className='dealsSection'>
      <div className='deals'>
        <div className={`sale container ${className}`}>
          <div className='sale-left'>
            <p className='deals-subtitle'>Highlighted items</p>
            <h2 className='deals-title dealsTitleArizona'>
              SPECIAL OFFER <br /> USE &nbsp;
              <span className='discountCodeArizona'>ARIZONA20</span> FOR 20% OFF
              <br /> AT CHECKOUT
            </h2>
          </div>

          <div className='sale-right'>
            <div className='arizona-sale-right-img'></div>
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
