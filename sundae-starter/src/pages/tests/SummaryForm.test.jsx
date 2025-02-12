import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SummaryForm } from "../SummaryForm";

describe("Summary form flow", () => {
  test("checkbox enables button", async () => {
    render(<SummaryForm />);
    const checkboxElement = screen.getByRole("checkbox", {
      name: /conditions/i,
    });
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    console.log(checkboxElement);

    const user = userEvent.setup();

    // Unchecked by default
    expect(checkboxElement).not.toBeChecked();

    // Checking if checkbox enables button
    expect(buttonElement).not.toBeEnabled();
    await user.click(checkboxElement);
    expect(checkboxElement).toBeChecked();
    expect(buttonElement).toBeEnabled();

    // Click checkbox again disabled button
    await user.click(checkboxElement);
    expect(buttonElement).not.toBeEnabled();
  });
});
