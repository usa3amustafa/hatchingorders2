import React from 'react'
import { useState } from 'react'

export const TabbedComponents = ({ currCourse }) => {
  const [active, setActive] = useState('knowledge')

  return (
    <div className='courseDetailsLeftColTabs'>
      <div className='tabsControls'>
        <p
          className={`tabControl ${active === 'knowledge' ? 'active' : ''}`}
          onClick={() => setActive('knowledge')}
        >
          Knowledge
        </p>
        <p
          className={`tabControl ${active === 'skills' ? 'active' : ''}`}
          onClick={() => setActive('skills')}
        >
          Skills
        </p>
        <p
          className={`tabControl ${active === 'attitude' ? 'active' : ''}`}
          onClick={() => setActive('attitude')}
        >
          Attitude
        </p>
        <p
          className={`tabControl ${
            active === 'ade-deficiency' ? 'active' : ''
          }`}
          onClick={() => setActive('ade-deficiency')}
        >
          ADE Deficiency
        </p>
      </div>

      {active === 'attitude' && (
        <ul
          className={`courseDescList ${active === 'attitude' ? 'active' : ''}`}
        >
          {currCourse.attitudes.map((item, i) => {
            return (
              <li key={i} className='courseDescListItem'>
                {item}
              </li>
            )
          })}
        </ul>
      )}

      {active === 'knowledge' && (
        <ul
          className={`courseDescList ${active === 'knowledge' ? 'active' : ''}`}
        >
          {currCourse.knowledge.map((item, i) => {
            return (
              <li key={i} className='courseDescListItem'>
                {item}
              </li>
            )
          })}
        </ul>
      )}

      {active === 'skills' && (
        <ul className={`courseDescList ${active === 'skills' ? 'active' : ''}`}>
          {currCourse.skills.map((item, i) => {
            return (
              <li key={i} className='courseDescListItem'>
                {item}
              </li>
            )
          })}
        </ul>
      )}

      {active === 'ade-deficiency' && (
        <ul
          className={`courseDescList ${
            active === 'ade-deficiency' ? 'active' : ''
          }`}
        >
          {currCourse.adeDeficiency.map((item, i) => {
            return (
              <li key={i} className='courseDescListItem'>
                {item}
              </li>
            )
          })}
          <p>
            For more information visit&nbsp;
            <a href='https://www.azed.gov/' target='_blank' className='link'>
              here
            </a>
          </p>
        </ul>
      )}
    </div>
  )
}
