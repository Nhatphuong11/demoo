import React, { useState } from "react";
import Cart from "./Cart";

function Product() {
  const [dataProduct, setDataProduct] = useState([
    {
      id: 1,
      title: "ring",
      price: 100,
      image:
        "https://images.unsplash.com/photo-1591209627710-d2427565a41f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      title: "neck",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1620441090373-f6977a23fa0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      title: "bracelet",
      price: 1000,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      title: "ring gold",
      price: 2000,
      image:
        "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
  ]);


  const [toggle , setToggle] = useState(false);
  const handToggle = ()=>{
    setToggle(!toggle)
  }
  
  return (
    <div>
        <h1>cart</h1>
        <p style={{color:"pink"}} onClick={handToggle}><i class="fa-solid fa-cart-shopping"></i></p>
        <div style={{display:"flex" , justifyContent:"space-around", }}>
            {dataProduct.map((e, i) => (
            <div key={i} >
                <img
                style={{ width: "250px", height: "130px" }}
                src={e.image}
                alt=""
                />
                <p>{e.id}</p>
                <p>{e.title}</p>
                <p>{e.price}$</p>
                <button>mua me di</button>
            </div>
            ))}
        </div>

        {toggle && <Cart/>}
    </div>

             
  );
}

export default Product;
