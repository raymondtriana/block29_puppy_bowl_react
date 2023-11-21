import { useState } from "react";
import "./App.css";
import PlayerCard from "./components/player_card/PlayerCard";
import { Routes, Route,Link } from "react-router-dom";
import PlayerDetails from "./components/player_details/PlayerDetails";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div id="container">
      <div id="navbar">
        <Link to={`details/${count}`}>details</Link>
      </div>
      <div id="body">
        <Routes>
          <Route path="/" element={<PlayerCard />} />
          <Route path="/details" element={<PlayerDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
