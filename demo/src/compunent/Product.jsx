import React from 'react'

function Product({elementProduct, addTocart}) {
  return (
    <div>
        <h3>{elementProduct.productName}</h3>
        <p>{elementProduct.price}</p>
        <button onClick={() => addTocart(elementProduct)}>add to cart</button>
    </div>
  )
}

export default Product