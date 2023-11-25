import CharCard from "@/components/CharCard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const rick = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  favorite: false,
};

describe("<CharCard />", () => {
  it("should render correctly", () => {
    render(<CharCard character={rick} />);

    const img = screen.getByRole("img", { name: /Rick Sanchez/i });
    expect(img).toBeInTheDocument();

    const charName = screen.getByText("Rick Sanchez");
    expect(charName).toBeInTheDocument();
  });
});
