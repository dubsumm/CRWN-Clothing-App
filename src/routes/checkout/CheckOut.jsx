import {useContext} from 'react'
import { CartContext } from '../../contexts/Cart.context'
import CheckOutItem from '../../components/checkout-item/CheckOutItem'

import './checkout.styles.scss'
const Cart = () => {

    const {cartItems} = useContext(CartContext)
    const total = cartItems.reduce((acc,el)=> acc+(Number(el.price)*(Number(el.quantity))), 0)
    console.log(total)
  return (
    <div className='checkout-container'>
      <div  className='label-container'>
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      <hr />
        {cartItems.map(item => <CheckOutItem cartItem={item} />)}
    </div>
  )
}

export default Cart