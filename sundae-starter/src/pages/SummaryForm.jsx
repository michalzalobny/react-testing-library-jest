import { useState } from "react";

export const SummaryForm = () => {
  const [disabled, setIsDisabled] = useState(true);

  return (
    <>
      <div>
        <form>
          <button type="submit" disabled={disabled}>
            Submit
          </button>
          <label htmlFor="enable-button">
            Accept conditions and enable the button
          </label>
          <input
            type="checkbox"
            id="enable-button"
            value={!disabled}
            onChange={() => setIsDisabled((prev) => !prev)}
          />
        </form>
      </div>
    </>
  );
};
