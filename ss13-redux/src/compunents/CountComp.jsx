import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { act_count_down, act_count_up } from '../redux/action';


function CountComp() {
    const count = useSelector((state)=>state.count);
    const dispatch = useDispatch();
    
  return (
    <div>
        <h1>Count componets</h1>
        <p>{count}</p>
        <button onClick={() => dispatch(act_count_down(10))}>Down</button>
        <button onClick={() => dispatch(act_count_up(10))}>Up</button>
    </div>
  )
}

export default CountComp