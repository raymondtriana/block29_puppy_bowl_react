import React, { useEffect, useState } from "react";
import { getPlayerByID } from "../networking/Networking";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./PlayerDetails.css";
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
  }, [player]);

  return (
    <div className="detailed-player-div">
      {player ? (
        <div className="details-div">
          <div className="detailed-name-div">
            <p className="detailed-player-name">{player.name}</p>
          </div>
          <img className="detailed-player-image" src={player.imageUrl} alt="" />
          <div className="detailed-stats-div">
            <p>{">"}{player.name}</p>
            <p>{">"}{player.breed}</p>
            <p>{">"}{player.status}</p>
          </div>
          <Link className="link" to="/">
            <button className="detailed-return-button" type="button">
              Return
            </button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
