import React, { useState,useEffect } from 'react'
import PlayerCard from '../player_card/PlayerCard'
import "./PlayerList.css"
/*
*A list of all player cards filtered by search bar
*/
export default function PlayerList(props) {
  const [playerList,setPlayerList] = useState(null)

  useEffect(()=>{
    setPlayerList(props.roster)
  },[props])

  useEffect(()=>{},[playerList])

  return (
    <div className='player-list'>
        {playerList && props.search !== ""?(<>
        {playerList.map((player)=>{
          if(player.name.includes(props.search))
        
          return <PlayerCard key={player.id} data={player}/>

        })}
        </>):(<p>a</p>)}
        
        {playerList && props.search == ""?(<>
        {playerList.map((player)=>{
          return <PlayerCard key={player.id} data={player}/>
        })}
        </>):(<p>a</p>)}
        <PlayerCard/>
    </div>
  )
}
/*
{
props.players !== undefined && props.players.data!==undefined && props.players.data.players !== undefined ? (<>
{
  props.players.data.players.map((player)=>{
    return <p key={player.id}>{player.name}</p>
  })
}
</>) : (<></>)
}*/