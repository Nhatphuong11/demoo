import React from 'react'
import ChidlrenComp from './ChidlrenComp'

function parentComp() {
    //1 Props la gi?
    // la thu tuyen tu tk compunent cha xuong cac compunet con cua no
    //2 props co the thay doi ko?
    // ko
    //3 tai sao phai su dung props, propor de lam gi? 
    //de truyen du lieu giua cac compunent
    // dieu chinh hoat dong cua component
    //4 cach chuyen props tu cha xuong con
    // vi du:
    // metvcl={metvcl}
    //{props.metvcl}

    const text ="hello world";

    const person ={
        name: "phuong",
        age: 20,
        phone: "0976909192",
        address:"hn"
    }; 
  return (
    <div>
        <h1>truyen props</h1>
        <ChidlrenComp count={10} text={text} person={person}/>
    </div>
  )
}

export default parentComp