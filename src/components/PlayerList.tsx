import useFetchPlayer from "../hooks/useFetchPlayer";

import CommonInput from "./common/CommonInput";
import { useEffect, useState } from "react";
import CommonSelect from "./common/CommonSelect";
import CommonPagination from "./common/Pagination";
import { sortFunction } from "../utils/sortFunction";
import usePaginate from "../hooks/usePaginate";
import PlayerCard from "./PlayerCard";

export default function PlayerList() {
  const [searchInput, setSearchInput] = useState(
    sessionStorage.getItem("searchQuery") || ""
  );
  const [selectedOption, setSelectedOption] = useState("Name");
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  let { playerList, setPlayerList } = useFetchPlayer(searchInput);

  let { currentItems, setCurrentPage, limit, currentPage } = usePaginate(
    playerList as []
  );

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  function sort() {
    let sortResult = sortFunction(selectedOption, playerList);
    setPlayerList(sortResult as []);
  }

  useEffect(() => {
    sort();
    return () => sort();
  }, [selectedOption]);

  return (
    <div className="playerComponent">
      <div className="filter-container">
        <CommonInput
          searchInput={searchInput}
          placeholder="Search for a Player"
          onChange={handleInput}
        />
        <CommonSelect
          selectedOption={selectedOption}
          onChange={handleSelectChange}
        />
      </div>
      <div className="player-list">
        <PlayerCard
          searchInput={searchInput}
          currentItems={currentItems as []}
        />
      </div>

      <div className="mt-5">
        <CommonPagination
          limit={limit}
          totalPosts={playerList.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
