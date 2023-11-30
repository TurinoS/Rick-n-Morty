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
      className={`rounded-lg md:text-lg font-bold w-7 md:w-8 h-8 hover:scale-110 hover:text-[var(--white)] transition duration-500 ${
        children == page &&
        "bg-[var(--light-blue)] scale-125 text-[var(--white)] md:text-xl"
      } ${nextPage && "ml-5"}`}
    >
      <p className="text-center">{children}</p>
    </button>
  );
}
