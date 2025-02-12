import { useState } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export const SummaryForm = () => {
  const [disabled, setIsDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered.</Popover.Body>
    </Popover>
  );

  return (
    <>
      <div>
        <form>
          <button type="submit" disabled={disabled}>
            Submit
          </button>
          <label htmlFor="enable-button">
            <OverlayTrigger overlay={popover} placement="right">
              <span>Accept conditions and enable the button</span>
            </OverlayTrigger>
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
