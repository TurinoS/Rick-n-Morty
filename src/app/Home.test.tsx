import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("<Home />", () => {
  it("should render sidebar, pagination and cards", () => {
    render(<Home />);

    expect(screen.getByText("next")).toBeInTheDocument();
  });
});
