import React from 'react'

const Value = ({ valueImg, valueTitle, valueDesc, colorClass }) => {
  return (
    <div className='value'>
      <img src={valueImg} alt='' className='valueIcon' loading='lazy' />

      <h2 className={`valueTitle ${colorClass ? colorClass : ''}`}>
        {valueTitle}
      </h2>

      <p className='valueDesc'>{valueDesc}</p>
    </div>
  )
}

export default Value
