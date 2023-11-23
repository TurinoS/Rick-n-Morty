import Image from "next/image";
import Character from "../types/Character";

export default function CharCard({ id, name, image }: Character) {
  return (
    <div className="flex flex-col items-center">
      <Image src={image} alt={name} width={200} height={200} />
      <h1>{name}</h1>
    </div>
  );
}
