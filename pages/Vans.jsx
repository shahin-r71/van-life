import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vans(){
  let [vans,setVans]=useState([]);

  useEffect(()=>{
    fetch("/api/vans")
    .then(res=>res.json())
    .then(json=>setVans(json.vans))
  },[])
  return (
    <div className="vans-container">
      <ul className="list-item-container">
        {vans.map((van) => (
          <li key={van.id} className="list-item">
            <Link to={`/vans/${van.id}`} className="van-link">
              <div className="list-img-container">
                <img src={van.imageUrl} alt="van image" className="list-img" />
              </div>
              <div className="item-info">
                <div>
                  <p>{van.name}</p>
                </div>
                <div>
                  <p>
                    ${van.price}
                    <br />
                    <span className="day">/day</span>
                  </p>
                </div>
              </div>
              <p className={`van-type ${van.type}`}>{van.type}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}