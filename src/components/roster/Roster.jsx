import React, { Component, useEffect, useState } from "react";
import SearchBar from "../search_bar/SearchBar";
import PlayerList from "../player_list/PlayerList";
import { getAllPlayers } from "../networking/Networking";
export default function () {
  const [players, setPlayers] = useState({});
  const [playerList, setPlayerList] = useState(null);
  //INIT Effect
  useEffect(() => {
    async function init() {
      await getAllPlayers(setPlayers);
    }
    init();
  }, []);

  //players Effect
  useEffect(() => {
    async function init(){
      if (players.data != undefined)
        setPlayerList(players.data.players)
    }
    init()
  }, [players]);
  //useEffect(()=>{console.log(playerList)},[playerList])
  return (
    <div>
      <SearchBar />
      {playerList? (
        <>
          <PlayerList roster={playerList} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
