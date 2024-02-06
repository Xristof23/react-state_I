import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, setisActive] = useState(false);

  function handleClick() {
    setisActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
