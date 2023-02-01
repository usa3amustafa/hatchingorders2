import testimonialTextBg from '../../assets/testimonial-text-bg.webp'

const Testimonials = () => {
  return (
    <section className='testimonial-bg'>
      <div className='container testimonial'>
        <h2 className='testimonial-title'>Trusted by School Counselors</h2>

        <div className='testimonial-text'>
          <img
            src={testimonialTextBg}
            alt=''
            className='testimonial-text-bg'
            loading='lazy'
          />

          <p className='testimonial-text-desc'>
            Taking the Hatching Results Course was one of the best education and
            counseling decisions I have ever made. It helped me gain
            life-changing skills in counseling that have only been magnified. I
            have already seen incredible improvement in my ability to
            effectively assess potential projects for success and easily develop
            plans. Taking this course was a big step towards growing my career
            that I am extremely grateful for.
          </p>

          <div className='user user-1'></div>
          <div className='user user-2'></div>
          <div className='user user-3'></div>
          <div className='user user-4'></div>
          <div className='user user-5'></div>
          <div className='user user-6'></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
