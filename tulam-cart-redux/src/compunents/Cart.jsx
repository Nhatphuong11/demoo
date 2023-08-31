import React from "react";
import "./Cart.css";

function Cart({ setIsCartOpen, handleAddTask }) {
  return (
    <div className="cart">
      <h1>Cart</h1>
      <ul className="listCart"></ul>
      <div className="check-out">
        <div className="total">0</div>
        <div className="closeShopping" onClick={() => setIsCartOpen(false)}>
          Close
        </div>
      </div>
    </div>
  );
}

export default Cart;
