"use client";

import { useContext } from "react";

import CharCard from "../components/CharCard";
import { ContextAPI } from "../context/ContextAPI";
import Pagination from "../components/Pagination";
import Sidebar from "@/components/Sidebar";
import BackButton from "@/components/BackButton";

export default function Home() {
  const { data, favoritesPage, renderAllCharacters } = useContext(ContextAPI);

  return (
    <main className="flex min-h-screen flex-col items-center pl-72 pr-8 py-10 gap-8">
      {!data && <h2>Loading data, please wait...</h2>}
      {favoritesPage ? <BackButton /> : <Pagination />}
      <Sidebar />
      <div className="grid grid-cols-2 w-full justify-between gap-x-8 gap-y-4">
        {data.map((character) => (
          <CharCard key={character.id} character={character} />
        ))}
      </div>
    </main>
  );
}
