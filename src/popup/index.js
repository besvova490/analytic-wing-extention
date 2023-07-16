import React from "react";
import { createRoot } from "react-dom/client";

// components
import Popup from "./Popup";

// assets
import "../assets/styles/index.scss";

const rootDiw = document.createElement("div");
rootDiw.classList.add("root");
document.body.appendChild(rootDiw);

const root = createRoot(rootDiw);
root.render(<Popup />);
