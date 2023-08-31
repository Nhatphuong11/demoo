import React from 'react'
import Product from './Product'
import CartItem from './CartItem'



function ListProduct() {

    const product = [
        {id:1, name: "sản phẩm 1", price: 2000},
        {id:2, name: "sản phẩm 2", price: 4000},
        {id:3, name: "sản phẩm 3", price: 6000},
    ]

  return (
    <div>
        <h2>Danh Sách Sản Phẩm</h2>
        <div style={{display:"flex", gap:"50px", justifyContent:"center"}}>
            {product.map((item) => (
                <Product key={item.id} item= {item}/>
            ))}
        </div>
        <CartItem />
        
    </div>
  )
}

export default ListProduct