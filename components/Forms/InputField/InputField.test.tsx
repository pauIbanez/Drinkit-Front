import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BaseSyntheticEvent } from "react";
import InputField from "./InputField";

describe("Given InputField", () => {
  describe("When it's instanciated passing a type, value, name, onChange and a label and the user types", () => {
    test("Then it should render a label with the passed label as name, and an input field and call onChange func", () => {
      const type = "text";
      const name = "test";
      const value = "";
      const onChange = jest.fn();
      const label = "Test";

      render(
        <InputField
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          label={label}
        />
      );

      const foundInput = screen.getByLabelText(label);

      userEvent.type(foundInput, "a");
      fireEvent.blur(foundInput);

      expect(onChange).toHaveBeenCalled();
    });
  });
});
