import React, { useState } from 'react'




//c1: su dung tu khoa props de nhan duoc props tu compent cha 
//c2 su dung detructering de phan ra
function ChidlrenComp({ count, text , person}) {

    //c1
    // console.log(props.count);
    // console.log(props.text);
    //c2

    //1 state là gì
    //State là một đối tượng React tích hợp được sử dụng để chứa dữ liệu
    //2
    // có / setstate
    //3 cách khai báo state
    //cosnt [nameState ,setNameState] = useState(initialState)
    //4 phạm vị state
    //chỉ tồn tại và được quản lý bởi 1 compunet => local scope / function scope
    // thuc hanh
    const [greeting, setGreeting] = useState("hello world");
    const [counts, setCount] = useState(0);


    function increment() {
      setCount(counts + 1);
    }
  
  
    function decrement() {
      setCount(counts - 1);
    }
    
  return (
    <div>
        <h1>ChidlrenComp</h1>
        <p>{greeting}</p>
        <button onClick={()=> setGreeting("metvcl")}>chang state</button>
        <p>Count: {counts}</p>
        <button onClick={increment}>up</button>
        <button onClick={decrement}>down</button>
        <p>ten: {person.name} tuoi: {person.age} phone: {person.phone} address: {person.address}</p>
    </div>
  )
}

export default ChidlrenComp