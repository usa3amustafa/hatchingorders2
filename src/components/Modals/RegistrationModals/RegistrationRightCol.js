import { useEffect, useState } from 'react'
import slidesData from './rightcolSliderData'
import logo from '../../../assets/hatchfulLogo.webp'

const RegistrationRightCol = () => {
  // const [slides, setSlides] = useState(slidesData)
  // const [index, setIndex] = useState(0)

  // useEffect(() => {
  //   const lastIndex = slides.length - 1
  //   if (index < 0) {
  //     setIndex(lastIndex)
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0)
  //   }
  // }, [index, slides])

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1)
  //   }, 5000)
  //   return () => {
  //     clearInterval(slider)
  //   }
  // }, [index])

  return (
    <section className='registrationModalRightCol'>
      <div className='registrationRightColLogo'>
        <img src={logo} alt='' loading='lazy' />
      </div>

      {/* <div className='section-center'> */}
      {/* {slides.map((slide, slideIndex) => {
          const { id, image, title, desc } = slide

          let position = 'nextSlide'
          if (slideIndex === index) {
            position = 'activeSlide'
          }
          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === slide.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt='' className='person-img' loading='lazy'/>

              <p className='title'>{title}</p>
              <p className='desc'>{desc}</p>
            </article>
          )
        })} */}
      {/* header controls */}
      {/* <div className='header-slider-controls '>
          {slidesData.map((item, i) => {
            return (
              <div
                key={item.id}
                className={`header-slider-control ${
                  index === i ? 'active' : ''
                }`}
                onClick={() => setIndex(i)}
              ></div>
            )
          })}
        </div> */}
      {/* </div> */}
    </section>
  )
}

export default RegistrationRightCol
