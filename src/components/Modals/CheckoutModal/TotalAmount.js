import { useState, useContext } from 'react'
import AppContext from '../../../context/AppContext'

const TotalAmount = () => {
  const { getTotalCost, cartProducts } = useContext(AppContext)
  return (
    <div className='totalAmount'>
      <p className='totalAmountSubtitle'>Order Total</p>
      <h2 className='totalAmountNumber'>${getTotalCost().toFixed(2)}</h2>
    </div>
  )
}

export default TotalAmount
