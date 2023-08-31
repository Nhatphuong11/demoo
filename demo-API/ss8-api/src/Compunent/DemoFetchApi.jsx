import React, { useEffect, useState } from "react";

function DemoFetchApi() {
  const [dataUser, setDataUser] = useState([]);
  const handleGetFesh = () => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => setDataUser(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => setDataUser(data))
      .catch((err) => console.log(err));
  }, []);

  const person = {
    name: "Nam",
    age: 25,
    address: "HN",
    phone: "083254",
  };

  const handlePostFetch = () => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(person),
    });
  };

  const handlePutFetch = () => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: "dung",
        age: 20,
        address: "hn",
        phone: "43432",
      }),
    });
  };


  const handlePatchFetch = () => {
    fetch("http://localhost:8000/users/6", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: "dung",
        age: 20,
        address: "hn",
        phone: "43432",
      }),
    });
  };

  const handleDeleteFetch = ( )=> {
    fetch("http://localhost:8000/users/8", {
      method: "DELETE",
    })
  }

  return (
    <div>
      <h1>Fetch Api</h1>
      <button onClick={handleGetFesh}>get fest api</button>
      <button onClick={handlePostFetch}>Post Fetch api</button>
      <button onClick={handlePutFetch}>put api</button>
      <button onClick={handlePatchFetch}>patch api</button>
      <button onClick={handleDeleteFetch}>Delete api</button>
      <table border={1} align="center"> 
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {dataUser.map((e, i) => (
            <tr key={i}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.address}</td>
              <td>{e.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DemoFetchApi;
