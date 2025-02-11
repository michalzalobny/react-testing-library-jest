import { useState } from "react";

function App() {
  const [isBlue, setIsBlue] = useState(false);

  return (
    <div>
      <h1>I'm gonna learn React Testing Library</h1>
      <button
        onClick={() => {
          setIsBlue(!isBlue);
        }}
        className={isBlue ? "blue" : "red"}
      >
        change color to {isBlue ? "red" : "blue"}
      </button>
    </div>
  );
}

export default App;
