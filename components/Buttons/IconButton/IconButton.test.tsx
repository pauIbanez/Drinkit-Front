import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IconButton from "./IconButton";

describe("Given IconButton", () => {
  describe("When it's instanciated passing the required props", () => {
    test("Then it should render a button with an image", () => {
      const altText = "test icon";
      render(
        <IconButton
          alt={altText}
          color="red"
          icon="/asd"
          size={{ height: 4, width: 4 }}
        />
      );

      const froundButton = screen.getByRole("button");
      const foundImage = screen.getByAltText(altText);

      expect(froundButton).toBeInTheDocument();
      expect(foundImage).toBeInTheDocument();
    });
  });

  describe("When it's instanciated passing an action on click and the user clicks", () => {
    test("Then it should call the passed action on click", () => {
      const actionOnClick = jest.fn();

      render(
        <IconButton
          alt="test icon"
          color="red"
          icon="/asd"
          size={{ height: 4, width: 4 }}
          onClick={actionOnClick}
        />
      );

      const froundButton = screen.getByRole("button");
      userEvent.click(froundButton);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
