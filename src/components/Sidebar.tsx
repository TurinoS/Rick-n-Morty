import { ContextAPI } from "@/context/ContextAPI";
import { FocusEvent, useContext, useEffect, useState } from "react";
import Image from "next/image";
import avatar from "../../public/profile-picture.png";
import SidebarCard from "./SidebarCard";

export default function Sidebar() {
  const { favorites, renderFavorites } = useContext(ContextAPI);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleUserNameBlur = (e: FocusEvent<HTMLInputElement>) => {
    const newUserName = e.target.value;
    localStorage.setItem("userName", newUserName);
    setUserName(newUserName);
  };

  return (
    <aside className="md:flex flex-col items-center gap-5 min-h-screen w-64 py-6 px-2 bg-[var(--gray)] md:fixed top-0 left-0 hidden">
      <Image
        src={avatar}
        alt="Profile picture"
        width={75}
        height={75}
        className="rounded-full"
      />
      {userName ? (
        <h3 onClick={() => setUserName("")} className="font-bold text-lg">
          {userName}
        </h3>
      ) : (
        <input
          type="text"
          placeholder="Insert your name"
          className="px-2 text-[var(--black)] rounded font-semibold text-center"
          onBlur={(e) => handleUserNameBlur(e)}
        />
      )}
      <h3
        className="uppercase underline font-semibold text-xl cursor-pointer hover:text-[var(--light-blue)] transition duration-200"
        onClick={renderFavorites}
      >
        Favorite characters
      </h3>
      <div
        className="grid grid-cols-2 gap-3 overflow-auto favCharsDiv shadow-inner p-2 bg-[var(--dark-gray)] cursor-pointer"
        onClick={renderFavorites}
      >
        {favorites
          .slice()
          .reverse()
          .map((character) => (
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
