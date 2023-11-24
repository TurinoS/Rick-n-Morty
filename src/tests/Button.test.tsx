import { render, screen, fireEvent } from "@testing-library/react";

import Button from "@/components/Button";

describe("<Button />", () => {
  it("should render the button with the children", () => {
    render(
      <Button page={1} onClick={() => {}}>
        Next page
      </Button>
    );

    const button = screen.getByRole("button", { name: /next page/i });
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(
      <Button page={1} onClick={fn}>
        Next page
      </Button>
    );

    const button = screen.getByRole("button", { name: /next page/i });
    fireEvent.click(button);
    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
