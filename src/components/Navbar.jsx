import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <h2 className="navbar-brand">DB App</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" activeClassName="active text-white" to="/mans">
                Mans
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" activeClassName="active text-white" to="/womans">
                Womans
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" activeClassName="active text-white" to="/search">
                Search
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
