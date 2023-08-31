import React from 'react'
import { useNavigate } from 'react-router-dom';


function DemoNavigate() {
    const navigte = useNavigate();
  return (
    <div>
        <button onClick={()=>navigte('/contact')}>go to contact</button>
        <button onClick={()=>navigte(-1)}>go back 1 page</button>
        <button onClick={()=>navigte(1)}>go forwand 1 page</button>

        <button onClick={()=>navigte("/about", {replace: true})}>go to about</button>
        <button onClick={()=>navigte("/contact", { state:{count:10}})}>go to</button>
    </div>
    
  )
}

export default DemoNavigate