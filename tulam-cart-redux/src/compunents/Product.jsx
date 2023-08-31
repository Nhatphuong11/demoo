import React from 'react'
import "./Product.css";
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from "./redux/cartSlice";
function Product({ elementProduct }) {

  const cart = useSelector((state)=> state.carts.cartAr);
  const dispatch = useDispatch();

  const handleAddTask = ()=>{
    dispatch(addCart({
      cart:cart,
    }))
  }
  return (
    <div className='item'>
      <img src={elementProduct.image} />
      <div className='title'>{elementProduct.name}</div>
      <div className='price'>{elementProduct.price}</div>
      <button onClick={handleAddTask} >Add To Cart</button>
    </div>
  );
}

export default Product;
