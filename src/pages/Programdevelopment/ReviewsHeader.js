import React from 'react'
import Stars from '../../components/Stars/Stars'
import writeReviewIcon from '../../assets/writeReview.webp'
import askQuestionIcon from '../../assets/askQuestion.webp'

const ReviewsHeader = ({ showReviews, toggleReviews }) => {
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

        <p className='reviewsHeaderText' onClick={toggleReviews}>
          <span className='count'>0</span>
          Questions &nbsp; / &nbsp; <span className='count'>0</span>
          answers
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
