import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import "./PlayerCard.css"
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
    <div className="player-div">
      {player?(<>
        <p className="player-name">{player.name}</p>
        <img className = "player-image" src={player.imageUrl} alt="player image" />
        <Link to={`details/${player.id}`}>
          <button className="details-button" type="button">Click Me!</button>
        </Link>
      </>):(<></>)}
    </div>
  );
}
