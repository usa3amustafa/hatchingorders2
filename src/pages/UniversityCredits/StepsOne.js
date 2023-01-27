import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'

const StepsOne = () => {
  const [activeStep, setActiveStep] = useState(1)

  const handleClick = stepNo => {
    setActiveStep(stepNo)
  }

  return (
    <section className='pinkBg'>
      <div className='container steps stepsOne'>
        <div className='stepsLeft stepsOneLeft'></div>

        <div className='stepsRight stepsOneRight'>
          <div className='stepsRightTabs stepsOneRightTabs'>
            <div
              className={`stepsRightTab stepsOneRightTab ${
                activeStep === 1 && 'active'
              }`}
              onClick={() => handleClick(1)}
            >
              <p className='stepsOneRightTabCount'>1</p>
            </div>
            <div
              className={`stepsRightTab stepsOneRightTab ${
                activeStep === 2 && 'active'
              }`}
              onClick={() => handleClick(2)}
            >
              <p className='stepsOneRightTabCount'>2</p>
            </div>
            <div
              className={`stepsRightTab stepsOneRightTab ${
                activeStep === 3 && 'active'
              }`}
              onClick={() => handleClick(3)}
            >
              <p className='stepsOneRightTabCount'>3</p>
            </div>
          </div>

          <div className='stepsRightTextMain'>
            <div
              className={`stepsRightText  ${activeStep === 1 ? 'active' : ''}`}
            >
              <h2 className='stepsRightTitle'>
                California State University San Marcos (CSUSM)
              </h2>

              <p className='stepsRightDesc stepsOneRightDesc'>
                Hatching Results is pleased to announce that in partnership with
                California State University San Marcos (CSUSM), you can now earn
                University Credits by taking Hatching Results online courses!
              </p>

              <a href='#' className='cta-sec secClr'>
                visit site <FontAwesomeIcon icon={faRightLong} />
              </a>
            </div>

            <div className={`stepsRightText  ${activeStep === 2 && 'active'}`}>
              <h2 className='stepsRightTitle '>
                Why explore the university credit option?
              </h2>

              <p className='stepsRightDesc stepsOneRightDesc'>
                Completion of university post-masters credits is often honored
                by school districts for the purpose of advancement and salary
                increments/increases on the district step and column pay
                schedule. It may also be used in some states for license
                renewal. Hatching Results partners with California State
                University San Marcos (CSUSM) to offer university credit for our
                online courses based on The Use of Data in School Counseling
                (2e). NOTE: Our first Middle School Postsecondary Readiness
                Course is not eligible for University Credit.
              </p>

              <a href='#' className='cta-sec secClr'>
                visit site <FontAwesomeIcon icon={faRightLong} />
              </a>
            </div>

            <div className={`stepsRightText  ${activeStep === 3 && 'active'}`}>
              <h2 className='stepsRightTitle '>
                How long does each course take and how many University Credits
                can I earn from each Hatching Results course?
              </h2>

              <p className='stepsRightDesc stepsOneRightDesc'>
                1 University Credit for each 15-hour Hatching Results Course.
              </p>

              <a href='#' className='cta-sec secClr'>
                visit site <FontAwesomeIcon icon={faRightLong} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepsOne
