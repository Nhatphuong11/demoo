import React from 'react'
import axios from 'axios';
function DemoAxtrox() {
    const url = "http://localhost:8000/users";
    const handleGetAxios = () =>{  
        axios
        .get(url)
        .then((res)=> console.log(res.data))
        .catch((err)=> console.log(err));
    }
    

    const people = {
        name: "Nam",
        age: 25,
        address: "HN",
        phone: "083254",
      };
    const handlePostAxios = () =>{
        axios.post(url, people);
    }
    const handlePutAxios = () =>{
        axios
        .put(url+ "/1", {
            name: "dung",
            age: 25,
            address: "HN",
            phone: "083254",
        });
    }
    const handlePatchAxios = () =>{
        axios
        .patch(url+ "/3", {
            name: "huy",
            age: 25,
            address: "hcm",
            phone: "08378",
        });
    }   
    const handleDeleteAxios = () =>{
        axios.delete(url+ "/3");
    };

  return (
    <div>
        <h1>demo Axios</h1>
        <button onClick={handleGetAxios}>Get Axios</button>
        <button onClick={handlePostAxios}>post Axios</button>
        <button onClick={handlePutAxios}>put Axios</button>
        <button onClick={handlePatchAxios}>patch Axios</button>
        <button onClick={handleDeleteAxios}>delete Axios</button>
    </div>
  )
}

export default DemoAxtrox