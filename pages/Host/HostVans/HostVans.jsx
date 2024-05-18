import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function HostVans() {
  let [vans,setVans]=useState([])
  useEffect(()=>{
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  },[])

   let vanElements = vans.map((van) => (
     <section key={van.id}>
       <Link to={van.id}>
         <div className="van-item">
           <img src={van.imageUrl} alt="" />
           <div className="info">
             <h3>{van.name}</h3>
             <p>${van.prince}/day</p>
           </div>
         </div>
       </Link>
     </section>
   ));
  return (
    <div className='vans-container'>
    <h1>Your Listed Vans.</h1>
    {vanElements}
    </div>
  )
}
