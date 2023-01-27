import React from 'react'

const TeamMember = ({ bgImg, title, subTitle }) => {
  return (
    <div className='teamMember'>
      <div
        className='teamMemberImg'
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>

      <h2 className='memberTitle'>{title}</h2>
      <p className='memberDesc'>{subTitle}</p>
    </div>
  )
}

export default TeamMember
