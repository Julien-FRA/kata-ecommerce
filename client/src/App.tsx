import React from "react";
import { Router } from "./router";
import { Header } from "./components/Nav/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
