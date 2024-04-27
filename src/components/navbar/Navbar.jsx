import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container navbar">
      <Link to={"/"}>
        <img src={logo} width={300} alt="" />
      </Link>
      <ul>
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
