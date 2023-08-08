import React from 'react';
import { IoIosSettings } from "react-icons/io";
import LogoWhite from "../components/icons/LogoWhite";
import './assets/styles/layouts/options-page-layout.scss';

function OptionsPageLayout({ children }) {
  return (
    <div className="anwg-popup-layout">
      <div className="anwg-popup-layout__header">
        <div className="anwg-popup-layout__header__left">
          <span className="anwg-popup-layout__header__logo">
            <LogoWhite/>
          </span>
          <h2 className="anwg-popup-layout__header__title">
            Analytic Wing
          </h2>
        </div>
        {/* Add any additional modifications to the header section */}
      </div>
      <div className="anwg-popup-layout__body options-page-layout__body">
        { children }
      </div>
    </div>
  );
}

export default OptionsPageLayout;