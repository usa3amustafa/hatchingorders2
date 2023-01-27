import CourseCard from '../../components/CourseCard/CourseCard'
import { coursesGridData } from './homeData'

import { Link } from 'react-router-dom'

const CoursesGrid = () => {
  return (
    <section className='courses-grid-section'>
      <div className='container courses-grid'>
        <CourseCard
          courseData={coursesGridData.leftColItem}
          isGridItem={true}
          isLeftCol={true}
        />

        <div className='courses-inner-grid'>
          {coursesGridData.rightColItems.map(item => {
            return (
              <CourseCard key={item.id} courseData={item} isGridItem={true} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CoursesGrid
