import { AiOutlineSearch } from "react-icons/ai";

export default function SearchInput() {
  return (
    <div className="flex relative items-center ml-11 text-[var(--black)]">
      <input
        type="search"
        name="search"
        id="search"
        className="absolute pl-2 pr-8 py-1 "
        placeholder="Search a character..."
      />
      <button type="submit" className="absolute left-[230px] text-2xl">
        <AiOutlineSearch />
      </button>
    </div>
  );
}
