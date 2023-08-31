import React from 'react'
import { useSearchParams } from 'react-router-dom';

function Course() {
  const [searhParams, setSearchParams]= useSearchParams();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Course Name</th>
            <th>Price</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>phuong</td>
            <td>1000</td>
            <td>
             <button onClick={()=>setSearchParams({courseName: "reactjs" , price: "1200"})}>detail</button> 
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>java</td>
            <td>1000</td>
            <td>
             <button onClick={()=>setSearchParams({courseName: "react" , price: "1200"})}>detail</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h1>chi tiet khoa hoc</h1>
      <p>khoa hoc ten:{searhParams.get("courseName")} - gia tien: {searhParams.get('price')}</p>
    </div>
  )
}

export default Course