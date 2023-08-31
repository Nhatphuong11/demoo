import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { act_count_ramdom } from '../redux/action';

function ListComp() {
    const list = useSelector((state)=>state.list);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>ListComp</h1>
        <p>{list.toString()}</p>
        <button onClick={() => dispatch(act_count_ramdom())}>ramdom</button>
    </div>
  )
}

export default ListComp