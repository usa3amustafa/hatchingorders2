import { useState } from 'react'
import stepsTwoImgOne from '../../assets/userImg.webp'
import stepsTwoImgTwo from '../../assets/userImg2.webp'
import stepsTwoImgThree from '../../assets/userImg3.webp'
import stepsTwoImgFour from '../../assets/userImg4.webp'

const StepsTwo = () => {
  const [activeStep, setActiveStep] = useState(1)

  const handleClick = stepNo => {
    setActiveStep(stepNo)
  }

  return (
    <section className='pinkBg'>
      <div className='container steps stepsTwo'>
        <div className='stepsLeft stepsTwoLeft'></div>

        <div className='stepsRight stepsTwoRight'>
          <h2 className='stepsTwoRightTitle'>WHAT STEPS DO I TAKE NEXT?</h2>

          <div className='stepsTwoRightSteps'>
            <div className='stepsRightTabs stepsTwoRightTabs'>
              <div
                className={`stepsRightTab stepsOneRightTab ${
                  activeStep === 1 && 'active'
                }`}
                onClick={() => handleClick(1)}
              >
                <p className='stepsOneRightTabCount'>1</p>
              </div>
              <div
                className={`stepsRightTab stepOneRightTab ${
                  activeStep === 2 && 'active'
                }`}
                onClick={() => handleClick(2)}
              >
                <p className='stepsOneRightTabCount'>2</p>
              </div>
              <div
                className={`stepsRightTab stepOneRightTab ${
                  activeStep === 3 && 'active'
                }`}
                onClick={() => handleClick(3)}
              >
                <p className='stepsOneRightTabCount'>3</p>
              </div>
              <div
                className={`stepsRightTab stepOneRightTab ${
                  activeStep === 4 && 'active'
                }`}
                onClick={() => handleClick(4)}
              >
                <p className='stepsOneRightTabCount'>4</p>
              </div>
            </div>
            {/* step 1 text */}
            <div className={`stepsRightText  ${activeStep === 1 && 'active'}`}>
              <p className='stepsRightDesc '>
                Register for the Hatching Results course of your choice.
              </p>
            </div>

            {/* step 2 text */}
            <div className={`stepsRightText  ${activeStep === 2 && 'active'}`}>
              <p className='stepsRightDesc '>
                Complete the online course and be sure to take the post-course
                test and pass with a score of 75% or better. All work must be
                submitted by the CSUSM deadline below (see table) in order to
                qualify for University Credit!
              </p>
            </div>
            {/* step 3 text */}
            <div className={`stepsRightText  ${activeStep === 3 && 'active'}`}>
              <p className='stepsRightDesc '>
                Register for the correct online course through CSU San Marcos.
                The bulleted list below contains the individual links for our
                respective courses. You may also view a full list of our courses
                with CSUSM. ● Data, Data, Data - EDUC 1130 ● It’s All About TIME
                (Management) - EDUC 1135
              </p>
            </div>

            {/* step 4 text */}
            <div className={`stepsRightText  ${activeStep === 4 && 'active'}`}>
              <p className='stepsRightDesc '>
                Once we verify that you have registered with CSUSM, have
                completed all assignments, and passed the post-course test with
                a score of 75% or better, your grade will be submitted to CSUSM.
                The University Credit will be distributed to you through CSUSM
                according to the timeline below. (*Transcripts available for an
                additional $12 from CSUSM).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepsTwo
