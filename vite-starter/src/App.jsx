import { useState } from "react";

import { kebabCaseToTitleCase } from "./helpers";

const MIDNIGHT_BLUE = "midnight-blue";
const MEDIUM_VIOLET_RED = "medium-violet-red";

function App() {
  const [currentColor, setCurrentColor] = useState(MEDIUM_VIOLET_RED);
  const nextColor =
    currentColor === MIDNIGHT_BLUE ? MEDIUM_VIOLET_RED : MIDNIGHT_BLUE;
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <h1>I'm gonna learn React Testing Library</h1>
      <button
        onClick={() => {
          setCurrentColor((prev) =>
            prev === MIDNIGHT_BLUE ? MEDIUM_VIOLET_RED : MIDNIGHT_BLUE
          );
        }}
        className={[currentColor, isDisabled && "gray"].join(" ")}
        disabled={isDisabled}
      >
        change color to {kebabCaseToTitleCase(nextColor)}
      </button>
      <label htmlFor="disable-button-checkbox">Disable button checkbox</label>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        onChange={() => {
          setIsDisabled(!isDisabled);
        }}
        checked={isDisabled}
      />
    </div>
  );
}

export default App;
