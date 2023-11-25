import CharCard from "@/components/CharCard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { rick } from "./fakeCharacter";

describe("<CharCard />", () => {
  it("should render correctly", () => {
    render(<CharCard character={rick} />);

    const img = screen.getByRole("img", { name: /Rick Sanchez/i });
    expect(img).toBeInTheDocument();

    const charName = screen.getByText("Rick Sanchez");
    expect(charName).toBeInTheDocument();
  });
});
