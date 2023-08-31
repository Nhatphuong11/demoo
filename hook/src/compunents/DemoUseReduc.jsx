import React, { useReducer } from "react";

function DemoUseReduc() {
  // useReducer la 1 hook dc cung cap boi react duoc su dung de thay the useState
  // useState dung cho nhung component don gian
  // useReducer cung cap phuc tap
  // vi du: tang giam cout
  const initalState = 0;

  const ACI_UP = "ACI_UP";
  const ACI_DOWN = "ACI_DOWN";
  const ACI_RANDOM = "ACI_RANDOM";



  const reducer = (state, action) => {
    switch (action) {
      case ACI_UP:
        return state + 1;
      case ACI_DOWN:
        return state - 1;
      case ACI_RANDOM:
        return Math.floor(Math.random() *10);  
      default:
        break;
    }
  };

  const [count, dispatch] = useReducer(reducer, initalState);

  return (
    <div>
      <h3>DemoUseReduc</h3>
      <p>{count}</p>
      <button onClick={() => dispatch(ACI_UP)}>up</button>
      <button onClick={() => dispatch(ACI_DOWN)}>down</button>
      <button onClick={() => dispatch(ACI_RANDOM)}>ramdom</button>
    </div>
  );
}

export default DemoUseReduc;
