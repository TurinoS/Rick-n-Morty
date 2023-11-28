import { ContextAPI } from "@/context/ContextAPI";
import { useContext } from "react";
import Image from "next/image";
import avatar from "../../public/profile-picture.png";
import SidebarCard from "./SidebarCard";

export default function Sidebar() {
  const { favorites } = useContext(ContextAPI);

  return (
    <aside className="flex flex-col items-center gap-5 min-h-screen w-64 py-6 px-2 bg-[var(--gray)] fixed top-0 left-0">
      <Image
        src={avatar}
        alt="Profile picture"
        width={75}
        height={75}
        className="rounded-full"
      />
      <h3 className="font-bold">TurinoS</h3>
      <h3 className="uppercase font-semibold text-lg">Favorite characters</h3>
      <div className="grid grid-cols-2 gap-3 overflow-auto favCharsDiv shadow-inner p-2 bg-[var(--dark-gray)]">
        {favorites.map((character) => (
          <SidebarCard
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </div>
    </aside>
  );
}
