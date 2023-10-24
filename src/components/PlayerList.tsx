import useFetchPlayer from "../hooks/useFetchPlayer";
import { calculateAge } from "../utils/calcAge";
import { useNavigate } from "react-router-dom";
import CommonInput from "./common/CommonInput";
import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function PlayerList() {
  const [searchInput, setSearchInput] = useState("");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  let navigate = useNavigate();
  let { playerList } = useFetchPlayer();
  let { debouncedValue } = useDebounce(searchInput, 1000);

  return (
    <div className="playerComponent">
      <CommonInput placeholder="Search for a Player" onChange={handleInput} />
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
