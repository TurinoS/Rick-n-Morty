"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Character from "./types/Character";
import CharCard from "./components/CharCard";

export default function Home() {
  const [data, setData] = useState<Character[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await res.json();
      setData(data.results);
    };
    fetchData();
  });

  return (
    <main className="flex min-h-screen items-center justify-between p-24 flex-wrap">
      <button onClick={() => setPage(page + 1)}>Next page</button>
      {data.map((character) => (
        <CharCard
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
    </main>
  );
}
