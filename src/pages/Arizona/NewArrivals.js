import CoursesCarousel from '../../components/CoursesCarousel/CoursesCarousel'
import Faq from '../../components/Faq/Faq'

import { newArrivalsData } from './homeData'

const arizonaFaqItems = [
  {
    id: 1,

    title:
      'Are You a School Counselor in Arizona Looking to Renew Your License?',
    desc: `This course is designed to be self-paced to accommodate hectic schedules. Course goals will be met using a combination of readings from the included e-textbook, videos, activities, and other supplemental readings. Learnings from each lesson can be immediately implemented in the school building.`,
  },
  {
    id: 2,

    title: 'About Our Courses',
    desc: `Hatch, T. & Hartline, J. (2021). The use of data in school counseling: Hatching results (and so much more) for students, programs, and the profession. Thousand Oaks, CA: Corwin.`,
  },
  {
    id: 3,

    title: 'Pricing/Discounts for Arizona Counselors',
    desc: `American School Counselor Association. (2022). The ASCA national model: A framework for school counseling programs (4th ed.). Alexandria, VA. Author.`,
  },
  {
    id: 4,

    title: 'University Credits',
    desc: `Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic, social/emotional, college and career readiness domains.`,
    note: `Note: You'll Earn a Certificate of Completion from Hatching Results`,
  },
]
function NewArrivals() {
  return (
    <section className='arizona-new-arrival-bg'>
      <div className='container new-arrival '>
        <div className='new-arrival-text'>
          <Faq faqItems={arizonaFaqItems} />
        </div>
      </div>
    </section>
  )
}

export default NewArrivals
