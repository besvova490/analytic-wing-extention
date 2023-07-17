import React from "react";
import { Navigate } from "react-router-dom";

// layout
import PopupLayout from "../../../../layouts/PopupLayout";

// hooks
import { useStorage } from "../../../../context/StorageContext";

function ProtectedRoute({ children }) {
  const [storage] = useStorage();

  const isEmpty = !(storage.webApp?.url || storage.webApp?.token) && !storage.userToken;

  if (isEmpty) {
    return <Navigate to="/auth"/>;
  }

  return (
    <PopupLayout>
      { children }
    </PopupLayout>
  );
}

export default ProtectedRoute;
