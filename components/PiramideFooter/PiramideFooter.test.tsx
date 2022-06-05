import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { ReactElement } from "react";
import PiramideFooter, { LeaveButton } from "./PiramideFooter";

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

      render(<LeaveButton onClick={mockOnLeaveClick} />);

      const foundLink = screen.getByRole("link", { name: expectedText });

      userEvent.click(foundLink);

      expect(mockOnLeaveClick).toHaveBeenCalled();
    });
  });
});

describe("Given PiramideFooter", () => {
  describe("When it's instanciated as the leader", () => {
    test("Then it should render a link 'Leave' and 2 buttons", () => {
      const expectedLink = "Leave";

      const expectedButtons = {
        start: "Start icon Start",
        settings: "lobby settings",
      };

      render(<PiramideFooter isLeader={true} onLeaveClick={() => {}} />);

      const foundLeaveLink = screen.getByRole("link", { name: expectedLink });
      const foundStartButton = screen.getByRole("button", {
        name: expectedButtons.start,
      });
      const foundSettingsButton = screen.getByRole("button", {
        name: expectedButtons.settings,
      });

      expect(foundLeaveLink).toBeInTheDocument();
      expect(foundStartButton).toBeInTheDocument();
      expect(foundSettingsButton).toBeInTheDocument();
    });
  });

  describe("When it's instanciated as NOT the leader", () => {
    test("Then it should render a link 'Leave' and a text 'Waiting for leader to start...'", () => {
      const expectedLink = "Leave";

      const expectedText = "Waiting for leader to start...";

      render(<PiramideFooter isLeader={false} onLeaveClick={() => {}} />);

      const foundLeaveLink = screen.getByRole("link", { name: expectedLink });
      const foundText = screen.getByText(expectedText);

      expect(foundLeaveLink).toBeInTheDocument();
      expect(foundText).toBeInTheDocument();
    });
  });
});
