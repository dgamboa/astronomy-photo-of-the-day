import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState();
  const [img, setImg] = useState();
  const [explanation, setExplanation] = useState();

  return (
    <div className="App">
      <button onClick={() => console.log("Clicked")}>
        Get Today's Picture
      </button>
    </div>
  );
}

export default App;
