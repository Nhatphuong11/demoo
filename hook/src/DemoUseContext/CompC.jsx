import React, { useContext } from "react";
import { themeContext } from "./CompA";

function CompC() {


    const theme = useContext(themeContext);
  return (
    <div >
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        incidunt? Ab impedit corrupti totam quos voluptas pariatur placeat eos
        
      </p>
    </div>
  );
}

export default CompC;
