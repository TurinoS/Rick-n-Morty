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
  toggleFavorite: (id: number) => void;
  favorites: Character[];
};

export const ContextAPI = createContext<ContextAPI>({
  data: [],
  setData: () => {},
  page: 1,
  setPage: () => {},
  toggleFavorite: () => {},
  favorites: [],
});

export default function ContextApiProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState<Character[]>([]);
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [page]);

  useEffect(() => {
    const favoritesInLocalStorage = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setFavorites(favoritesInLocalStorage);
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((character) => character.id === id);

      const newFavorites = isFavorite
        ? prevFavorites.filter((character) => character.id !== id)
        : [...prevFavorites, data.find((character) => character.id === id)!];

      localStorage.setItem("favorites", JSON.stringify(newFavorites));

      return newFavorites;
    });
  };

  return (
    <ContextAPI.Provider
      value={{ data, setData, page, setPage, toggleFavorite, favorites }}
    >
      {children}
    </ContextAPI.Provider>
  );
}
