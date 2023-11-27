import { useContext } from "react";
import { ContextAPI } from "@/context/ContextAPI";

import CharCardProps from "@/types/CharcardProps";
import { FaHeart } from "react-icons/fa";

export default function FavoriteButton({ character }: CharCardProps) {
  const { favorites, toggleFavorite } = useContext(ContextAPI);

  const isFavorite = favorites.some(
    (favCharacter) => favCharacter.id === character.id
  );

  return (
    <button
      className={`${
        isFavorite && "text-[var(--red)]"
      } absolute bottom-5 right-6 text-xl`}
      onClick={() => toggleFavorite(character.id)}
    >
      <FaHeart />
    </button>
  );
}
