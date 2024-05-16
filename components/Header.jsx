import React from "react";
import { NavLink,Link } from "react-router-dom";

export default function Header(){

  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "activeclass" : null)} to="/host">Host</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "activeclass" : null)} to="/about">About</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "activeclass" : null)} to="/vans">Vans</NavLink>
      </nav>
    </header>
  );
}