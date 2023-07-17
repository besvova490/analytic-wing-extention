import React, { useEffect, useState } from "react";

// helpers
import { getStorage } from "../../helpers/storage";
import { onMessage, messageKeys } from "../../helpers/messages";

// components
import OverviewSimpleCard from "../../components/OverviewSimpleCard";

// helpers
import { handleClick } from "../helpers";


function AnalyticsBadge() {
  const [state, setState] = useState({
    showBadge: false,
    analytics: {},
    webApp: {},
  });

  // effects
  useEffect(() => {
    getStorage().then((storage) => {
      setState((prevState) => ({
        ...prevState,
        analytics: storage.analytics,
        webApp: storage.webApp,
        showBadge: storage.isAnalyticsBadgeEnabled,
      }));
    });
  }, []);

  useEffect(() => {
    onMessage(messageKeys.TOGGLE_ANALYTICS_BADGE, (payload) => {
      setState((prevState) => ({
        ...prevState,
        showBadge: payload,
      }));
    });

    window.addEventListener("contextmenu", handleClick);

    return () => window.removeEventListener("contextmenu", handleClick);
  }, []);

  // renders
  if (!state.showBadge || !state.webApp.url || !state.webApp.url.includes(window.location.hostname)) {
    return null;
  }

  return (
    <div className="anwg-analytics-badge-wrapper">
      <div className="anwg-analytics-badge">
        <OverviewSimpleCard
          label="Views"
          value={state.analytics.groupedByEvent?.page_view || "-"}
        />
        <OverviewSimpleCard
          label="Clicks"
          value={state.analytics.groupedByEvent?.click || "-"}
        />
        <OverviewSimpleCard
          label="Desktop"
          value={state.analytics.groupedByDevise?.desktop || "-"}
        />
        <OverviewSimpleCard
          label="Mobile"
          value={state.analytics.groupedByDevise?.mobile || "-"}
        />
      </div>
    </div>
  );
}

export default AnalyticsBadge;
