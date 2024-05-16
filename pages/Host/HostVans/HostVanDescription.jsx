
import React from 'react';
import { useOutletContext } from "react-router-dom";

export default function HostVanDescription() {
  const { name, category, description } = useOutletContext();
  return (
    <section>
      <h1>{name}</h1>
      <h2>{category}</h2>

      <p>{description}</p>

    </section>
  )
}
