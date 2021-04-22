import React from "react";

//Style
import "./App.css";

//Components
import Form from "./Components/Form";

function App() {
  return (
    <div className="app">
      <div className="app__nav">
        <h1> Todo Manager</h1>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
