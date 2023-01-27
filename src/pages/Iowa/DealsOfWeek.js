import CoursesCarousel from '../../components/CoursesCarousel/CoursesCarousel'
import { Link } from 'react-router-dom'

const DealsOfWeek = ({ className }) => {
  return (
    <section className='dealsSection'>
      <div className='deals'>
        <div className={`sale container ${className}`}>
          <div className='sale-left'>
            <h2 className='deals-title  dealsTitleIowa'>
              Full Reimbursement
              <span className='pri-text'> Ross Trust Scholarship</span>
            </h2>

            <a
              className='cta'
              href='https://www.isea.org/roland-and-dorothy-ross-scholarship'
              target='_blank'
            >
              Apply Now
            </a>
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
