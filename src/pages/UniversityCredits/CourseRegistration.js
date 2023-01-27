import courseRegImg from '../../assets/universityCredits2.webp'

const CourseRegistration = () => {
  return (
    <section className='courseRegBg'>
      <div className='container courseReg'>
        <div className='courseRegLeft'>
          <img
            src={courseRegImg}
            alt=''
            className='courseRegLeftImg'
            loading='lazy'
          />

          <a href='#' className='courseRegLeftBtn'>
            $ <span className='bold fontHeading'>399</span> only <br />
            <span className='bold fontHeading'>Total Registration Cost</span>
          </a>
        </div>
        <div className='courseRegRight'>
          <h2 className='courseRegRightTitle'>Course Registration</h2>

          <p className='courseRegRightDesc'>
            <span className='bold'>
              Hatching Results Registration for University Credits
            </span>
            $300 to be paid to Hatching Results now for the Course registration.
          </p>

          <p className='courseRegRightDesc'>
            <span className='bold'>
              CSUSM Registration Fee for University Credits
            </span>
            $99 to CSUSM for course registration - you will pay the University
            when you register with them for the course.
            <br />(
            <span className='pri-text'>
              There is also a $12 fee if you need a copy of your transcripts for
              your employer.
            </span>
            )
          </p>
        </div>
      </div>
    </section>
  )
}

export default CourseRegistration
