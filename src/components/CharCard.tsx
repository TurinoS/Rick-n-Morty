import CharCardProps from "@/types/CharcardProps";
import Image from "next/image";
import CharStatus from "./CharStatus";
import FavoriteButton from "./FavoriteButton";

export default function CharCard({ character }: CharCardProps) {
  return (
    <div className="flex bg-[var(--gray)] rounded-2xl overflow-hidden">
      <Image
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
        className="w-[130px] h-[130px] md:w-[180px] md:h-auto"
      />
      <div className="flex flex-col md:gap-2 md:p-3 p-1 w-full relative">
        <h2 className="md:text-2xl font-bold uppercase pl-1">
          {character.name}
        </h2>
        <CharStatus character={character} />
        <p className="text-sm md:text-lg pl-1">
          Origin: <span className="font-semibold">{character.origin.name}</span>
        </p>
        <p className="text-sm md:text-lg pl-1">
          Gender: <span className="font-semibold">{character.gender}</span>
        </p>
        <FavoriteButton character={character} />
      </div>
    </div>
  );
}
