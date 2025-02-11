import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

test("button starts with correct label and color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  expect(buttonElement).toHaveClass("red");
});

test("button click flow", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", {
    name: /change color to/i,
  });

  fireEvent.click(buttonElement);

  expect(buttonElement).toHaveClass("blue");
  expect(buttonElement).toHaveTextContent(/red/i);
});
