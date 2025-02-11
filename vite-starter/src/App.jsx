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
      <input
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
