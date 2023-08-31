import React, { useEffect, useState } from "react";

function DemoUseEffect() {
  const [count, setCount] = useState(10);
  const [text, setText] = useState("hello");
  useEffect(() => {
    console.log("yryryryr");
  },[count, text]);

  return (
    <div>
      <h3>DemoUseEffect</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>up</button>
      <button onClick={() => setCount(count - 1)}>down</button>

      <p>{text}</p>
      <button onClick={() => setText('wellcome to ra')}>Click</button>
    </div>
  );
}

export default DemoUseEffect;
