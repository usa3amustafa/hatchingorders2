import React from 'react'
import Faq from '../../components/Faq/Faq'

import {
  faCircleExclamation,
  faGauge,
  faStreetView,
  faNetworkWired,
  faFileContract,
} from '@fortawesome/free-solid-svg-icons'

const FaqUniversityCredits = () => {
  return (
    <section className='faqSection'>
      <div className='faq container'>
        <h2 className='faqSectionTitle'>Frequently Asked Questions</h2>

        <Faq
          faqItems={[
            {
              id: 1,
              icon: faCircleExclamation,
              title: `If I do not pass the post-test, can I still earn University
              Credit?`,
              desc: `You will be given three attempts to pass the post-test. The higher score of the three scores will be used to determine if you have met the requirement (75% or better) that is needed to earn University Credit for the course. You are not able to earn University Credit until you pass the post-test.`,
            },
            {
              id: 2,
              icon: faGauge,
              title:
                'Is there a deadline for when I must finish the course after registering?',
              desc: `Hatching Results will give you access to the course for approximately one year. CSU San Marcos requires that you finish the course within the semester that you signed up for credit for. If you do not finish within the CSU San Marcos deadline for each semester, you may be required to pay another fee to CSU San Marcos to extend into the next semester.`,
            },
            {
              id: 3,
              icon: faStreetView,
              title: `If I don’t complete my course for University Credit by CSUSM’s
              semester deadline, will I receive an “F”on my transcript?`,
              desc: `Yes, if you do not complete the course by the semester deadline you will receive an “F” on your transcript. You will also have to pay another $99 registration fee if you want to retake the course in a future semester. Accordingly, we recommend that you complete our online course before registering with CSU San Marcos.`,
            },
            {
              id: 4,
              icon: faNetworkWired,
              title: `I didn’t register for University Credit when I registered for
              the course. I’ve completed the course andnow I’d like to
              register for credit!`,
              desc: `Yes, we recommend completing the course before registering with CSUSM. You can register for the course with CSUSM for the current semester before the registration deadline (see the timeline table above). You can also register for the following semester if the current semester’s deadline has passed, however, you will not receive your credit and transcript until the end of the following semester.
`,
            },
            {
              id: 5,
              icon: faFileContract,
              title: `I need the University Credit to renew my license by October. Can I receive my transcript before the end of the Fall CSUSM semester?`,
              desc: `Unfortunately, you will not be able to receive your transcript from CSUSM until a week after the semester ends (see the timeline table above).`,
            },
          ]}
        />
      </div>
    </section>
  )
}

export default FaqUniversityCredits
