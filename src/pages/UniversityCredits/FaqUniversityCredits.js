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
        <h2 className='faqSectionTitle'>Frequently Asked Question</h2>

        <Faq
          faqItems={[
            {
              id: 1,
              icon: faCircleExclamation,
              title: `If I do not pass the post-test, can I still earn University
              Credit?`,
              desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
              deleniti illum quasi fuga dolorem officia beatae aliquam voluptatum
              corrupti veniam molestias accusantium eaque maxime porro iusto
              facilis, sapiente quibusdam animi.`,
            },
            {
              id: 2,
              icon: faGauge,
              title:
                'Is there a deadline for when I must finish the course after registering?',
              desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
              deleniti illum quasi fuga dolorem officia beatae aliquam voluptatum
              corrupti veniam molestias accusantium eaque maxime porro iusto
              facilis, sapiente quibusdam animi.`,
            },
            {
              id: 3,
              icon: faStreetView,
              title: `If I don’t complete my course for University Credit by CSUSM’s
              semester deadline, will I receive an “F”on my transcript?`,
              desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
              deleniti illum quasi fuga dolorem officia beatae aliquam voluptatum
              corrupti veniam molestias accusantium eaque maxime porro iusto
              facilis, sapiente quibusdam animi.`,
            },
            {
              id: 4,
              icon: faNetworkWired,
              title: `I didn’t register for University Credit when I registered for
              the course. I’ve completed the course andnow I’d like to
              register for credit!`,
              desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
              deleniti illum quasi fuga dolorem officia beatae aliquam voluptatum
              corrupti veniam molestias accusantium eaque maxime porro iusto
              facilis, sapiente quibusdam animi.`,
            },
            {
              id: 5,
              icon: faFileContract,
              title: `I need the University Credit to renew my license by October. Can I receive my transcript before the end of the Fall CSUSM semester?`,
              desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
              deleniti illum quasi fuga dolorem officia beatae aliquam voluptatum
              corrupti veniam molestias accusantium eaque maxime porro iusto
              facilis, sapiente quibusdam animi.`,
            },
          ]}
        />
      </div>
    </section>
  )
}

export default FaqUniversityCredits
