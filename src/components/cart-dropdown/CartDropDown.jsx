import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
//*STYLES
import "./cart-dropdown.styles.scss";

import CartItem from "../cart-item/CartItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const navigate = useNavigate();
const cartItems = useSelector(selectCartItems)
  const checkOutHandler = () => navigate("/checkout");

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" key={cartItems}>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <span>No items in cart</span>
        )}
      </div>

      <Button onClick={checkOutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
