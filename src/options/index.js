import React from "react";
import { createRoot } from "react-dom/client";
import OptionsForm from "../containers/Forms/OptionsForm";

const OptionsPage = () => {
  return (
    <div>
      <OptionsForm />
      OptionsPage
    </div>
  );
};

const rootDiw = document.createElement("div");
rootDiw.classList.add("root");
document.body.appendChild(rootDiw);

const root = createRoot(rootDiw);
root.render(<OptionsPage />);