import React, { useEffect, useState } from "react";
import { postPlayer } from "../networking/Networking";
import "./PlayerForm.css"
export default function PlayerForm() {
    const [formData,setFormData] = useState(null)
    useEffect(()=>{
        postPlayer(formData)
    },[formData])

    function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form)
        console.log(data.get("playerStatus"))
        const dataParsed = {
            name:data.get("playerName"),
            breed:data.get("playerBreed"),
            status:data.get("playerStatus"),
            image:data.get("playerImage"),
            teamId:data.get("playerTeam")
        }
        setFormData(dataParsed)
    }

  return (
    <>
      <div id="new-player-div">
        <form id="new-player-form" action="" onSubmit={(e)=>{
            e.preventDefault();
            handleSubmit(e)
            }}>
            <label htmlFor="playerName">
                Name:
                <input type="text" name="playerName" id="" required={true} defaultValue="Mike"/>
            </label>
            <label htmlFor="playerBreed">
                Breed:
                <input type="text" name="playerBreed" id="" required={true} defaultValue=""/>
            </label>
            <select name="playerStatus" id="">
                <option value="bench">Bench</option>
                <option value="field">Field</option>
            </select>
            <label htmlFor="playerImage">
                Player Image:
                <input type="url" name="playerImage" id="" required={true} defaultValue={"https://media1.popsugar-assets.com/files/thumbor/mUZ977RMh-0DQOFr-DzqhzfMfQY=/0x159:2003x2162/2011x2514/filters:format_auto():quality(85):extract_cover()/2019/08/07/875/n/24155406/9ffb00255d4b2e079b0b23.01360060_.jpg"}/>
            </label>
            <label htmlFor="playerTeam">
                <input type="number" name="playerTeam" id="" defaultValue="1"/>
            </label>
            <input type="submit" value="Create Player" />
        </form>
      </div>
    </>
  );
}
