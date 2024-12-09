import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToggleProvider } from "./contexts/ToggleContext";
import { LoginProvider } from "./contexts/LoginContext";

createRoot(document.getElementById("root")).render(
  <ToggleProvider>
    <LoginProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </LoginProvider>
  </ToggleProvider>
);
