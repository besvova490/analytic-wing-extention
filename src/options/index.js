import React from "react";
import { createRoot } from "react-dom/client";

const OptionsPage = () => {
  return <div>OptionsPage</div>;
};

const rootDiw = document.createElement("div");
rootDiw.classList.add("root");
document.body.appendChild(rootDiw);

const root = createRoot(rootDiw);
root.render(<OptionsPage />);
