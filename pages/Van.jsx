import React, { useEffect, useState } from "react";
import { useParams,Link, useLocation } from "react-router-dom";

export default function Van(props){
  // console.log(useParams());
  let id=useParams();
  let [vanDetail,setvanDetail] = useState(null)
  
  useEffect(() => {
    const  tid=setTimeout(() => {
      fetch(`/api/vans/${id.id}`)
        .then((res) => res.json())
        .then((data) => setvanDetail(data.vans));
    }, 0);
    return ()=>clearTimeout(tid);
  }, []);
  const locationInfo=useLocation();
  
  return (
    <>
      {vanDetail ? (
        <div className="van-info-container">
          <Link to={locationInfo.state.search?`..${locationInfo.state.search}`:".."}
          relative="path"
          >
            <p className="back">Back to all vans.</p>
          </Link>
          <img src={vanDetail.imageUrl} alt="" />
          <p className={`van-type ${vanDetail.type} van`}>{vanDetail.type}</p>
          <h2 className="van-name">{vanDetail.name}</h2>
          <i>
            ${vanDetail.price}
            <span className="day">/day</span>
          </i>
          <p className="vandetails">{vanDetail.description}</p>
          <p className="rent-btn">Rent This Van</p>
        </div>
      ) : (
        <h2>Loading.....</h2>
      )}
    </>
  );
}