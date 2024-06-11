import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { Router } from "./router";

const queryclient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
