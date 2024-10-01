import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/react-query/client";
import { Router } from "./router";
import { Header } from "./components/Nav/Header";
import { Footer } from "./components/Nav/Footer";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Router />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
