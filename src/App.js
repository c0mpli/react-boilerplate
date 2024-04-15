import logo from "./logo.svg";
import "./App.css";
import React from "react";
function App() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button onClick={() => setCounter((p) => p - 1)}>-</button>
          <p>{counter}</p>
          <button onClick={() => setCounter((p) => p + 1)}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
