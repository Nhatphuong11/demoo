import React, { useEffect, useState } from "react";
import SlideBar from "./SlideBar";
import { useDispatch, useSelector } from "react-redux";
import { deleteCars, fetchCars } from "../redux/cartSlide";
import CartForm from "./CartForm";

function CartList() {
  const cars = useSelector((state) => state.cars.cars);
  const status = useSelector((state) => state.cars.status);
  const dispatch = useDispatch();
  const [select, setSelect]=useState("");
  const handleEditcar = (car) =>{
    setSelect(car)
  };
  useEffect(() => {
    if (status === "loading") {
      return (<div style={{fontSize:"50px", textAlign:"center"}}>Loading...</div>);
    }
    dispatch(fetchCars());
  }, [dispatch]);


  return (
    <div>
      <SlideBar />
      <h2>Car List</h2>
      <table border={1} align="center" width={"70%"}>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>price</th>
            <th colSpan={2}>Actione</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((element, index) => (
            <tr key={element.id}>
              <td>{index + 1}</td>
              <td>{element.name}</td>
              <td>{element.price}</td>
              <td>
                <button onClick={()=> handleEditcar(element)}>EDIT</button>
              </td>
              <td>
                <button onClick={()=> dispatch(deleteCars(element.id))}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CartForm select={select} setSelect={setSelect}/>
    </div>
  );
}

export default CartList;
