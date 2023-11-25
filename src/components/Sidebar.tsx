import Image from "next/image";
import img from "../../public/next.svg";

export default function Sidebar() {
  return (
    <aside className="flex flex-col items-center gap-5 min-h-screen w-64 py-10 px-4 bg-[var(--gray)] fixed top-0 left-0">
      <Image src={img} alt="Profile picture" width={60} height={60} />
      <h3 className="uppercase">Favorite characters</h3>
    </aside>
  );
}
