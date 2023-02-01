import React from 'react'
import CourseVideo from './CourseVideo'
import { TabbedComponents } from './TabbedComponents'

const CourseDetailsLeftCol = ({ currCourse }) => {
  return (
    <div className='courseDetailsLeftCol'>
      <CourseVideo />

      <TabbedComponents currCourse={currCourse} />
    </div>
  )
}

export default CourseDetailsLeftCol
