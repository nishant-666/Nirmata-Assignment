import { useLocation, useNavigate } from "react-router-dom";
import { calculateDOB } from "../utils/calculateDob";
import { calculateAge } from "../utils/calcAge";
import { BiArrowBack } from "react-icons/bi";

export default function PlayerDetails() {
  let location = useLocation();
  let navigate = useNavigate();
  let { name, description, points, type, rank, dob } = location.state;

  return (
    <div className="playerDetailsComponent">
      <div className="go-back">
        <BiArrowBack
          size={30}
          className="back-icon"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="player-details-card">
        <h1>Name: {name}</h1>

        <p>{description}</p>

        <p>Points: {points}</p>

        <p>Rank: {rank}</p>

        <p>Type: {type}</p>

        <p>Date of Birth: {calculateDOB(dob)}</p>

        <p>Age: {calculateAge(dob)} Years</p>
      </div>
    </div>
  );
}
