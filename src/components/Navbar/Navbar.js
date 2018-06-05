import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" style={{ color: 'white' }} to="/">
          Pupster
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          <Link to="/" style={{ color: 'white' }}>About</Link >
        </li>
        <li
          className={window.location.pathname === "/discover" ? "active" : ""}
        >
          <Link to="/discover" style={{ color: 'white' }}>Discover</Link>
        </li>
        <li className={window.location.pathname === "/search" ? "active" : ""}>
          <Link to="/search" style={{ color: 'white' }}>Search</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
