import React from "react";
import { createRoot } from "react-dom/client";

// components
import OptionsForm from "../containers/Forms/OptionsForm";

// layouts
import OptionsPageLayout from "../layouts/OptionsPageLayout";

// assets
import "../assets/styles/index.scss";


const OptionsPage = () => {
  return (
    <OptionsPageLayout>
      <OptionsForm />
      OptionsPage
    </OptionsPageLayout>
  );
};

const rootDiw = document.createElement("div");
rootDiw.classList.add("root");
document.body.appendChild(rootDiw);

const root = createRoot(rootDiw);
root.render(<OptionsPage />);
