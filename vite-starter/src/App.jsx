import { useState } from "react";

function App() {
  const [isBlue, setIsBlue] = useState(false);
  const [enableButton, setEnableButton] = useState(true);

  return (
    <div>
      <h1>I'm gonna learn React Testing Library</h1>
      <button
        onClick={() => {
          setIsBlue(!isBlue);
        }}
        className={isBlue ? "blue" : "red"}
        disabled={!enableButton}
      >
        change color to {isBlue ? "red" : "blue"}
      </button>
      <label for="disable-button-checkbox">Disable button checkbox</label>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        onChange={() => {
          setEnableButton(!enableButton);
        }}
        checked={enableButton}
      />
    </div>
  );
}

export default App;
