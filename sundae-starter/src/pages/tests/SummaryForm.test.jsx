import { render, screen, fireEvent } from "@testing-library/react";

import { SummaryForm } from "../SummaryForm";

describe("Summary form flow", () => {
  test("checkbox enables button", () => {
    render(<SummaryForm />);
    const checkboxElement = screen.getByRole("checkbox", {
      name: /conditions/i,
    });
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    console.log(checkboxElement);

    // Unchecked by default
    expect(checkboxElement).not.toBeChecked();

    // Checking if checkbox enables button
    expect(buttonElement).not.toBeEnabled();
    fireEvent.click(checkboxElement);
    expect(checkboxElement).toBeChecked();
    expect(buttonElement).toBeEnabled();

    // Click checkbox again disabled button
    fireEvent.click(checkboxElement);
    expect(buttonElement).not.toBeEnabled();
  });
});
