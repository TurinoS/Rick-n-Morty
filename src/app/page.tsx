"use client";

import { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";

import { MdFavorite } from "react-icons/md";
import CharCard from "../components/CharCard";
import Pagination from "../components/Pagination";
import Sidebar from "@/components/Sidebar";
import BackButton from "@/components/BackButton";
import ReturnToTopButton from "@/components/ReturnToTopButton";

export default function Home() {
  const { data, favoritesPage } = useContext(ContextAPI);

  return (
    <main className="flex min-h-screen flex-col items-center p-2 md:pl-72 md:pr-8 py-10 gap-4 md:gap-8 relative">
      <button
        className="bg-[var(--red)] p-1 text-2xl rounded fixed top-2 left-2 z-10 md:hidden"
        onClick={() => {}}
      >
        <MdFavorite />
      </button>
      {!data && <h2>Loading data, please wait...</h2>}
      {favoritesPage ? <BackButton /> : <Pagination />}
      <Sidebar />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:justify-between gap-x-8 gap-y-4">
        {data.map((character) => (
          <CharCard key={character.id} character={character} />
        ))}
      </div>
      <ReturnToTopButton />
    </main>
  );
}
