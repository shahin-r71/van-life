import React from 'react'
import { Navigate, Outlet,useLocation } from 'react-router-dom';

export default function Authenticated() {
   let authenticated = localStorage.getItem("loggedIn");
   
   const location =useLocation();
   if (!authenticated) {
     return <Navigate replace to={`/login`} state={{message:"You must log in first!",
      from:location.pathname
     }}/>;
   }
   return <Outlet />
}
