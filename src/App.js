import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-context";

const queryClient = new QueryClient();

const App = () => {
  return (
    // <QueryClientProvider client={queryClient}>
    //   <div className="min-h-screen bg-gray-100 p-4 dark:bg-gray-900">
    //     <Dashboard />
    //   </div>
    // </QueryClientProvider>

    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Login />}></Route> */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
