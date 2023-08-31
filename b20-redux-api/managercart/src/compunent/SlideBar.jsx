import React from 'react';
import { Link } from "react-router-dom";
function SlideBar() {
  return (
    <div>
        <ul>
            <li>
                <Link to={"/admin"}>home</Link>
            </li>
            <li>
                <Link to={"/admin/cars"}>manager cart</Link>
            </li>
        </ul>
        
    </div>
  )
}

export default SlideBar