import React, { useState, useEffect } from "react";

// layout
import PopupLayout from "../layouts/PopupLayout";

// components
import PopupContent from "./PopupContent";

// hooks
import useStorage from "../hooks/useStorage";

// helpers
import { getEvents } from "../api/events";


const Popup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [storage, updateStorage, isEmpty] = useStorage();

  // effects
  useEffect(() => {
    if (storage.webApp.url && storage.webApp.token) {
      setIsLoading(true);
      getEvents()
        .then((response) => {
          updateStorage("analytics", response);
        })
        .catch(e => setError(e))
        .finally(() => setIsLoading(false));
    }
  }, [storage.webApp]);

  console.log({
    error,
    isLoading,
    storage,
    isEmpty,
  });

  // renders
  return (
    <PopupLayout>
      <PopupContent
        isEmpty={isEmpty}
        isLoading={isLoading}
        error={error}
        data={storage?.analytics}
      />
    </PopupLayout>
  );
};

export default Popup;
