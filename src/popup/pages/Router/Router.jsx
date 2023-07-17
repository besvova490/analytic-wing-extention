import React from "react";
import { Routes, Route } from "react-router-dom";

// layouts
import PopupAuthLayout from "../../../layouts/PopupAuthLayout";

// routes
import ProtectedRoute from "./components/ProtectedRoute";

// context
import withStorage from "../../../context/StorageContext";

// pages
import Popup from "../Popup";
import AuthPage from "../AuthPage";
import EventsPage from "../EventsPage";

const renderWithLayout = (Component, Layout) => (
  <Layout>
    <Component/>
  </Layout>
);

function Router() {
  return (
    <Routes>
      <Route path="/" element={renderWithLayout(Popup, ProtectedRoute)}/>
      <Route path="/events" element={renderWithLayout(EventsPage, ProtectedRoute)}/>
      <Route path="/auth" element={renderWithLayout(AuthPage, PopupAuthLayout)}/>
    </Routes>
  );
}

export default withStorage(Router);
