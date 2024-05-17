import React from 'react';
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const {photos}=useOutletContext();
  return (
    <section>
      <img src={photos} alt="van photo" style={{width:"100%"}}/>
    </section>
  )
}
