import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import { getLibrary } from "./components/Layout/NavBar";

const queryClient = new QueryClient();

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <QueryClientProvider client={queryClient}>
        <div className="w-screen min-h-screen bg-background">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Toaster position="top-right" />
      </QueryClientProvider>
    </Web3ReactProvider>
  );
}

export default App;
