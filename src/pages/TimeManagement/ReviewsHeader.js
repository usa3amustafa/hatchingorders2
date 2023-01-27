import React from 'react'
import Stars from '../../components/Stars/Stars'
import writeReviewIcon from '../../assets/writeReview.webp'
import askQuestionIcon from '../../assets/askQuestion.webp'

const ReviewsHeader = () => {
  return (
    <div className='reviewsHeader'>
      <div className='reviewsHeaderleftCol'>
        <div className='reviewsHeaderleftColTopbar'>
          <div className='reviewsHeaderleftColStars'>
            <Stars />
          </div>

          <p className='reviewsHeaderLeftColText'>
            <span className='count'>3</span>
            Customer review
          </p>
        </div>

        <p className='reviewsHeaderText'>
          <a href='#' className='reviewsHeaderTextDesc'>
            <span className='count'>0</span>
            Questions
          </a>
          /
          <a href='#' className='reviewsHeaderTextDesc'>
            <span className='count'>0</span>
            answers
          </a>
        </p>
      </div>

      <div className='reviewsHeaderRightCol'>
        <a href='#' className='cta'>
          <img src={writeReviewIcon} alt='' loading='lazy' />
          write a review
        </a>
        <a href='#' className='cta'>
          <img src={askQuestionIcon} alt='' loading='lazy' />
          Ask a question
        </a>
      </div>
    </div>
  )
}

export default ReviewsHeader
