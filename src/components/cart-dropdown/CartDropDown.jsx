import {useContext} from 'react'
import {CartContext} from '../../contexts/Cart.context'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
//*STYLES
import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/CartItem'

const CartDropdown = () => {

  const {cartItems} = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
       <div className='cart-items' key={cartItems}>
        {cartItems.map(item => <CartItem cartItem={item} key={item.id} />)}
       </div>
      <Link to="/checkout">
        <Button>GO TO CHECKOUT</Button> 
      </Link>
    </div>
  )
}

export default CartDropdown