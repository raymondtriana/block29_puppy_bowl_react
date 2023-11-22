import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
/*
 *Basic card style player showing basic information
 */
export default function PlayerCard(props) {
    const [player,setPlayer] = useState(null)

    //player data effect
    useEffect(()=>{
      console.log(props.data)
      setPlayer(props.data)
    },[props.data])
  return (
    <div>
      {player?(<>
        <p>{player.name}</p>
        <img src={player.imageUrl} alt="player image" />
        <Link to={`details/${player.id}`}>
          <button type="button">Click Me!</button>
        </Link>
      </>):(<></>)}
    </div>
  );
}
