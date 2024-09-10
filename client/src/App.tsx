import React from "react";
import { Router } from "./router";
import { Header } from "./components/Nav/Header";
import { Footer } from "./components/Nav/Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Router />
        <Footer />
      </div>
    </div>
  );
}

export default App;
