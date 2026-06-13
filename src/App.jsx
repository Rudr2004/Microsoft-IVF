import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProcessPage from './pages/ProcessPage';
import RequirementsPage from './pages/RequirementsPage';
import PlanningPage from './pages/PlanningPage';
import LocationsPage from './pages/LocationsPage';
import VerifyPage from './pages/VerifyPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Landing / Home */}
          <Route index element={<HomePage />} />
          
          {/* Main sections */}
          <Route path="process" element={<ProcessPage />} />
          <Route path="requirements" element={<RequirementsPage />} />
          <Route path="planning" element={<PlanningPage />} />
          
          {/* Locations */}
          <Route path="locations" element={<LocationsPage />} />
          <Route path="locations/:slug" element={<LocationsPage />} />
          
          {/* Verification Code */}
          <Route path="verify" element={<VerifyPage />} />
          
          {/* Contact */}
          <Route path="contact" element={<ContactPage />} />

          {/* Gracefully handle legacy /about routes or mismatches */}
          <Route path="contactUs" element={<Navigate to="/contact" replace />} />
          <Route path="contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="about" element={<Navigate to="/process" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
