import courseDetailsVidImg from '../../../assets/courseDetailsVidImg.png'
import playIcon from '../../../assets/playIcon.png'
import { useContext } from 'react'
import AppContext from '../../../context/AppContext'

const CourseVideo = () => {
  const { openDataVidModal } = useContext(AppContext)

  return (
    <div className='courseDetailsVid' onClick={() => openDataVidModal()}>
      <img src={courseDetailsVidImg} alt='' />
      <img src={playIcon} alt='' className='courseDetailsVidPlayIcon' />
    </div>
  )
}

export default CourseVideo
