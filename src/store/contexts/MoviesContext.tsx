import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Movie, MovieContext } from "../models";
import { useFavorite } from "./FavoriteContext";

const Context = createContext<MovieContext | undefined>(undefined);

const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<Movie.Item[] | undefined>(undefined);
  const [search, setSearch] = useState<string>("");
  const [initialized, setInitialized] = useState<boolean>(false);
  const { setFavorite } = useFavorite();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/movies`)
      .then((res: { data: Movie.Item[] }) => {
        setMovies(res.data);
        setFavorite([...res.data.filter((t) => t.isFavorite).map((x) => x.id)]);
      });
  }, [setFavorite]);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      return;
    }

    axios
      .get(`http://localhost:3001/movies?name_like=` + search)
      .then((res: { data: Movie.Item[] }) => setMovies(res.data));
  }, [search]);

  return (
    <Context.Provider value={{ movies, setMovies, search, setSearch }}>
      {children}
    </Context.Provider>
  );
};

export const useMovies = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("context is cannot be undefined");
  }
  return context;
};

export default MoviesProvider;
