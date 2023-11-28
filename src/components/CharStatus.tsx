import CharCardProps from "@/types/CharcardProps";
import { GoDotFill } from "react-icons/go";

export default function CharStatus({ character }: CharCardProps) {
  return (
    <p className="flex items-center font-bold">
      <span
        className={`text-2xl ${
          character.status === "Alive"
            ? "text-[var(--green)]"
            : character.status === "Dead"
            ? "text-[var(--red)]"
            : "text-[var(--black)]"
        }`}
      >
        <GoDotFill />
      </span>
      {character.status} - {character.species}
    </p>
  );
}
