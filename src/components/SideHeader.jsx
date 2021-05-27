import React, { useState } from "react";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import "../components/SideHeader.css";

const SideHeader = () => {
  const [inMobile, setInMobile] = useState(false);
  return (
    <nav>
      <div
        className="hamburger"
        onClick={() => {
          setInMobile(!inMobile);
        }}
      >
        {inMobile ? <CloseOutlinedIcon /> : <div className="line"></div>}
      </div>
      <div>
        <h2 className="logo">Lorem </h2>
        <h2 id="logo">Ipsum</h2>
      </div>
      <ul
        className={inMobile ? "nav__linksMobile" : "nav__links"}
        onClick={() => {
          setInMobile(false);
        }}
      >
        <li className="nav__items">
          <Link to="" className="nav__active">
            About
          </Link>
        </li>
        <li className="nav__items">
          <Link to="">Services</Link>
        </li>
        <li className="nav__items">
          <Link to="">Cuisine</Link>
        </li>
        <li className="nav__items">
          <Link to="">Gallery</Link>
        </li>
        <li className="nav__items">
          <Link to="">Contact</Link>
        </li>
        <li className="nav__items">
          <Link to="">Book</Link>
        </li>
      </ul>
      <div className="nav__cart">
        <Link to="">Cart</Link>
      </div>
      <ShoppingCartOutlinedIcon className="nav__shoppingCart" />
    </nav>
  );
};

export default SideHeader;
