import React, { useState } from "react";
import ButtonItem from "./Button";
import { Button } from "antd";

import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const name = localStorage.getItem("name");
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          EPIC <i className="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/formm"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
        </ul>
        {name ? (
          <div style={{ display: "flex" }}>
            <p style={{ fontSize: "1rem", color: 'red' }} className="header-name">{name}</p>
            <Button
              type="primary"
              danger
              onClick={() => {
                localStorage.clear();
                window.location.replace("/");
              }}
            >
              Deconnexion
            </Button>
          </div>
        ) : (
          <ButtonItem />
        )}
      </nav>
    </>
  );
}
export default Navbar;
