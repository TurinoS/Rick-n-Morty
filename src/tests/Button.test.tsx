import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Button from "@/components/Button";

describe("<Button />", () => {
  it("should render the button with the children", () => {
    render(
      <Button page={1} onClick={() => {}}>
        Next page
      </Button>
    );

    const button = screen.getByRole("button", { name: /next page/i });
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(
      <Button page={2} onClick={fn}>
        Next page
      </Button>
    );

    const button = screen.getByRole("button", { name: /next page/i });
    userEvent.click(button);
    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
