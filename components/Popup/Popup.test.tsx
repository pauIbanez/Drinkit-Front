import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ButtonNormal } from "../../types/Buttons";
import Popup from "./Popup";

describe("Given Popup", () => {
  describe("When it's instanciated passing a position and a button with show", () => {
    test("Then it should render the button", () => {
      const position = {
        x: 0,
        y: 0,
      };
      const buttons: ButtonNormal[] = [
        {
          color: "white",
          onClick: () => {},
          text: "sum text",
        },
      ];

      render(<Popup buttons={buttons} position={position} show={true} />);

      const foundButton = screen.getByRole("button", { name: buttons[0].text });

      expect(foundButton).toBeInTheDocument();
    });
  });

  describe("When it's instanciated passing a position and a button with show and a user clicks the button", () => {
    test("Then it should call the passed onclick function", () => {
      const position = {
        x: 0,
        y: 0,
      };
      const buttons: ButtonNormal[] = [
        {
          color: "white",
          onClick: jest.fn(),
          text: "sum text",
        },
      ];

      render(<Popup buttons={buttons} position={position} show={true} />);

      const foundButton = screen.getByRole("button", { name: buttons[0].text });
      userEvent.click(foundButton);

      expect(buttons[0].onClick).toHaveBeenCalled();
    });
  });

  describe("When it's instanciated passing a position and a button without show", () => {
    test("Then it should not display the button", () => {
      const position = {
        x: 0,
        y: 0,
      };
      const buttons: ButtonNormal[] = [
        {
          color: "white",
          onClick: jest.fn(),
          text: "sum text",
        },
      ];

      render(<Popup buttons={buttons} position={position} />);

      const foundButton = screen.queryByRole("button", {
        name: buttons[0].text,
      });

      expect(foundButton).not.toBeInTheDocument();
    });
  });
});
