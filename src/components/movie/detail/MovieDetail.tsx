import { useEffect } from "react";
import { FaHeart, FaImdb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useFavorite, useMovieDetail } from "../../../store";
import "./MovieDetail.css";

function MovieDetail() {
  const { movieDetail } = useMovieDetail();
  const { favorite, setFavorite } = useFavorite();
  const navigate = useNavigate();

  const backToListHandler = () => {
    navigate("..");
  };

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

  const countryYear = [movieDetail?.country, movieDetail?.year].join(", ");
  const categories = movieDetail?.categories.join(", ");

  return (
    <div className="detail-container">
      <div className="image-container">
        <img
          width={"100%"}
          src={movieDetail?.contentImage}
          alt={movieDetail?.name}
        />
        <button
          className="fav-button"
          onClick={() => favoriteHandle(movieDetail?.id!)}
          id={movieDetail?.id.toString()}
        >
          <FaHeart />
        </button>
        <button className="back-btn" onClick={backToListHandler}>
          Listeye Geri Dön
        </button>
      </div>
      <span className="text-2xl f-w-500">{movieDetail?.summary}</span>
      <hr />
      <div className="movie-content">
        <span className="imdb">
          <FaImdb color="orange" size={"25px"} />
          {movieDetail?.imdbRate + "/10"}
        </span>
        <span className="categories">
          <small>{categories}</small>
        </span>
        <span className="country-year">
          <small>{countryYear}</small>
        </span>
      </div>
    </div>
  );
}

export default MovieDetail;
