import React from "react";
import { IoIosSettings } from "react-icons/io";

// components
import LogoWhite from "../components/icons/LogoWhite";


function PopupAuthLayout({ children }) {

  
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
        <div className="anwg-popup-layout__header__right">
          <IoIosSettings
            className="anwg-popup-layout__header__settings-icon"
            onClick={() => chrome.runtime.openOptionsPage()}
          />
        </div>
      </div>
      <div className="anwg-popup-layout__body">
        { children }
      </div>
    </div>
  );
}

export default PopupAuthLayout;
