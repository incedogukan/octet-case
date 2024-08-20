import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie, MovieDetailContext } from "../models";

const Context = createContext<MovieDetailContext | undefined>(undefined);

const MovieDetailProvider = ({ children }: { children: React.ReactNode }) => {
  const [movieDetail, setMovieDetail] = useState<Movie.Item | undefined>(
    undefined
  );

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://localhost:3001/movies?id=` + id)
      .then((res: { data: Movie.Item[] }) => setMovieDetail(res.data[0]));
  }, [id]);

  return (
    <Context.Provider value={{ movieDetail, setMovieDetail }}>
      {children}
    </Context.Provider>
  );
};

export const useMovieDetail = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("context is cannot be undefined");
  }

  return context;
};

export default MovieDetailProvider;
