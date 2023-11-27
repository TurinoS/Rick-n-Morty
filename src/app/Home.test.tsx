import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

describe("<Home />", () => {
  it("should render sidebar, pagination and cards", async () => {
    render(<Home />);

    const nextPageButton = screen.getByRole("button", { name: "Next" });
    expect(nextPageButton).toBeInTheDocument();
    screen.debug();
  });
});
