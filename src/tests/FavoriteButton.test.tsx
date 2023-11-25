import FavoriteButton from "@/components/FavoriteButton";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { rick } from "./fakeCharacter";

describe("<FavoriteButton />", () => {
  it("should render correctly", () => {
    render(<FavoriteButton character={rick} />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
