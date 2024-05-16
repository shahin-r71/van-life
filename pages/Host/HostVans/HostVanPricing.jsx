import React from 'react';
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const {price}=useOutletContext();
  return (
    <section>
    <h4>${price}/day</h4>
    </section>
  )
}
