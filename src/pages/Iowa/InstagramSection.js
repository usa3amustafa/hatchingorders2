import InstagramImg from './InstagramImg'
import instaImgOne from '../../assets/insta-1.webp'
import instaImgTwo from '../../assets/insta-2.webp'
import instaImgThree from '../../assets/insta-3.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'

const InstagramSection = ({ className }) => {
  return (
    <section>
      <div className='container instagram-section'>
        <div className='instagram-text'>
          <h3 className='instagram-subtitle'>instagram</h3>

          <a
            href='https://www.instagram.com/hatchingresults/?hl=en'
            target='_blank'
            className='instagram-title'
          >
            @HatchingResults
          </a>

          <p className='instagram-desc'>
            Led by President and CEO Trish Hatch, Ph.D., Hatching Results
            provides conference keynotes, comprehensive district training,
            onsite and virtual professional learning, grant writing and
            evaluation, online courses, and regional cohort academies.
          </p>

          <a
            className='cta-sec'
            href='https://www.instagram.com/hatchingresults/?hl=en'
            target='_blank'
          >
            view more <FontAwesomeIcon icon={faRightLong} />
          </a>
        </div>

        <InstagramImg bgImg={instaImgOne} />
        <InstagramImg bgImg={instaImgTwo} />
        <InstagramImg bgImg={instaImgThree} />
      </div>
    </section>
  )
}

export default InstagramSection
