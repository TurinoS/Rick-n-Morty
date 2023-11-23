"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Character = {
  id: number;
  name: string;
  image: string;
};

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
        <div key={character.id}>
          <Image
            src={character.image}
            alt={character.name}
            width={120}
            height={120}
          />
          <h1>{character.name}</h1>
        </div>
      ))}
    </main>
  );
}
