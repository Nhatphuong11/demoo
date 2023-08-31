import React from "react";

function Button({countWords,countCharacters,countParagraphs, text}) {
  return (
    <div>
      <div className="item-box">
        <div className="item-button">
          <h5>Word</h5>
          <p>{countWords(text)}</p>
        </div>
        <div className="item-button">
          <h5>Letter</h5>
          <p>{countCharacters(text)}</p>
        </div>
        <div className="item-button">
          <h5>Paragraph</h5>
          <p>{countParagraphs(text)}</p>
        </div>
      </div>
    </div>
  );
}

export default Button;
