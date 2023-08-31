import React, { useRef, useState } from "react";

function DemoRef() {
  //usefel la 1 ref duoc cung cap se tra ve doi tuong co key la current
  const [count, setCount] = useState(60);

  let timer = useRef();
  const handleStart = () => {
    timer = setInterval(() => setCount((pre) => pre - 1), 1000);
  };

  const handleStop = () => {
    clearInterval(timer);
  };

  return (
    <div>
      <h3>DemoRef</h3>
      <p>{count}</p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </div>
  );
}

export default DemoRef;
