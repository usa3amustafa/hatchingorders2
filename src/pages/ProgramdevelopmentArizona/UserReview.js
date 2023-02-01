import React from 'react'
import Stars from '../../components/Stars/Stars'

const UserReview = () => {
  return (
    <div className='userReview'>
      <div className='userReviewTopBar'>
        <div className='userReviewInfo'>
          <h2 className='userReviewName'>mary</h2>
          <div className='userReviewStars'>
            <Stars />
          </div>
        </div>
        <p className='reviewDate'>12/12/2018</p>
      </div>

      <div className='userReviewText'>
        <h2 className='userReviewTitle'>Luxurious ??</h2>
      </div>
    </div>
  )
}

export default UserReview
