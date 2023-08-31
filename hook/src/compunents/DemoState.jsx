import React, { useState } from 'react'

function DemoState() {
    // useState là một hook được cung cấp và tích hợp sẵn trong react 
    // Sử dụng để lưu trữ dữ liệu trong component 

    // Cú pháp
        // const [nameState, setNameState] = useState(0);
    // Trong đó 
        // nameState = là tên state
        //  setNameState: là tên hàm dùng để set lại giá trị cho state
        //  0: là giá trị khởi tạo ban đầu => nameState = 0

    const [count,setCount] = useState(0)
   
    // 4 Các kiểu dữ liệu 
    // 4.1 : Kiểu dữ liệu nguyên thuỷ
    // String

    const [text, setText] = useState("Hello")

    const handleChangeText = () => {
        setText("Rikkei")
    }

    // 4.2 : Kiểu dữ liệu tham chiếu
    // Array

    const [arrNumber, setArrNumber] = useState([1,2,3,4,5])

    const handleRandom = () => {
        setArrNumber([...arrNumber, Math.floor(Math.random()*10)]);
    }

    // Object
    const [objList, setObjList] = useState({
        objNumber: 0,
        objArr: [1,2,3,4,5]
    })

    const HandleRamdomObj = () => {
        setObjList({
            ...objList,
            objArr:[...objList.objArr, Math.floor(Math.random()*10) ]
        })
    }

    //Array + Object (Json)
    const [data, setData] = useState([
        {id:1, student: "phuong", age: "20"},
        {id:2, student: "phuong1", age: "21"},
        {id:3, student: "phuong2", age: "22"},
    ])


  return (
    <div>
        <h1>DemoState</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Up</button>
        <button onClick={() => setCount(count - 1)}>Down</button>

        <h4>String</h4>
        <p>{text}</p>
        <button onClick={handleChangeText}>Change</button>

        <h4>Array</h4>
        <p>{arrNumber.join()}</p>
        <button onClick={handleRandom}>Random</button>

        <h5>Object</h5>
        <p>{objList.objNumber}</p>
        <button onClick={() => setObjList({
            ...objList,
            objNumber: objList.objNumber +1})}>
            Up count in obj
        </button>
        <p>{objList.objArr.toString()}</p>
        <button onClick={HandleRamdomObj}>ramdomObj</button>


        <h5>aray+obj </h5>
        <table  border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {data.map((element, index) =>(
                    <tr key={index}>
                        <td>{element.id}</td>
                        <td>{element.student}</td>
                        <td>{element.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default DemoState