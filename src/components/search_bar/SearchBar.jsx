import React, { useEffect, useState } from "react";
import "./SearchBar.css";
/**
 * Responsible for filtering the player list
 */
const filterType = {
  Exact: 0, //will filter for names whose 0-n chars are types
  Contains: 1, //will filter for names that include input string
};
export default function SearchBar(props) {
  const [search,setSearch] = useState("")

  useEffect(()=>{
    props.setSearch(search)
  },[search])

  return (
    <div id="search-div">
      <div id="inner-search-div">
        <label id="search-label" htmlFor="searchBar">
          Search:
          <input id="search-input" type="text" name="searchBar" onChange={(e)=>{setSearch(e.target.value)}}/>
        </label>
      </div>
    </div>
  );
}
