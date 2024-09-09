import React from "react";
import { Router } from "./router";
import { Header } from "./components/Nav/Header";
import { Footer } from "./components/Nav/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
