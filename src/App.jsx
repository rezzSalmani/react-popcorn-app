import { useState } from "react";
import { PopcornProvider } from "./contexts/popcornContext";
import "./App.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PopcornProvider>
        <ReactQueryDevtools />
        <Layout />
      </PopcornProvider>
    </QueryClientProvider>
  );
}

export default App;
