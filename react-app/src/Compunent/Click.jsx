import React from "react";

function click() {
  return (
    <div>
      <div className="item-btn">
        <button className="btn" onClick={handleUppercaseClick}>
          Click to Uppercase
        </button>
        <button className="btn" onClick={handleLowercaseClick}>
          Click to Lowercase
        </button>
      </div>
    </div>
  );
}

export default click;
