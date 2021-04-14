import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbarr = () => {
  return (
    <header className="nav-header">
      <div className="logo">
        <img src="/Logo192.png" alt="" />
        <div className="search">
          <input type="search" className="input-search" />
          <button className="button-search">Search</button>
        </div>
        <div className="nav-link">
          <a href="" className="link">
            Home
          </a>
          <a href="" className="link">
            <Link to="/login" className="link">
              Login
            </Link>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbarr;
