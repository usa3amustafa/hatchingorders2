import { useState, useEffect } from 'react'
import NavMain from '../../components/Nav/NavMain'
import { headerSliderData } from './homeData'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import arizonaHeaderImg1 from '../../assets/arizonaHeader1.png'

function Header() {
  const { openNavtop } = useContext(AppContext)
  const [headerItems, setHeaderItems] = useState(headerSliderData)
  const [index, setIndex] = useState(0)

  return (
    <header
      style={{
        backgroundImage: `url(${arizonaHeaderImg1})`,
      }}
      className={`header-arizona ${!openNavtop ? 'moveUpHeader' : ''}`}
    >
      <div className='container header'>
        {/* header text */}
        <div className='header-left'>
          <div className='header-text-main'>
            <div className='header-text-arizona'>
              <h2 className='header-text-title'>
                Are You a School Counselor in Arizona Looking to Renew Your
                License?
              </h2>

              <p className='header-text-desc'>
                Hatching Results partners with California State University San
                Marcos (CSUSM) to offer courses for school counselors for
                continued education. These courses allow Arizona School
                Counselors to complete the 6 semester (credit) hour deficiency
                to renew their certificates in the three-year window who apply
                for certification under options B, C, and D.
              </p>
              <a
                href='https://www.azed.gov/'
                target='_blank'
                className={`cta cta-pri arizonaBtn`}
              >
                explore more
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
