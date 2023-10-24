import { useState, useEffect } from "react";
import getPlayers from "../API/get-players";

export default function useFetchPlayer() {
  const [playerList, setPlayerList] = useState([]);
  const getPlayerList = async () => {
    let response = await getPlayers();
    setPlayerList(response as []);
  };

  useEffect(() => {
    getPlayerList();
  }, []);
  return { playerList, setPlayerList };
}
