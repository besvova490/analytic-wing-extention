import React, { useEffect, useState } from "react";

// components
import EventCard from "../../../components/EventCard";

// hooks
import { useStorage } from "../../../context/StorageContext";

// helpers
import { postSelector, getSelectors } from "../../../api/selectors";

function EventsPage() {
  const [storage, updateStorage] = useStorage();
  const [savedSelectors, setSavedSelectors] = useState([]);

  // methods
  const handleApply = (selector) => {
    postSelector({ selector });
  };

  const handleClear = (selector) => {
    const payload = storage.events.filter((event) => event !== selector);

    updateStorage("events", payload);
  };

  // effects
  useEffect(() => {
    getSelectors().then((selectors) => {
      setSavedSelectors(selectors);
    });
  }, []);

  // renders
  return (
    <div className="anwg-events-list">
      {
        storage.events.map((event) => (
          <EventCard
            key={event}
            selector={event}
            active={savedSelectors.some(item => item.selector === event)}
            onClear={() => handleClear(event)}
            onApply={() => handleApply(event)}
          />
        ))
      }
    </div>
  );
}

export default EventsPage;
