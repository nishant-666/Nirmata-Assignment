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
            style={{
              color: "white",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "24px",
            }}
          />
        </div>
        <div className="card w-96 card-body">
          <div className="hero">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-4xl font-bold player-name">{name}</h1>

                <p className="py-2 mt-3">{description}</p>

                <p className="py-2">Points: {points}</p>

                <p className="py-2">Rank: {rank}</p>

                <p className="py-2">Type: {type?.toUpperCase()}</p>

                <p className="py-2">{calculateDOB(dob)}</p>

                <p className="py-2">Age: {calculateAge(dob)} Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold player-name">
                Similar Players
              </h1>

              <div className="similar-players mt-5">
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
                      <h2 className="text-2xl font-bold player-name">
                        {player.name}
                      </h2>
                      <p>Points: {player.points}</p>
                      <p>Rank: {player.rank}</p>
                      {simmilarPlayers.length > 1 ? (
                        <div className="flex flex-col w-full">
                          <div className="divider"></div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
