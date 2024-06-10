import React from 'react'
import { Navigate, Outlet,useLocation } from 'react-router-dom';
import {  isLoggedIn } from "./api";

export default function Authenticated() {
   let authenticated = isLoggedIn();
   
   const location =useLocation();
   if (!authenticated) {
     return <Navigate replace to={`/login`} state={{message:"You must log in first!",
      from:location.pathname
     }}/>;
   }
   return <Outlet />
}
