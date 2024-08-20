import { memo } from "react";
import { FaSearch } from "react-icons/fa";
import { useFavorite, useMovieDetail, useMovies } from "../../store";
import Logout from "../logout/Logout";
import "./Header.css";

function Header() {
  const { movieDetail } = useMovieDetail();
  const { favorite } = useFavorite();
  const { search, setSearch } = useMovies();

  const dynamicHeader = () => {
    return movieDetail ? (
      <div className="text-2xl f-w-700">{movieDetail.name}</div>
    ) : (
      <div className="search">
        <input
          type="search"
          placeholder="What do you want to watch?"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="search-icon">
          <FaSearch />
        </i>
      </div>
    );
  };

  return (
    <header className="header">
      <Logout />

      {dynamicHeader()}
      <div className="favorites">
        <span className="title">Favoriler</span>
        <span className="f-w-500">{favorite.length}</span>
      </div>
    </header>
  );
}

export default memo(Header);
