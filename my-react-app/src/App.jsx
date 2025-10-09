import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { ScrollToTop } from "./components/ScrollToTop";
import AppRoutes from "./Routes";

function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <AppRoutes />
      </div>
    </ErrorBoundary>
  );
}

export default App;