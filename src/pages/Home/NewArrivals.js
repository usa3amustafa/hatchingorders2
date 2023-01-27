import CoursesCarousel from '../../components/CoursesCarousel/CoursesCarousel'

import { newArrivalsData } from './homeData'

function NewArrivals() {
  return (
    <section className='new-arrival-bg'>
      <div className='container new-arrival'>
        <div className='new-arrival-text'>
          <h2 className='new-arrival-section-title'>{newArrivalsData.title}</h2>
          <p className='new-arrival-desc'>{newArrivalsData.desc}</p>

          <a href='#' className='cta cta-pri'>
            shop now
          </a>
        </div>

        <div className='new-arrival-course-carousel'>
          <CoursesCarousel
            slidesPerView={3}
            courseCards={newArrivalsData.courseCards}
          />
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
