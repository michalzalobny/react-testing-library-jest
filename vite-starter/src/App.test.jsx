import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";
import { kebabCaseToTitleCase } from "./helpers";

const MIDNIGHT_BLUE = "midnight-blue";
const MEDIUM_VIOLET_RED = "medium-violet-red";

test("button starts with correct label and color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass(MEDIUM_VIOLET_RED);
});

test("button click flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: /change color to/i,
  });

  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveClass(MIDNIGHT_BLUE);
  expect(buttonElement).toHaveTextContent(/red/i);
});

test("checkbox flow", () => {
  render(<App />);

  const checkboxElement = screen.getByRole("checkbox", {
    name: /Disable button checkbox/i,
  });
  expect(checkboxElement).not.toBeChecked();
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toBeEnabled();

  //Click the checkbox and test if disables the button
  fireEvent.click(checkboxElement);
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).not.toBeEnabled();

  //Click the checkbox and test if enables the button
  fireEvent.click(checkboxElement);
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
});

describe("kebabCaseToTitleCase", () => {
  test("works for no hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("works for one hyphen", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("midnight-violet-red")).toBe(
      "Midnight Violet Red"
    );
  });
});
