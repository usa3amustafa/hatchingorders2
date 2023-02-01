import React from 'react'
import Breadcrumb from './Breadcrumb'
import CourseDetails from './CourseDetails/CourseDetails'

import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const Details = () => {
  const { openNavtop } = useContext(AppContext)

  return (
    <section
      className={`detailsSectionHeader ${
        !openNavtop ? 'moveUpSectionHeader' : ''
      }`}
    >
      <div className='container details'>
        <Breadcrumb colorClass='priClr' />
        <CourseDetails />
      </div>
    </section>
  )
}

export default Details
