import ButtonProps from "../types/ButtonProps";

export default function Button({
  onClick,
  children,
  page,
  nextPage,
}: ButtonProps) {
  return (
    <button
      onClick={() => onClick()}
      className={`rounded-lg text-lg font-bold w-8 h-8 hover:scale-110 hover:text-[var(--white)] transition duration-500 ${
        children == page &&
        "bg-[var(--light-blue)] scale-125 text-[var(--white)] text-xl"
      } ${nextPage && "ml-5"}`}
    >
      <p className="text-center w-full">{children}</p>
    </button>
  );
}
