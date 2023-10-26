import { useState, useEffect } from "react";
import getPlayers from "../API/get-players";
import useDebounce from "../hooks/useDebounce";

export default function useFetchPlayer(searchInput: string) {
  const [playerList, setPlayerList] = useState([]);
  let { debouncedValue } = useDebounce(searchInput, 1000);

  const getPlayerList = async () => {
    let response = await getPlayers();
    let filteredRes = response.filter((item: any) =>
      Object.values(item)
        .join("")
        .toLowerCase()
        .includes(debouncedValue.toLowerCase())
    );

    setPlayerList(filteredRes as []);
  };

  useEffect(() => {
    getPlayerList();
  }, [debouncedValue]);

  return { playerList, setPlayerList };
}
