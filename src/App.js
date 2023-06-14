import React, { useState } from "react";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function currTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(currTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={currTime}>Get Time</button>
    </div>
  );
}

export default App;
