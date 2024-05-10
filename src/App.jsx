import { PopcornProvider } from "./contexts/popcornContext";
import Layout from "./components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PopcornProvider>
        <Layout />
      </PopcornProvider>
    </QueryClientProvider>
  );
}

export default App;
