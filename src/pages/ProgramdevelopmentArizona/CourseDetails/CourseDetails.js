import { useContext } from 'react'
import AppContext from '../../../context/AppContext'
import CourseDetailsText from './CourseDetailsText'
import CourseDetailsLeftCol from './CourseDetailsLeftCol'
import Modal from '../../../components/shared/Modal/Modal'

const CourseDetails = () => {
  const { programdevelopment, videoModal } = useContext(AppContext)

  return (
    <div className='courseDetails'>
      {/* left col containing video img and tabbed components */}
      <CourseDetailsLeftCol currCourse={programdevelopment} />

      {/* text component */}
      <CourseDetailsText currCourse={programdevelopment} />

      {videoModal && (
        <Modal type='video'>
          <iframe
            width='100%'
            height='500px'
            src='https://www.youtube.com/embed/x33h4oMfPCY'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </Modal>
      )}
    </div>
  )
}

export default CourseDetails
