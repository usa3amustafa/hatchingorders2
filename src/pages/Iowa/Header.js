import { useState, useEffect } from 'react'
import NavMain from '../../components/Nav/NavMain'
import { headerSliderData } from './homeData'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import iowaHeaderImg1 from '../../assets/iowaHeader1.webp'

function Header() {
  const { openNavtop } = useContext(AppContext)
  const [headerItems, setHeaderItems] = useState(headerSliderData)
  const [index, setIndex] = useState(0)

  return (
    <header
      style={{
        backgroundImage: `url(${iowaHeaderImg1})`,
      }}
      className={!openNavtop ? 'moveUpHeader' : ''}
    >
      <div className='container header'>
        {/* header text */}
        <div className='header-left'>
          <div className='header-text-main'>
            <div className='header-text-iowa'>
              <h2 className='header-text-title'>
                Are You a School Counselor in Iowa Looking to Renew Your
                License?
              </h2>

              <p className='header-text-desc'>
                Hatching Results courses allow Iowa School Counselors to
                complete one Iowa License Renewal credit per course. Each course
                is approved by the Iowa Board of Educational Examiners through
                the Iowa State Education Association (ISEA) which is a state
                affiliate of the National Education Association (NEA).
              </p>
              <button className={`cta cta-pri iowaBtn`}>explore more</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
