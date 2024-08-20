import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { FavoriteContext } from "../models";

const Context = createContext<FavoriteContext | undefined>(undefined);

const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorite, setFavorite] = useState<number[]>([3, 4]);
  const [initialized, setInitialized] = useState<boolean>(false);

  const prevCountRef = useRef<number[]>([]);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      prevCountRef.current = favorite;
      return;
    }

    const prevCount = prevCountRef.current;
    const currentCount = favorite;

    prevCountRef.current = favorite;

    const prevSet = new Set(prevCount);
    const currentSet = new Set(currentCount);

    const added = currentCount.filter((t) => !prevSet.has(t));
    const removed = prevCount.filter((t) => !currentSet.has(t));

    added.forEach((id) => {
      axios.patch(`http://localhost:3001/movies/${id}`, { isFavorite: true });
    });

    removed.forEach((id) => {
      axios.patch(`http://localhost:3001/movies/${id}`, {
        isFavorite: false,
      });
    });
  }, [favorite, initialized]);

  return (
    <Context.Provider value={{ favorite, setFavorite }}>
      {children}
    </Context.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("context is cannot be undefined");
  }

  return context;
};

export default FavoriteProvider;
