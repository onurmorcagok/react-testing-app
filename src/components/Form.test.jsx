import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import Form from "./Form";

describe("Form Tests", () => {
  test("form render correctly", () => {
    render(<Form />);
    screen.getByText("Login");
    screen.getByPlaceholderText("Name");
    screen.getByPlaceholderText("Surname");
    screen.getByPlaceholderText("E-mail");
    screen.getByPlaceholderText("Password");
  });

  test("show/hide button working correctly", () => {
    render(<Form />);
    let button = screen.getByText("Show");
    userEvent.click(button);
    expect(button).toHaveTextContent("Hide");
  });
});
