import { useState } from "react";

export default function usePaginate(playerList: []) {
  let limit = 10;
  const [currentPage, setCurrentPage] = useState(1);

  let lastIndex = currentPage * limit;
  let firstIndex = lastIndex - limit;

  let currentItems = playerList.slice(firstIndex, lastIndex);
  return { currentItems, setCurrentPage, limit, currentPage };
}
