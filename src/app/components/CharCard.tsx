import Image from "next/image";
import Character from "../types/Character";

export default function CharCard({ id, name, image }: Character) {
  return (
    <div key={id}>
      <Image src={image} alt={name} width={120} height={120} />
      <h1>{name}</h1>
    </div>
  );
}
