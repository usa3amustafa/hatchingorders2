import React, { useState } from 'react'
import ReviewsHeader from './ReviewsHeader'
import ReviewsControls from './ReviewsControls'
import UserReviews from './UserReviews'
import Questions from './Questions'

const Reviews = () => {
  const [activeTab, setActiveTab] = useState('reviews')
  const [showReviews, setShowReviews] = useState(false)

  const toggleReviews = () => {
    setShowReviews(prev => !prev)
  }

  return (
    <section>
      <div className='container reviews'>
        <ReviewsHeader
          showReviews={showReviews}
          toggleReviews={toggleReviews}
        />

        {/* <ReviewsControls activeTab={activeTab} setActiveTab={setActiveTab} /> */}
        {/* {activeTab === 'reviews' ? <UserReviews /> : <Questions />} */}
      </div>
    </section>
  )
}

export default Reviews
