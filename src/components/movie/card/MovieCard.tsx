import { useEffect } from "react";
import { FaHeart, FaImdb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Movie, useFavorite } from "../../../store";
import "./MovieCard.css";

function MovieCard({ movie }: { movie: Movie.Item }) {
  const { favorite, setFavorite } = useFavorite();

  const favoriteHandle = (id: number): unknown => {
    const el = document.getElementById(id.toString());

    if (favorite.includes(id)) {
      setFavorite([...favorite.filter((t: number) => t !== id)]);
      el?.classList.remove("fav-button-active");
      return;
    }

    setFavorite([...favorite, id]);
    el?.classList.add("fav-button-active");
  };

  useEffect(() => {
    favorite.forEach((id) => {
      document
        .getElementById(id.toString())
        ?.classList.add("fav-button-active");
    });
  });

  const tvSeriesBadge = () => {
    return (
      movie.isTvSeries && <span className="tv-badge f-w-500">TV SERIES</span>
    );
  };

  return (
    <div className="movie-card">
      <div className="image-container">
        <Link to={"/detail/" + movie.id}>
          <img src={movie.coverImage} alt={movie.name} />
        </Link>
        {tvSeriesBadge()}
        <button
          onClick={() => favoriteHandle(movie.id)}
          className="fav-button"
          id={movie.id.toString()}
        >
          <FaHeart />
        </button>
      </div>
      <div className="movie-content">
        <span className="country-year">
          <small>{[movie.country, movie.year].join(", ")}</small>
        </span>
        <span className="f-w-700">{movie.name}</span>
        <span className="imdb">
          <FaImdb color="orange" size={"25px"} />
          {movie.imdbRate + "/10"}
        </span>
        <span className="categories">
          <small>{movie.categories.join(", ")}</small>
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
