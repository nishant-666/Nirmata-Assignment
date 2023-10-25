import Pagination from "react-js-pagination";
import "./index.css";

export default function CommonPagination({
  currentPage,
  totalPosts,
  setCurrentPage,
}: Pagination) {
  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <Pagination
      activePage={currentPage}
      itemsCountPerPage={10}
      totalItemsCount={totalPosts}
      pageRangeDisplayed={totalPosts}
      onChange={handlePageChange}
      activeClass="pagination-active"
      innerClass="pagination-button"
    />
  );
}
