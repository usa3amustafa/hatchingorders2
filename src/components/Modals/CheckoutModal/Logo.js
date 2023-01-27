import React from 'react'
import logoImg from '../../../assets/hatchfulLogo.webp'

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logoImg} alt='' className='logoImg' loading='lazy' />
    </div>
  )
}

export default Logo
