import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BaseSyntheticEvent } from "react";
import NormalButton from "./NormalButton";

describe("Given NormalButton", () => {
  describe("When it's passed a text, a color and a size", () => {
    test("Then it should render a normal button", () => {
      const text = "test Button";
      const color = "white";
      const size = {
        width: 10,
        height: 10,
      };

      render(<NormalButton text={text} color={color} size={size} />);

      const foundButton = screen.getByRole("button", { name: text });

      expect(foundButton).toBeInTheDocument();
    });
  });

  describe("When it's passed a text, a color, a size with an action on click and the button is clicked", () => {
    test("Then it should call the onClick function", () => {
      const text = "test Button";
      const color = "white";
      const size = {
        width: 10,
        height: 10,
      };

      const doSomething = jest.fn();

      render(
        <NormalButton
          text={text}
          color={color}
          size={size}
          onClick={doSomething}
        />
      );

      const foundButton = screen.getByRole("button", { name: text });
      userEvent.click(foundButton);

      expect(doSomething).toHaveBeenCalled();
    });
  });

  describe("When it's passed a text, a color, a size with an action on click and submit", () => {
    test("Then it should render a button submit", () => {
      const text = "test Button";
      const color = "white";
      const size = {
        width: 10,
        height: 10,
      };

      const submitfunc = jest
        .fn()
        .mockImplementation((event: BaseSyntheticEvent) =>
          event.preventDefault()
        );

      render(
        <form onSubmit={submitfunc}>
          <NormalButton text={text} color={color} size={size} isSubmit />
        </form>
      );

      const foundButton = screen.getByRole("button", { name: text });
      userEvent.click(foundButton);

      expect(submitfunc).toHaveBeenCalled();
    });
  });
});
