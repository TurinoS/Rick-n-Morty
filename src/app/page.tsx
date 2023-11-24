"use client";

import { useContext } from "react";

import CharCard from "../components/CharCard";
import { ContextAPI } from "../context/ContextAPI";
import Pagination from "../components/Pagination";

export default function Home() {
  const { data } = useContext(ContextAPI);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-72 pr-24 p-10 gap-8">
      <Pagination />
      <div className="flex flex-wrap gap-10 justify-between">
        {data.map((character) => (
          <CharCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </div>
    </main>
  );
}
