import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../api";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let [searchParams, setSearchParams] = useSearchParams();
  let filterParam = searchParams.get("type");

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans("/api/vans");
        setVans(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  let filteredVans = vans.filter((van) =>
    filterParam ? van.type == filterParam : van
  );

  function setfilterparams(key, value) {
    setSearchParams((prev) => {
      if (value === null) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return prev;
    });
  }

  if (loading) {
    return <h1>Loading.......</h1>;
  }
  if (error) {
    return <h1>There was an error!!!{error.statusText}</h1>;
  }
  if (filteredVans.length < 1) return <h1>No van matched!!</h1>;
  return (
    <div className="vans-container">
      <div className="filter-btns-container">
        <button onClick={() => setfilterparams("type", "simple")}>
          Simple
        </button>
        <button onClick={() => setfilterparams("type", "rugged")}>
          Rugged
        </button>
        <button onClick={() => setfilterparams("type", "luxury")}>
          Luxury
        </button>
        {filterParam ? (
          <button onClick={() => setfilterparams("type", null)}>
            Clear Filters
          </button>
        ) : null}
      </div>
      <ul className="list-item-container">
        {filteredVans.map((filteredVan) => (
          <li key={filteredVan.id} className="list-item">
            <Link
              to={filteredVan.id}
              state={{ search: `?${searchParams.toString()}` }}
              className="van-link"
            >
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
