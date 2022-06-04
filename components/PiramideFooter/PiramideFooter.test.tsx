import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { ReactElement } from "react";
import { renderInBocata } from "../../jest.setup";
import { LeaveButton } from "./PiramideFooter";

jest.mock(
  "next/link",
  () =>
    ({ children, ...rest }: { children: ReactElement }) =>
      React.cloneElement(children, { ...rest })
);

describe("Given LeaveButton", () => {
  describe("When it's instanciated", () => {
    test("Then it should render a link with the text Leave", () => {
      const expectedText = "Leave";

      render(<LeaveButton onClick={() => {}} />);

      const foundLink = screen.getByRole("link", { name: expectedText });

      expect(foundLink).toBeInTheDocument();
    });
  });

  describe("When it's passed an onLeaveClick function and the user clicks", () => {
    test("Then it should invoke the passed function", () => {
      const expectedText = "Leave";
      const mockOnLeaveClick = jest.fn();

      renderInBocata(<LeaveButton onClick={mockOnLeaveClick} />);

      const foundLink = screen.getByRole("link", { name: expectedText });

      userEvent.click(foundLink);

      expect(mockOnLeaveClick).toHaveBeenCalled();
    });
  });
});
