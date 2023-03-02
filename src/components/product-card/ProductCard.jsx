//*React
import { useContext } from 'react'
//*STYLES
import './product-card.styles.scss'
//*COMPONENTS
import Button from '../button/Button'
import {CartContext}  from '../../contexts/Cart.context'

const ProductCard = ({product}) => {
    const{addItemToCart}= useContext(CartContext)
    const {name, price, imageUrl} = product

    const addToCart = () => addItemToCart(product)


    
   return ( <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addToCart} >Add to cart</Button>
    </div>
   )
}
export default ProductCard