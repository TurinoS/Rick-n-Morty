"use client";

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from "react";
import Character from "../types/Character";

type ContextAPI = {
  data: Character[];
  setData: Dispatch<SetStateAction<Character[]>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const ContextAPI = createContext<ContextAPI>({
  data: [],
  setData: () => {},
  page: 1,
  setPage: () => {},
});

export default function ContextApiProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState<Character[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const apiData = await res.json();

      const favoritesInLocalStorage = JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );
      const updatedData = apiData.results.map((character: Character) => ({
        ...character,
        favorite: favoritesInLocalStorage.includes(character.id),
      }));

      setData(updatedData);
    };
    fetchData();
  }, []);

  return (
    <ContextAPI.Provider value={{ data, setData, page, setPage }}>
      {children}
    </ContextAPI.Provider>
  );
}
