import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { downQuantity, removeItem, upQuantity } from "../redux/cartAction";

function CartItem() {
  const cart = useSelector((state) => state.item);
  const dispatch = useDispatch();
  let totalMoney = 0;
  for (let i = 0; i < cart.length; i++) {
    totalMoney += cart[i].price * cart[i].quantity;
  }
  return (
    <div>
      <h2>Cart Product</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}

            <button
              onClick={() => dispatch(downQuantity(item.id))}
              disabled={item.quantity <= 1}
            >
              -
            </button>
            <span>{item.price * item.quantity}</span>
            <button onClick={() => dispatch(upQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </button>          
          </li>
        ))}
      </ul>
      <p>total: {totalMoney}</p>
    </div>
  );
}

export default CartItem;
