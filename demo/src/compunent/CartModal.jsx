import React from "react";

function CartModal({ closeModal, cartProduct, updateQuantity }) {
  return (
    <div>
      <div>
        <h1>CartModal</h1>
        <button onClick={closeModal}>close</button>
      </div>
      <ul>
        {cartProduct.map((e, i) => (
          <li key={i}>
            <p>
              {e.productName}-{e.price}
              <button onClick={() => updateQuantity(e.id, e.quantity -1)} disabled={e.quantity <=1}>-</button>
              <button>{e.quantity}</button>
              <button onClick={() => updateQuantity(e.id, e.quantity +1)}>+</button>
              <button>delete</button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartModal;
