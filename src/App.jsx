import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { CreateAccountPage } from "./pages/CreateAccountPage";
import { DashboardInicioPage } from "./pages/DashboardInicioPage";

import "./components/sections/sections.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pago" element={<CheckoutPage />} />
        <Route path="/exito" element={<ThankYouPage />} />
        <Route path="/crear-cuenta" element={<CreateAccountPage />} />
        <Route path="/dashboard-inicio" element={<DashboardInicioPage />} />
        {/* Fallback: cualquier ruta desconocida redirige al landing */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
