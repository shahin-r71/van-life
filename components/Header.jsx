import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import {logoutUser} from "../api";

export default function Header(){
  
  
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

        <NavLink to="/">
          <button onClick={() => logoutUser()}>X</button>
        </NavLink>
      </nav>
    </header>
  );
}