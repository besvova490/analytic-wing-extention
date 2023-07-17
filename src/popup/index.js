import React from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";

// components
import Router from "./pages/Router";

// assets
import "../assets/styles/index.scss";

const rootDiw = document.createElement("div");
rootDiw.classList.add("root");
document.body.appendChild(rootDiw);

const root = createRoot(rootDiw);
root.render(
  <MemoryRouter>
    <Router />
  </MemoryRouter>
);
