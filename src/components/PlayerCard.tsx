import { calculateAge } from "../utils/calcAge";
import { useNavigate } from "react-router-dom";

export default function PlayerCard({ currentItems }: PlayerCard) {
  let navigate = useNavigate();

  return (
    <>
      {currentItems.map(
        (player: {
          id: "";
          name: "";
          type: "";
          points: "";
          rank: "";
          dob: "";
        }) => (
          <div key={player.id} className="card w-96 card-body">
            <div className="hero">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1
                    onClick={() => {
                      navigate("/player-details", {
                        state: player,
                      });
                    }}
                    className="text-4xl font-bold player-name"
                  >
                    {player.name}
                  </h1>

                  {player.type ? (
                    <p className="py-2 mt-3">Type: {player.type}</p>
                  ) : (
                    <></>
                  )}
                  <p className="py-2">Points: {player.points}</p>
                  <p className="py-2">Rank: {player.rank}</p>
                  <p className="py-2">Age: {calculateAge(player.dob)}</p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
