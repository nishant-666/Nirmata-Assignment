import { useLocation, useNavigate } from "react-router-dom";
import { calculateDOB } from "../utils/calculateDob";
import { calculateAge } from "../utils/calcAge";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import useFetchPlayer from "../hooks/useFetchPlayer";

export default function PlayerDetails() {
  let { playerList } = useFetchPlayer();
  let location = useLocation();
  let navigate = useNavigate();
  let { name, description, points, type, rank, dob } = location.state;
  const [simmilarPlayers, setSimmilarPlayers] = useState([]);
  const similarPlayers = () => {
    let nameFirstChar = name[0];

    setSimmilarPlayers(
      playerList.filter(
        (item: { name: "" }) =>
          item.name[0].toLowerCase() === nameFirstChar.toLowerCase() &&
          name.toLowerCase() !== item.name.toLowerCase()
      )
    );
  };

  useEffect(() => {
    similarPlayers();
  }, [playerList, name]);
  return (
    <div className="playerDetailsComponent">
      <div>
        <div className="go-back">
          <BiArrowBack
            size={30}
            onClick={() => navigate("/")}
            className="back-icon"
          />
        </div>
        <div className="player-details-card">
          <h1>{name}</h1>

          <p>{description}</p>

          <p>Points: {points}</p>

          <p>Rank: {rank}</p>

          <p>Type: {type}</p>

          <p>Date of Birth: {calculateDOB(dob)}</p>

          <p>Age: {calculateAge(dob)} Years</p>
        </div>
      </div>
      <div>
        <h1>Similar Players</h1>
        <div className="similar-players">
          {simmilarPlayers.map(
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
                className=""
                onClick={() =>
                  navigate("/player-details", {
                    state: player,
                  })
                }
              >
                <h2 className="player-name">{player.name}</h2>
                <p>Points: {player.points}</p>
                <p>Rank: {player.rank}</p>
                {simmilarPlayers.length > 1 ? (
                  <hr className="divider" />
                ) : (
                  <></>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
