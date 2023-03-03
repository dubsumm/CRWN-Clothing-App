import { useContext } from "react";

import { CartContext } from "../../contexts/Cart.context";
import CheckOutItem from "../../components/checkout-item/CheckOutItem";

import "./checkout.styles.scss";
const CheckoutItem = () => {
  let total = 0;
  const { cartItems,} = useContext(CartContext);
  if (cartItems) {
    total = cartItems.reduce(
      (acc, el) => acc + Number(el.price) * Number(el.quantity),
      0
    );
  }
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
      <span className="total">TOTAL: ${total}</span>
    </div>
  );
};

export default CheckoutItem;
