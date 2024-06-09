import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getVan } from "../api";

export default function Van(props) {
  // console.log(useParams());
  const { id } = useParams();
  const [vanDetail, setvanDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const locationInfo = useLocation();

  useEffect(() => {
    async function loadvan() {
      setLoading(true);
      try {
        const data = await getVan(id);
        // console.log(data);
        setvanDetail(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadvan();
  }, []);

  if (loading) {
    return <h1>Loading.........</h1>;
  }
  if (error) {
    return <h1>There was an error!!{error.statusText}</h1>;
  }
  return (
    <>
      <div className="van-info-container">
        <Link
          to={
            locationInfo.state.search ? `..${locationInfo.state.search}` : ".."
          }
          relative="path"
        >
          <p className="back">
            Back to{" "}
            {locationInfo.state.search !== "?"
              ? `${locationInfo.state.search.slice(6)}`
              : "all"}{" "}
            vans.
          </p>
        </Link>
        {vanDetail && (
          <>
            <img src={vanDetail.imageUrl} alt="" />
            <p className={`van-type ${vanDetail.type} van`}>{vanDetail.type}</p>
            <h2 className="van-name">{vanDetail.name}</h2>
            <i>
              ${vanDetail.price}
              <span className="day">/day</span>
            </i>
            <p className="vandetails">{vanDetail.description}</p>
            <p className="rent-btn">Rent This Van</p>
          </>
        )}
      </div>
    </>
  );
}
