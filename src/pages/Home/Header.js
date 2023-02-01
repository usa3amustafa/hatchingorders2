import { useState, useEffect } from 'react'
import NavMain from '../../components/Nav/NavMain'
import { headerSliderData } from './homeData'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { Link } from 'react-router-dom'

function Header() {
  const { openNavtop } = useContext(AppContext)
  const [headerItems, setHeaderItems] = useState(headerSliderData)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = headerItems.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, headerItems])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <header
      style={{
        backgroundImage: `url(${
          headerSliderData[index < headerItems.length ? index : 0].bgImg
        })`,
      }}
      className={`header-main ${!openNavtop ? 'moveUpHeader' : ''}`}
    >
      <div className='container header-home'>
        {/* header text */}
        <div className='header-left-home'>
          <div className='header-text-main-home'>
            {headerSliderData.map((item, i) => {
              let position = 'nextSlidehome'
              if (i === index) {
                position = 'activeSlidehome'
              }
              if (
                i === index - 1 ||
                (index === 0 && i === headerItems.length - 1)
              ) {
                position = 'lastSlidehome'
              }
              return (
                <div className={`header-text-home ${position}`} key={item.id}>
                  <h2 className='header-text-title-home'>{item.title}</h2>
                  {item.subTitle && (
                    <h2 className='header-text-subtitle-home'>
                      {item.subTitle}
                    </h2>
                  )}

                  <p className='header-text-desc-home'>{item.desc}</p>
                  <a
                    href={item.subdomain}
                    target='_blank'
                    className={`cta ${item.className}`}
                  >
                    explore more
                  </a>
                </div>
              )
            })}
          </div>
        </div>

        {/* header controls */}
        <div className='header-slider-controls'>
          {headerSliderData.map((item, i) => {
            return (
              <div
                key={item.id}
                className={`header-slider-control ${
                  index === i ? 'active' : ''
                }`}
                onClick={() => setIndex(i)}
              ></div>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Header
