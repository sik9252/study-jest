import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const clickButton = () => {
    setButtonColor(newButtonColor);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => {
          clickButton();
        }}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
