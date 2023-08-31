import React, { useState } from "react";
import Product from "./Product";
import "./Product.css";
import Cart from "./Cart";
import { Offcanvas } from "bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from "./redux/cartSlice";
function ListProduct() {
  const [dataProduct, setDataProduct] = useState([
    {
      id: 1,
      name: "ring",
      price: 100,
      image:
        "https://images.unsplash.com/photo-1591209627710-d2427565a41f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "neck",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1620441090373-f6977a23fa0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      name: "bracelet",
      price: 1000,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      name: "ring gold",
      price: 2000,
      image:
        "https://images-ext-1.discordapp.net/external/u26ct-SvZhn-_KPKfxYX02bGTwyzqFKVAke0M4-tPV0/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/698035123773505560/f5a18732d757b21d6f46ac810a36d87d.png?width=320&height=320",
    },
  ]);

  const [cartProduct, setCartProduct] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const cart = useSelector((state)=> state.carts.cartAr);
  const dispatch = useDispatch();

  const handleAddTask = ()=>{
    dispatch(addCart({
      cart:cart,
    }))
  }
  return (
    <div>
      <h1>Shopping Cart</h1>

      <div className='shopping'>
        <i
          className='fa-solid fa-cart-shopping'
          onClick={() => setIsCartOpen(true)}
        ></i>
        <span className='quantity'>{cartProduct.length}</span>
      </div>

      <div>
        <div className='list-product'>
          {dataProduct.map((element, index) => (
              <div className='item' key={index}>
                <img src={element.image} />
                <div className='title'>{element.name}</div>
                <div className='price'>{element.price}</div>
                <button onClick={handleAddTask} >Add To Cart</button>
              </div>
          ))}
        </div>
      </div>

      {isCartOpen && <Cart setIsCartOpen={setIsCartOpen}  handleAddTask={handleAddTask}/>}
    </div>
  );
}

export default ListProduct;
