import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";

export default function Header(){
  
  function fakeLogOut(){
    localStorage.removeItem("loggedIn");
  }
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav className="header-nav">
        <NavLink
          className={({ isActive }) => (isActive ? "activeclass" : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeclass" : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeclass" : null)}
          to="/vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeclass" : null)}
          to="/login"
        >
          <img className="user-img" src={`assets/images/propic.png`} alt="" />
        </NavLink>
        
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
}