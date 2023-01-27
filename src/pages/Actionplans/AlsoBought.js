import React from 'react'

import CoursesCarousel from '../../components/CoursesCarousel/CoursesCarousel'

const AlsoBought = () => {
  return (
    <section>
      <div className='container alsoBought'>
        <h2 className='alsoBoughtTitle'>
          Customers Who Bought This Item Also Bought
        </h2>
      </div>
      <div className='deals-course-carousel container-2'>
        <CoursesCarousel slidesPerView={4} />
      </div>
    </section>
  )
}

export default AlsoBought
