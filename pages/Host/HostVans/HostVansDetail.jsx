import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import { getVan } from "../../../api";

export default function HostVansDetail() {
  const { id } = useParams();
  const [currentVan, setVan] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mycontext = {
    name: currentVan.name,
    category: currentVan.type,
    description: currentVan.description,
    photos: currentVan.imageUrl,
    price: currentVan.price,
  };
  useEffect(() => {
    async function loadHostVan() {
      setLoading(true);
      try {
        const data = await getVan(id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadHostVan();
  }, []);

  if (loading) return <h1>Loading......</h1>;
  if (error) return <h1>Error occured...{error.statusText}</h1>;
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
        <Outlet context={mycontext} />
      </div>
    </section>
  );
}
