import React, { useEffect, useState } from 'react'
import { useParams,Link, Outlet, NavLink } from 'react-router-dom'


export default function HostVansDetail() {
  const {id}=useParams();
  const [currentVan, setVan] = useState({});
  const mycontext={name:currentVan.name,category:currentVan.type,
    description:currentVan.description,photos:currentVan.imageUrl,price:currentVan.price};
  useEffect(()=>{
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  },[])
  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-detail ${currentVan.type}`}>{currentVan.type}</i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="host-nav">
          <NavLink
            to="."
            className={({ isActive }) => (isActive ? "activeclass" : null)}
          >
            Description
          </NavLink>

          <NavLink
            to="pricing"
            className={({ isActive }) => (isActive ? "activeclass" : null)}
          >
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            className={({ isActive }) => (isActive ? "activeclass" : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={mycontext}/>
      </div>
    </section>
  );
}
