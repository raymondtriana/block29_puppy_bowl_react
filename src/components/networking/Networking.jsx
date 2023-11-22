/**
 * Library component to centralize networking commands to the db
 */
const BASE_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-FTB-MT-WEB-PT/";
export const getAllPlayers = async function (setter) {
  try {
    const response = await fetch(BASE_URL + "players");
    const result = await response.json();
    setter(result);
    return result;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
    return {};
  }
};
export default getAllPlayers;

export const getPlayerByID = async function (id, setter) {
  console.log(id);
  try {
    const response = await fetch(BASE_URL + "players/" + id);
    const result = await response.json();
    //console.log(result.data.player)
    setter(result.data.player)
  } catch (error) {
    console.log(error);
  }
};

export const updatePlayer = function (id, data) {};

export const postPlayer = function (data) {};

export const deletePlayer = function (id) {};
