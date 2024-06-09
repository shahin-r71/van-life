import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../../api";

export default function HostVans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadHostVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadHostVans();
  }, []);

  let vanElements = vans.map((van) => (
    <section key={van.id}>
      <Link to={van.id}>
        <div className="van-item">
          <img src={van.imageUrl} alt="" />
          <div className="info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    </section>
  ));

  if (loading) return <h1>Loading.....</h1>;
  if (error) return <h1>Error....{error.statusText}</h1>;
  return (
    <div className="vans-container">
      <h1>Your Listed Vans.</h1>
      {vanElements}
    </div>
  );
}
