import React from "react";
import { NavLink, Outlet } from "react-router-dom";


export default function HostLayout(){

  return (
    <>
      <nav className="host-nav">
        <NavLink
          to="."
          className={({ isActive }) => (isActive ? "activeclass" : null)}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="income"
          className={({ isActive }) => (isActive ? "activeclass" : null)}
        >
          Income
        </NavLink>

        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? "activeclass" : null)}
        >
          Vans
        </NavLink>

        <NavLink
          to="review"
          className={({ isActive }) => (isActive ? "activeclass" : null)}
        >
          Review
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}