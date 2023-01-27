import courseDetailsVidImg from '../../../assets/postsecondarycover.webp'
import playIcon from '../../../assets/playIcon.webp'
import { useContext } from 'react'
import AppContext from '../../../context/AppContext'

const CourseVideo = () => {
  const { openDataVidModal } = useContext(AppContext)

  return (
    <div className='courseDetailsVid' onClick={() => openDataVidModal()}>
      <img
        src={courseDetailsVidImg}
        alt=''
        style={{ width: '100%' }}
        className='videoCoverImg'
        loading='lazy'
      />
      <img
        src={playIcon}
        alt=''
        className='courseDetailsVidPlayIcon'
        loading='lazy'
      />
    </div>
  )
}

export default CourseVideo
