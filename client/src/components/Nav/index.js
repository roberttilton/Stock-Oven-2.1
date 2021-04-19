import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/stockoven2.2.png"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <Link className="navbar-brand" to="/">
        StockOven
      </Link>
      <img src={Logo} alt="Logo" id="logo"/>
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
