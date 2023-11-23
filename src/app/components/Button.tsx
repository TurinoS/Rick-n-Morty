import ButtonProps from "../types/ButtonProps";

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={() => onClick()}
      className="bg-[var(--light-blue)] rounded-lg font-bold p-2 flex items-center gap-1"
    >
      {children}
    </button>
  );
}
