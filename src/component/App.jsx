import React, { useState } from "react";

function App() {
  let [time, setTime] = useState(new Date().toLocaleTimeString("en-GB"));

  function reload() {
    setTime(new Date().toLocaleTimeString("en-GB"));
  }

  setInterval(reload, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={reload}>Get Time</button>
    </div>
  );
}

export default App;

// The "en-GB" is to turn the clock into a 24 hour clock
