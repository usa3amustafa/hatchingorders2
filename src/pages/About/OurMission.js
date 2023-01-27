import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { ourMissionData } from './aboutData'

const OurMission = () => {
  return (
    <section className=' ourMissionMain'>
      <div className='container ourMission'>
        <div className='ourMissionLeft'>
          <h2 className='ourMissionTitle'>{ourMissionData.title}</h2>

          <p className='ourMissionDesc'>{ourMissionData.desc}</p>
        </div>
        <div className='ourMissionRight'>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation, Thumbs]}
            className='ourMissionRightSlider'
          >
            {ourMissionData.slides.map(slide => {
              return (
                <SwiperSlide className='ourMissionRightSlide' key={slide.id}>
                  <div className='ourMissionRightImg'>
                    <img
                      src={slide.img}
                      alt=''
                      className='ourMissionRightImgImg'
                      loading='lazy'
                    />
                  </div>
                  <h2 className='ourMissionRightTitle'>{slide.title}</h2>
                  <h3 className='ourMissionRightPrice'>{slide.price}</h3>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default OurMission
