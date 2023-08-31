import React, { createContext, useState } from 'react'
import CompB from './CompB';
import "./CompA.css"

//2.1 tao ngu canh
export const themeContext = createContext();


function CompA() {
    //1.ko su dung usecontext
    const[theme, settheme] = useState("light");
    const handleChangTheme =() =>{
        settheme(theme === "light" ? "dark" : "light") ;
    }


    //2.su dung usecontext

    
  return (
    <div>
        <h3>CompA</h3>
        {/* //th1
        <button onClick={handleChangTheme}>click</button>
        <CompB theme={theme}/> */}
        {/* {th2} */}
        <themeContext.Provider value={theme}>
            <button onClick={handleChangTheme}>click</button>
            <CompB/>
        </themeContext.Provider>
    </div>
  )
}

export default CompA