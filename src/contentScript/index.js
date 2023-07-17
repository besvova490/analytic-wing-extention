import React from "react";
import { createRoot } from "react-dom/client";

// containers
import AnalyticsBadge from "./containers/AnalyticsBadge";

// assets
import "../assets/styles/content-script.scss";

const rootDiw = document.createElement("div");
rootDiw.classList.add("root");
document.body.insertBefore(rootDiw, document.body.firstChild);

const root = createRoot(rootDiw);
root.render(<AnalyticsBadge />);
