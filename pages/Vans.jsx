import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans(){
  let [vans,setVans]=useState([]);
  
  let [searchParams,setSearchParams]=useSearchParams();
  let filterParam=searchParams.get("type")

  useEffect(()=>{
    fetch("/api/vans")
    .then(res=>res.json())
    .then(json=>setVans(json.vans))
  },[])

  let filteredVans = vans.filter((van) =>
    filterParam ? van.type == filterParam : van
  );
  

  return (
    <div className="vans-container">
      <div className="filter-btns-container">
        <button onClick={()=>setSearchParams({type:"simple"})}>Simple</button>
        <button onClick={()=>setSearchParams({type:"rugged"})}>Rugged</button>
        <button onClick={()=>setSearchParams({type:"luxury"})}>Luxury</button>
        <button onClick={()=>setSearchParams({})}>Clear Filters</button>
      </div>
      <ul className="list-item-container">
        {filteredVans.map((filteredVan) => (
          <li key={filteredVan.id} className="list-item">
            <Link to={`/vans/${filteredVan.id}`} className="van-link">
              <div className="list-img-container">
                <img
                  src={filteredVan.imageUrl}
                  alt="van image"
                  className="list-img"
                />
              </div>
              <div className="item-info">
                <div>
                  <p>{filteredVan.name}</p>
                </div>
                <div>
                  <p>
                    ${filteredVan.price}
                    <br />
                    <span className="day">/day</span>
                  </p>
                </div>
              </div>
              <p className={`van-type ${filteredVan.type}`}>
                {filteredVan.type}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}