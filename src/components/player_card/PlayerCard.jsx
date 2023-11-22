import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import "./PlayerCard.css"
import { deletePlayer } from "../networking/Networking";
/*
 *Basic card style player showing basic information
 */
export default function PlayerCard(props) {
    const [player,setPlayer] = useState(null)

    //player data effect
    useEffect(()=>{
      setPlayer(props.data)
    },[props.data])

    function handleDelete(e){
      if(confirm("Are you sure you want to delete: "+player.name+"?")){
        deletePlayer(player.id)
      }
    }
  return (
    <div className="player-div">
      {player?(<>
        <div className="name-div">
        <p className="player-name">{player.name}</p>
        </div>
        <div id="player-delete-div">
          <button id="player-delete-button" onClick={(e)=>{
            handleDelete(e)
          }}>Delete</button>
        </div>
        <div className="image-div">
          <img className = "player-image" src={player.imageUrl} alt="player image" />
        </div>
        <Link className="link" to={`details?id=${player.id}`}>
          <button className="details-button" type="button">Details!</button>
        </Link>
      </>):(<></>)}
    </div>
  );
}
