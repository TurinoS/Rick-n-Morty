import Image from "next/image";

type SidebarCardProps = {
  name: string;
  image: string;
};

export default function SidebarCard({ name, image }: SidebarCardProps) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt={name}
        width={70}
        height={70}
        className="w-auto h-auto rounded-lg"
      />
      <p className="text-center font-bold">{name}</p>
    </div>
  );
}
