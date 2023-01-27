import cartItemImg from '../../../assets/ourMission.png'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useContext, useState } from 'react'
import AppContext from '../../../context/AppContext'

import { getCourseData } from '../../../coursesData'

const CartItem = () => {
  const { cartProducts, addOneToCart, removeOneFromCart, deleteFromCart } =
    useContext(AppContext)

  const increaseQuantity = id => {
    addOneToCart(id)
  }

  const decreaseQuantity = id => {
    removeOneFromCart(id)
  }

  return (
    <>
      {cartProducts.length > 0 ? (
        cartProducts.map(item => {
          const courseItem = getCourseData(item.id)
          const quantity = item.quantity
          return (
            <div className='cartItem' key={item.id}>
              <div className='cartItemInfo'>
                <div className='cartItemImg'>
                  <img src={cartItemImg} alt='' className='cartItemImgImg' />
                </div>
                <div className='cartItemText'>
                  <h2 className='cartItemTitle'>{courseItem.title}</h2>
                  <p className='cartItemDesc'>{courseItem.title}</p>
                </div>
              </div>
              <div className='cartControls'>
                <button
                  className='cartControlBtn decreaseBtn'
                  onClick={() => decreaseQuantity(courseItem.id)}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <p className='cartQuantityCount'>{quantity}</p>
                <button
                  className='cartControlBtn increaseBtn'
                  onClick={() => increaseQuantity(courseItem.id)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <h2 className='cartPrice'>${courseItem.price * quantity}</h2>

              <button
                className='deleteBtn'
                onClick={() => deleteFromCart(courseItem.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          )
        })
      ) : (
        <h2>Cart is empty</h2>
      )}
    </>
  )
}

export default CartItem
