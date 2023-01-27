import CartItem from './CartItem'

const CartItems = () => {
  return (
    <>
      <div className='cartItemsMain'>
        <h2 className='cartTitle'>Cart</h2>
        <div className='cartItems'>
          <CartItem />
        </div>
      </div>
    </>
  )
}

export default CartItems
