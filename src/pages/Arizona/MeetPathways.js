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
    postsecondaryreadiness,
    programdevelopment,
    purposefulprograms,
    internationalschoolc,
    reportingresults,
    sysofchange,
    miracleschallanges,
    openPathwaysModal,
  } = useContext(AppContext)

  const schoolcounceling = [
    datadatadata,
    actionplans,
    timeManagement,
    internationalschoolc,
    reportingresults,
  ]

  const multicultural = [sysofchange]

  const arr3 = [miracleschallanges]

  const [currArr, setCurrArr] = useState(schoolcounceling)

  const changeCurrArr = id => {
    if (id === 1) {
      setCurrArr(schoolcounceling)
    } else if (id === 2) {
      setCurrArr(multicultural)
    } else if (id === 3) {
      setCurrArr(arr3)
    }
    openPathwaysModal()
  }

  return (
    <section className='meet-pathways container'>
      <h2 className='meet-pathways-title'>Hatching Results Pathways</h2>

      <div className='meet-pathways-cards arizona-meetpathways-cards'>
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
                <CourseCard
                  key={item.id}
                  id={item.id}
                  courseData={item}
                  isGridItem={false}
                />
              )
            })}
          </div>
        </Modal>
      )}
    </section>
  )
}

export default MeetPathways
