import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given Header", () => {
  describe("When it's instanciated passing a title and a subitle", () => {
    test("Then it should render them in uppercase", () => {
      const title = "Test title";
      const subtitle = "subiTle";

      render(<Header title={title} subtitle={subtitle} />);

      const foundTitle = screen.getByRole("heading", {
        name: title.toUpperCase(),
      });
      const foundSubtitle = screen.getByRole("heading", {
        name: subtitle.toUpperCase(),
      });

      expect(foundTitle).toBeInTheDocument();
      expect(foundSubtitle).toBeInTheDocument();
    });
  });
});
