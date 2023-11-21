import React from 'react'
/**
 * Responsible for filtering the player list 
 */
const filterType = {
    "Exact":0,//will filter for names whose 0-n chars are types
    "Contains":1,//will filter for names that include input string
}
export default function SearchBar() {
  return (
    <div>SearchBar</div>
  )
}