export namespace Movie {
  export interface Item {
    id: number;
    name: string;
    coverImage: string;
    contentImage: string;
    categories: string[];
    imdbRate: string;
    country: string;
    year: string;
    isTvSeries: boolean;
    summary: string;
    isFavorite: boolean;
  }
}

export interface MovieDetailContext {
  movieDetail: Movie.Item | undefined;
  setMovieDetail: React.Dispatch<React.SetStateAction<Movie.Item | undefined>>;
}

export interface MovieContext {
  movies: Movie.Item[] | undefined;
  setMovies: React.Dispatch<React.SetStateAction<Movie.Item[] | undefined>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
