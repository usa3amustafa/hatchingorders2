import BreadCrumb from '../BreadCrumb/BreadCrumb'

import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const SectionHeader = ({ bgImg, sectionTitle, child }) => {
  const { openNavtop } = useContext(AppContext)

  return (
    <section
      className={`sectionHeaderBg ${!openNavtop ? 'moveUpSectionHeader' : ''}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className='container sectionHeader'>
        <BreadCrumb colorClass='whiteClr' child={child} />
        <h2 className='sectionHeaderTitle'>{sectionTitle}</h2>
      </div>
    </section>
  )
}

export default SectionHeader
