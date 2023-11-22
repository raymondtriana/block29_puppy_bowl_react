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
      setPlayer(props.data)
    },[props.data])
  return (
    <div className="player-div">
      {player?(<>
        <div className="name-div">
        <p className="player-name">{player.name}</p>
        </div>
        <div className="image-div">
          <img className = "player-image" src={player.imageUrl} alt="player image" />
        </div>
        <Link className="link" to={`details?id=${player.id}`}>
          <button className="details-button" type="button">Click Me!</button>
        </Link>
      </>):(<></>)}
    </div>
  );
}
