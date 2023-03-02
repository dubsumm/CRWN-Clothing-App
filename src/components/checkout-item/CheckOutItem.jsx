import React from "react";
import "./checkout-item.styles.scss";

const CheckOutItem = ({ cartItem }) => {
  const {id, name, quantity, price, imageUrl } = cartItem;
  return (
    <div>
      <div className="" key={id}>
        <div className="checkout-details">
          <img src={imageUrl} alt={`${name}`} />
          <span className="name">{name}</span>
          <span className="name">
            <span className="clicker" >{`>`}</span>
            {quantity}
            <span className="clicker" >{`<`}</span>
          </span>

          <span className="price"> ${price}</span>
          <span className="clicker">
            <strong>X</strong>
          </span>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default CheckOutItem;
