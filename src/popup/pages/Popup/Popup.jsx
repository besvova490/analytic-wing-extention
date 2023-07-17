import React, { useState, useEffect } from "react";

// components
import PopupContent from "./components/PopupContent";

// hooks
import { useStorage } from "../../../context/StorageContext";

// helpers
import { getEvents } from "../../../api/events";


const Popup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [storage, updateStorage] = useStorage();

  // effects
  useEffect(() => {
    if (storage.webApp.url && storage.webApp.token) {
      setIsLoading(true);
      getEvents()
        .then((response) => updateStorage("analytics", response))
        .catch(e => setError(e))
        .finally(() => setIsLoading(false));
    }
  }, [storage.webApp]);

  // renders
  return (
    <PopupContent
      isLoading={isLoading}
      error={error}
      data={storage?.analytics}
    />
  );
};

export default Popup;
