import React from 'react'

import {useParams} from "react-router-dom";

export default function Home() {
  const { countryCode } = useParams();
  return (
    <div>
      <p>Todo {countryCode}</p>
    </div>
  )
}
