"use client";

import { useContext } from "react";

import CharCard from "../components/CharCard";
import { ContextAPI } from "../context/ContextAPI";
import Pagination from "../components/Pagination";

export default function Home() {
  const { data } = useContext(ContextAPI);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pl-72 pr-4 py-10 gap-8">
      <Pagination />
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        {data.map((character) => (
          <CharCard key={character.id} character={character} />
        ))}
      </div>
    </main>
  );
}
