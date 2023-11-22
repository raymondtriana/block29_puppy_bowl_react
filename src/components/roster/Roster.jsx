import React, { Component, useEffect, useState } from "react";
import SearchBar from "../search_bar/SearchBar";
import PlayerList from "../player_list/PlayerList";
import PlayerForm from "../player_form/PlayerForm";
import { getAllPlayers } from "../networking/Networking";
export default function () {
  const [players, setPlayers] = useState({});
  const [playerList, setPlayerList] = useState(null);
  const [search, setSearch] = useState(null);
  //INIT Effect
  useEffect(() => {
    async function init() {
      await getAllPlayers(setPlayers);
    }
    init();
  }, []);

  //players Effect
  useEffect(() => {
    async function init() {
      if (players.data != undefined) setPlayerList(players.data.players);
    }
    init();
  }, [players]);

  //search Effect
  useEffect(()=>{
  },[search])
  //useEffect(()=>{console.log(playerList)},[playerList])
  return (
    <div>
      <SearchBar setSearch={setSearch}/>
      <PlayerForm />
      {playerList ? (
        <>
          <PlayerList roster={playerList} search={search} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
