import React, { useEffect, useState } from "react";
import { getPlayerByID } from "../networking/Networking";
import { useSearchParams } from "react-router-dom";
import "./PlayerDetails.css"
/**
 * A more detailed breakdown of player stats
 */
export default function PlayerDetails(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [player, setPlayer] = useState(null);
  useEffect(() => {
    getPlayerByID(searchParams.get("id"), setPlayer);
  }, [searchParams]);

  useEffect(() => {
    console.log(player);
  }, [player]);

  return (
    <div className="detailed-player-div" >
      {player ? (
        <div className="details-div">
          <div className="detailed-name-div">
            <p className = "detailed-player-name">{player.name}</p>
          </div>
          <img className = "detailed-player-image" src={player.imageUrl} alt="" />
          <button className="detailed-return-button" >Return to roster</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
