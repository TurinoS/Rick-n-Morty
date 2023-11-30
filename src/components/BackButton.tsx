import { ContextAPI } from "@/context/ContextAPI";
import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  const { renderAllCharacters } = useContext(ContextAPI);
  return (
    <button
      onClick={renderAllCharacters}
      className="flex items-center gap-2 bg-[var(--dark-gray)] px-3 py-1 text-xl self-start rounded-lg hover:scale-105 hover:text-[var(--light-blue)] hover:font-semibold transition duration-300"
    >
      <FaArrowLeft />
      Return
    </button>
  );
}
