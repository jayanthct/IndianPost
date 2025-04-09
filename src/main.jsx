import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { AddressProvider } from "./AddressContext";

import { BrowserRouter} from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AddressProvider>
      <App />
    </AddressProvider>
  </BrowserRouter>
);
