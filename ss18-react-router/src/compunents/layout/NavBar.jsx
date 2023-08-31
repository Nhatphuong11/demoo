import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <div className="nav">
        <ul className="nav-list">
          <Link to={"/"}>
            <li className="nav-item">home</li>
          </Link>
          <Link to={"/about"}>
            <li className="nav-item">About</li>
          </Link>
          <Link to={"/contact"}>
            <li className="nav-item">Contact</li>
          </Link>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">dang nhap</li>
          <li className="nav-item">dang ky</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
