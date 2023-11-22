import React from "react";
import "./PlayerForm.css"
export default function PlayerForm() {
  return (
    <>
      <div id="new-player-div">
        <form id="new-player-form" action="">
            <label htmlFor="playerName">
                Name:
                <input type="text" name="playerName" id="" />
            </label>
            <label htmlFor="playerBreed">
                Breed:
                <input type="playerBreed" name="" id="" />
            </label>
            <select name="playerStatus" id="">
                <option value="bench">Bench</option>
                <option value="field">Field</option>
            </select>
            <label htmlFor="playeImage">
                Player Image:
                <input type="url" name="playerImage" id="" />
            </label>
            <label htmlFor="playerTeam">
                <input type="number" name="playerTeam" id="" />
            </label>
            <input type="submit" value="Create Player" />
        </form>
      </div>
    </>
  );
}
