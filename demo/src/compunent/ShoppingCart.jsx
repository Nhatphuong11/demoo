import React, { useState } from 'react'
import Product from './Product'
import CartModal from './CartModal';

function ShoppingCart() {
    const[dataProduct, setDataProduct] = useState([
        {id:1, productName:"ao thun", price: 50},
        {id:2, productName:"ao dai", price: 50},
        {id:3, productName:"ao da", price: 50},
    ])


    const [cartProduct, setCartProduct] = useState([]);
    const addTocart = (product)=>{
        const existingProduct = cartProduct.find((item) => item.id === product.id);
        if (existingProduct){
            existingProduct.quantity += 1;
            setCartProduct([...cartProduct]);
        }else{
            setCartProduct([...cartProduct, {...product, quantity: 1}]);
        }
    }
    
    const[isCartMoldalOpen, setIsCartMoldalOpen] = useState(false);

    const closeModal = () => {
        setIsCartMoldalOpen(false);
    }

    const updateQuantity =(itemID, newQuantity) => {
        if(newQuantity >= 1){
            const editQuantity = cartProduct.map((e)=>e.id === itemID ? {...e, quantity: newQuantity}:e);
            setCartProduct(editQuantity);
        }
    }

  return (
    <div>
        <h3>ShoppingCart</h3>
        <div>
            <h1>san pham</h1>
            <ul>
                {dataProduct.map((element, index)=> (
                    <li key ={index}>
                        <Product elementProduct={element} addTocart={addTocart}/>
                        
                    </li>
                ))}
            </ul>
        </div>
        {/* set lai*/ }
        <div onClick={()=>setIsCartMoldalOpen(true)}>gio hang {cartProduct.length}</div>
        {isCartMoldalOpen && <CartModal closeModal={closeModal} cartProduct={cartProduct} updateQuantity={updateQuantity}/>}
    </div>
  )
}

export default ShoppingCart