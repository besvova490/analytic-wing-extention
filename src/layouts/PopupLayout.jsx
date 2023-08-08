import React, { useEffect } from "react";
import { IoIosSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { PiCursorClickBold } from "react-icons/pi";
import { Switch, Badge } from "antd";
import { useNavigate, Link } from "react-router-dom";

// components
import LogoWhite from "../components/icons/LogoWhite";

// hooks
import { useStorage } from "../context/StorageContext";
import { sendMessage, messageKeys } from "../helpers/messages";


function PopupLayout({ children }) {
  const [storage, updateStorage, clearStorage] = useStorage();
  const navigate = useNavigate();

  // effects
  useEffect(() => {
    chrome.contextMenus.onClicked.addListener((event) => {
      if (event.menuItemId === "open-web-app") {
        sendMessage(messageKeys.REGISTER_EVENT_LISTENER).then(resp => {
          const payloadEvents = new Set(storage.events);
          payloadEvents.add(resp);

          updateStorage("events", [...payloadEvents]);
        });
      }
    });
  }, []);

  
  return (
    <div className="anwg-popup-layout">
      <div className="anwg-popup-layout__header">
        <Link
          className="anwg-popup-layout__header__left"
          to="/"
        >
          <span className="anwg-popup-layout__header__logo">
            <LogoWhite/>
          </span>
          <h2 className="anwg-popup-layout__header__title">
            Analytic Wing
          </h2>
        </Link>
        <div className="anwg-popup-layout__header__right">
          <IoIosSettings
            className="anwg-popup-layout__header__settings-icon"
            onClick={() => chrome.runtime.openOptionsPage()}
          />
          <Link to="/events">
            <Badge
              count={storage.events?.length}
              size="small"
              color="magenta"
            >
              <PiCursorClickBold
                className="anwg-popup-layout__header__settings-icon"
              />
            </Badge>
          </Link>
          <Switch
            className="anwg-popup-layout__header__switch"
            checked={storage.isAnalyticsBadgeEnabled}
            onChange={(checked) => {
              sendMessage(messageKeys.TOGGLE_ANALYTICS_BADGE, checked);
              updateStorage("isAnalyticsBadgeEnabled", checked);
            }}
          />
        </div>
      </div>
      <div className="anwg-popup-layout__body">
        { children }
      </div>
      <div
        className="anwg-popup-layout__footer"
        onClick={() => {
          clearStorage().then(() => navigate("/auth"));
        }}
      >
        <MdLogout className="anwg-popup-layout__footer__icon"/>
        <span>Logout</span>
      </div>
    </div>
  );
}

export default PopupLayout;