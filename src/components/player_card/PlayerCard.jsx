import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
/*
 *Basic card style player showing basic information
 */
export default function PlayerCard() {
    const [ID,setID] = useState(-1)
  return (
    <div>
      <p>player name</p>
      <img src="./" alt="player image" />
      <Link to={`details/${ID}`}>
        <button type="button">Click Me!</button>
      </Link>
    </div>
  );
}
