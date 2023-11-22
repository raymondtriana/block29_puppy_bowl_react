import { useState } from "react";
import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import PlayerDetails from "./components/player_details/PlayerDetails";
import Roster from "./components/roster/Roster";
function App() {
  return (
    <div id="container">
      <div id="body">
          <Routes>
            <Route path="/" element={<Roster />} />
            <Route path="/details" element={<PlayerDetails />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
