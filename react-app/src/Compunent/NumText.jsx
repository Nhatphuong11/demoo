import React from "react";

function NumText({handleTextChange, text}) {
  return (
    <div>
         <div className="item-textarea">
      <textarea
        className="text"
        name=""
        id=""
        cols="100"
        rows="10"
        value={text}
        onChange={handleTextChange}
      ></textarea>
    </div>
    </div>
  );
}

export default NumText;
