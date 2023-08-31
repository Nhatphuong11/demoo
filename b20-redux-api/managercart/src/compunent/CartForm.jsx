import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { postCars, putCars } from '../redux/cartSlide';

function CartForm({select , setSelect}) {
  const dispatch= useDispatch();
  const [inputFrom, setInputFrom] = useState({
    name: "",
    price: ""
  });
  const {name, price} = inputFrom;
  
  

  const handlechanginput = (e)=>{
    setInputFrom({...inputFrom, [e.target.name]:e.target.value});
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(select){
      dispatch(putCars({inputFrom:inputFrom, id: select.id}));
      setSelect("")
    }else{
      dispatch(postCars(inputFrom));
    }
    setInputFrom({name:"" , price:""});
  };

  useEffect(()=>{
    if(select){
      setInputFrom({
        name:select.name , 
        price:select.price,
      })
    }
  },[select]);
  return (
    <div>
        <h2>cars from</h2>
        <form onSubmit={handleSubmit}>
          <label>name</label>
          <input type='text'         
            value={name}
            name='name'
            onChange={handlechanginput}
          />
          <br />
          <label>price</label>
          <input type='text'
            value={price}
            name='price'
            onChange={handlechanginput}
          />
          <br />
          <button type='submit'>{select ? "update" : "add"}</button>
        </form>
    </div>
  )
}

export default CartForm