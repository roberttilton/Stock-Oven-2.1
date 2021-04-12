import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        StockOven
      </Link>

      <Link className="nav-link" to="/home">
        Home
      </Link>

      <Link className="nav-link" to="/detail">
        Detail
      </Link>
      
    </nav>
  );
}

export default Nav;
