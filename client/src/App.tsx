import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/react-query/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Router } from "./router";
import { Header } from "./components/Nav/Header";
import { Footer } from "./components/Nav/Footer";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <Router />
        <ReactQueryDevtools initialIsOpen={false} />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
