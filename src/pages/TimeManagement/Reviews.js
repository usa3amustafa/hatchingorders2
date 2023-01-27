import React, { useState } from 'react'
import ReviewsHeader from './ReviewsHeader'
import ReviewsControls from './ReviewsControls'
import UserReviews from './UserReviews'
import Questions from './Questions'

const Reviews = () => {
  const [activeTab, setActiveTab] = useState('reviews')
  return (
    <section>
      <div className='container reviews'>
        <ReviewsHeader />
        <ReviewsControls activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'reviews' ? <UserReviews /> : <Questions />}
      </div>
    </section>
  )
}

export default Reviews
