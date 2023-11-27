import { ContextAPI } from "@/context/ContextAPI";
import { useContext } from "react";
import Image from "next/image";
import avatar from "../../public/profile-picture.png";
import SidebarCard from "./SideBarCard";

export default function Sidebar() {
  const { data } = useContext(ContextAPI);

  return (
    <aside className="flex flex-col items-center gap-5 min-h-screen w-64 py-10 px-4 bg-[var(--gray)] fixed top-0 left-0">
      <Image
        src={avatar}
        alt="Profile picture"
        width={75}
        height={75}
        className="rounded-full"
      />
      <h3 className="font-bold">TurinoS</h3>
      <h3 className="uppercase font-semibold text-lg">Favorite characters</h3>
      <div className={`grid grid-cols-2 gap-2 overflow-auto`}>
        {data.map((character) => (
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
