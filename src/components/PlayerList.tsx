import useFetchPlayer from "../hooks/useFetchPlayer";
import { calculateAge } from "../utils/calcAge";
import { useNavigate } from "react-router-dom";
import CommonInput from "./common/CommonInput";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import CommonSelect from "./common/CommonSelect";

export default function PlayerList() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("Name");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  let navigate = useNavigate();
  let { playerList, setPlayerList } = useFetchPlayer();
  let { debouncedValue } = useDebounce(searchInput, 1000);
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  function sortFunction() {
    const sortedItems = [...playerList];
    if (selectedOption === "name") {
      sortedItems.sort((a: { name: "" }, b: { name: "" }) => {
        return a.name.localeCompare(b.name);
      });
    }

    if (selectedOption === "age") {
      sortedItems.sort((a: { dob: number }, b: { dob: number }) => {
        return b.dob - a.dob;
      });
    }

    if (selectedOption === "rank") {
      sortedItems.sort((a: { rank: number }, b: { rank: number }) => {
        return a.rank - b.rank;
      });
    }

    setPlayerList(sortedItems);
  }

  useEffect(() => {
    sortFunction();
    return () => sortFunction();
  }, [selectedOption]);

  return (
    <div className="playerComponent">
      <CommonInput placeholder="Search for a Player" onChange={handleInput} />
      <CommonSelect
        selectedOption={selectedOption}
        onChange={handleSelectChange}
      />
      <div className="player-list">
        {debouncedValue.length > 0
          ? playerList
              .filter((item: { name: "" }) =>
                Object.values(item)
                  .join("")
                  .toLowerCase()
                  .includes(debouncedValue.toLowerCase())
              )
              .map(
                (player: {
                  id: "";
                  name: "";
                  type: "";
                  points: "";
                  rank: "";
                  dob: "";
                }) => (
                  <div
                    key={player.id}
                    className="players"
                    onClick={() =>
                      navigate("/player-details", {
                        state: player,
                      })
                    }
                  >
                    <h2>{player.name}</h2>
                    <p>Type: {player.type?.toUpperCase()}</p>
                    <p>Points: {player.points}</p>
                    <p>Rank: {player.rank}</p>
                    <p>Age: {calculateAge(player.dob)}</p>
                  </div>
                )
              )
          : playerList.map(
              (player: {
                id: "";
                name: "";
                type: "";
                points: "";
                rank: "";
                dob: "";
              }) => (
                <div
                  key={player.id}
                  className="players"
                  onClick={() =>
                    navigate("/player-details", {
                      state: player,
                    })
                  }
                >
                  <h2>{player.name}</h2>
                  <p>Type: {player.type?.toUpperCase()}</p>
                  <p>Points: {player.points}</p>
                  <p>Rank: {player.rank}</p>
                  <p>Age: {calculateAge(player.dob)}</p>
                </div>
              )
            )}
      </div>
    </div>
  );
}
