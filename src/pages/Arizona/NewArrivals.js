import CoursesCarousel from '../../components/CoursesCarousel/CoursesCarousel'
import Faq from '../../components/Faq/Faq'

import { newArrivalsData } from './homeData'

const arizonaFaqItems = [
  {
    id: 1,

    title:
      'Are You a School Counselor in Arizona Looking to Renew Your License?',
    desc: `Hatching Results partners with California State University San Marcos (CSUSM) to offer courses for school counselors for continued education. These courses allow Arizona School Counselors to complete the 6 semester (credit) hour deficiency to renew their certificates in the three-year window who apply for certification under options B, C, and D.
.`,
  },
  {
    id: 2,

    title: 'About Our Courses',
    desc: [
      `Each course is self-paced.`,
      `Each course takes approximately 15 hours to complete.`,
    ],
  },
  {
    id: 3,

    title: 'Pricing/Discounts for Arizona Counselors',
    desc: `Need more than one course? Hatching Results offers discounts to Arizona counselors to meet ADE requirements.`,
    pricingTable: true,
  },
  {
    id: 4,

    title: 'University Credits',
    desc: `If you are interested in obtaining university credit for a low additional fee, each course is worth 1 semester (credit) hour through California State University - San Marcos. Instructions and more information on how to obtain this credit can be found `,
    link: `here`,
    href: 'https://www.csusm.edu/el/courses/professionaldevelopment.html',
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
