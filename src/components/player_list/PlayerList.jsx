import React, { useState,useEffect } from 'react'
import PlayerCard from '../player_card/PlayerCard'
/*
*A list of all player cards filtered by search bar
*/
export default function PlayerList(props) {
  const [playerList,setPlayerList] = useState(null)

  useEffect(()=>{
    setPlayerList(props.roster)
  },[props])

  useEffect(()=>{console.log(playerList)},[playerList])

  return (
    <div>
        
        {playerList?(<>
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