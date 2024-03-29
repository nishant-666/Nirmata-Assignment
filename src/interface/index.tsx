interface CommonInput {
  placeholder: string;
  searchInput: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface CommonSelect {
  selectedOption: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface Pagination {
  currentPage: number;
  limit: number;
  totalPosts: number;
  setCurrentPage: Function;
}

interface PlayerCard {
  searchInput: string;
  currentItems: [];
}
