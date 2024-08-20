import { lazy, Suspense } from "react";
import { FaSlidersH, FaSortAlphaUp } from "react-icons/fa";
import { useMovies } from "../../../store";
import "./MovieList.css";
import ListAction from "./components/ListAction";

const MovieCard = lazy(() => import("../card/MovieCard"));

function MovieList() {
  const { movies } = useMovies();

  const sortLabels = [
    { text: "Film Adı", param: "_sort=name&_order=asc" },
    {
      text: "Yayın Yılı",
      param: "_sort=year&_order=desc",
    },
    {
      text: "Imdb Puanı",
      param: "_sort=imdbRate&_order=desc",
    },
  ];

  const filterLabels = [
    { text: "Favoriler", param: "isFavorite=true" },
    {
      text: "Yeni Eklenenler",
      param: "_sort=year&_order=desc",
    },
  ];

  return (
    <div className="movie-container">
      <div className="movie-head">
        <span className="text-2xl f-w-700">Movies</span>
        <div>
          <ListAction title="Sırala" Icon={FaSortAlphaUp} labels={sortLabels} />
          <ListAction
            title="Filtrele"
            Icon={FaSlidersH}
            labels={filterLabels}
          />
        </div>
      </div>
      <Suspense fallback={<div>Loading</div>}>
        <div className="movie-card-container">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

export default MovieList;
