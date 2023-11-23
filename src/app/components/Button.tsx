import ButtonProps from "../types/ButtonProps";

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button onClick={() => onClick()} className="bg-red-500">
      {children}
    </button>
  );
}
