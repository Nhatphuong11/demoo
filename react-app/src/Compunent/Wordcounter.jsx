import React, { useState } from 'react'
import './word.css';
import NumText from './NumText';
import Button from './Button';


function Wordcounter() {

    const [text, setText] = useState("");

    const countWords = (text) => {
      const trimmedText = text.trim();
      if (trimmedText === "") {
        return 0;
      }
      const words = trimmedText.split(/\s+/);
      return words.length;
    };
  
    const countCharacters = (text) => {
      return text.replace(/\s/g, "").length;
    };
  
    const countParagraphs = (text) => {
      const paragraphs = text.split(/\n/);
      return paragraphs.length;
    };
  
    const handleTextChange = (event) => {
      setText(event.target.value);
    };
  
    const handleUppercaseClick = () => {
      const uppercaseText = text.toUpperCase();
      setText(uppercaseText);
    };
  
    const handleLowercaseClick = () => {
      const lowercaseText = text.toLowerCase();
      setText(lowercaseText);
    };
  

  return (
    <div className="container">
    <h2>Word counter</h2>
    <Button countWords={countWords} countCharacters={countCharacters} countParagraphs={countParagraphs} text={text}/>
    <NumText handleTextChange={handleTextChange} text={text}/>
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
  


export default Wordcounter