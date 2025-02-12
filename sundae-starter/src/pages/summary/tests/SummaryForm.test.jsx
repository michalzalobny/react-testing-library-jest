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

  test("popover responds to hover", async () => {
    render(<SummaryForm />);
    const user = userEvent.setup();

    //popover starts hidden
    const nullPopover = screen.queryByText(/no ice/i);
    expect(nullPopover).not.toBeInTheDocument();

    //popover appears when hovered over checkbox label
    const termsAndConditions = screen.getByText(/conditions/i);
    await user.hover(termsAndConditions);
    const popover = screen.getByText(/no ice/i);
    expect(popover).toBeInTheDocument();

    //popover disappears on mouseout from checkbox label
    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
  });
});
