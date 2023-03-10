import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.context";
import CheckOutItem from "../../components/checkout-item/CheckOutItem";

import "./checkout.styles.scss";
const CheckoutItem = () => {
  const { cartItems, cartTotal} = useContext(CartContext);
  
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <hr />
      
      {cartItems.map((cartItem) => <CheckOutItem cartItem={cartItem} key={cartItem.id}/>)}
      <span className="total">TOTAL: ${cartTotal}</span>
    </div>
  );
};

export default CheckoutItem;
