import { useState } from "react";

import CharCardProps from "@/types/CharcardProps";
import { FaHeart } from "react-icons/fa";

export default function FavoriteButton({ character }: CharCardProps) {
  const [favorite, setFavorite] = useState(character.favorite);

  const toggleFavorite = () => {
    const updatedCharacter = { ...character, favorite: !favorite };
    setFavorite(!favorite);

    // Adiciona ou remove o ID do personagem no Local Storage
    const favoritesInLocalStorage = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (!favorite) {
      favoritesInLocalStorage.push(character.id);
    } else {
      const index = favoritesInLocalStorage.indexOf(character.id);
      if (index !== -1) {
        favoritesInLocalStorage.splice(index, 1);
      }
    }

    localStorage.setItem("favorites", JSON.stringify(favoritesInLocalStorage));
  };

  return (
    <button
      className={`${
        favorite && "text-[var(--red)]"
      } absolute bottom-5 right-6 text-xl`}
      onClick={toggleFavorite}
    >
      <FaHeart />
    </button>
  );
}
