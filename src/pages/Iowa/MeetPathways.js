import { meetPathwaysData } from './homeData'
import MeetPathwaysCard from './MeetPathwaysCard'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Modal from '../../components/shared/Modal/Modal'
import CourseCard from '../../components/CourseCard/CourseCard'
import { useState } from 'react'

const MeetPathways = () => {
  const {
    pathwaysModal,
    datadatadata,
    timeManagement,
    actionplans,
    internationalschoolc,
    postsecondaryreadiness,
    programdevelopment,
    purposefulprograms,
    openPathwaysModal,
  } = useContext(AppContext)

  const datapathway = [
    datadatadata,
    actionplans,
    timeManagement,
    internationalschoolc,
  ]

  const postsecpathway = [
    postsecondaryreadiness,
    programdevelopment,
    purposefulprograms,
  ]

  const [currArr, setCurrArr] = useState(datapathway)

  const changeCurrArr = id => {
    if (id === 1) {
      setCurrArr(datapathway)
    } else if (id === 2) {
      setCurrArr(postsecpathway)
    }
    openPathwaysModal()
  }

  return (
    <section className='meet-pathways container'>
      <h2 className='meet-pathways-title'>Hatching Results Pathways</h2>

      <div className='meet-pathways-cards'>
        {meetPathwaysData.map(item => {
          return (
            <MeetPathwaysCard
              key={item.id}
              id={item.id}
              bgImg={item.bgImg}
              desc={item.title}
              changeCurrArr={changeCurrArr}
            />
          )
        })}
      </div>

      {pathwaysModal && (
        <Modal type='pathways'>
          <div
            className={`modal-pathways-cards ${
              currArr.length > 3 && 'scroll-y'
            }`}
          >
            {currArr.map(item => {
              return (
                <CourseCard id={item.id} courseData={item} isGridItem={false} />
              )
            })}
          </div>
        </Modal>
      )}
    </section>
  )
}

export default MeetPathways
