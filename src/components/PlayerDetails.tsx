import { useLocation, useNavigate } from "react-router-dom";
import { calculateDOB } from "../utils/calculateDob";
import { calculateAge } from "../utils/calcAge";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react";
import useFetchPlayer from "../hooks/useFetchPlayer";

export default function PlayerDetails() {
  let { playerList } = useFetchPlayer("");
  let location = useLocation();
  let navigate = useNavigate();
  let { name, description, points, type, rank, dob } = location.state;
  const [simmilarPlayers, setSimmilarPlayers] = useState([]);
  const similarPlayers = () => {
    setSimmilarPlayers(
      playerList.filter(
        (item: { type: "" }) => item.type === type && name !== item.name
      )
    );
  };

  useEffect(() => {
    similarPlayers();

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
                <div className="flex flex-col w-full">
                  <div className="divider"></div>
                </div>
                <p className="player-description">{description}</p>
                <div className="flex flex-col w-full">
                  <div className="divider"></div>
                </div>
                <p>Points: {points}</p>

                <p>Rank: {rank}</p>

                {type ? <p>Type: {type}</p> : <></>}

                <p>{calculateDOB(dob)}</p>

                <p>Age: {calculateAge(dob)} Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {simmilarPlayers.length > 0 ? (
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
                      <div key={player.id} className="">
                        <h2
                          onClick={() =>
                            navigate("/player-details", {
                              state: player,
                            })
                          }
                          className="text-2xl font-bold player-name"
                        >
                          {player.name}
                        </h2>
                        <p>Points: {player.points}</p>
                        <p>Rank: {player.rank}</p>
                        <p>Type: {player.type}</p>
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
      ) : (
        <></>
      )}
    </div>
  );
}
