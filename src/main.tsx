import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { ErrorMessage } from "./ui/ErrorMessage/ErrorMessage.tsx";

import "@acab/reset.css";
import "./global.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <ErrorBoundary fallbackRender={ErrorMessage}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
