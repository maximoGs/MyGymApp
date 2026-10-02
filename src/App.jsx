import React from 'react';
import { GymProvider, useGym } from './context/GymContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import ActivitiesSection from './components/ActivitiesSection';
import ShopSection from './components/ShopSection';
import BioAdvisor from './components/BioAdvisor';
import MembershipsSection from './components/MembershipsSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ActivityModal from './components/ActivityModal';
import NewsModal from './components/NewsModal';
import WhatsAppConfigModal from './components/WhatsAppConfigModal';
import Toast from './components/Toast';
import { MessageCircle } from 'lucide-react';

function GymAppContent() {
  const { sendDirectWhatsApp } = useGym();

  return (
    <div className="min-h-screen bg-[#07080a] text-[#e2e8f0] relative selection:bg-[#ccff00] selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Main Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Sección Novedades Destacada */}
        <NewsSection />

        {/* 3. Suscripción y Reserva a Actividades */}
        <ActivitiesSection />

        {/* 4. Tienda de Suplementos y Salud */}
        <ShopSection />

        {/* 5. Bio-Matcher Recomendador Interactivo */}
        <BioAdvisor />

        {/* 6. Membresías y Planes */}
        <MembershipsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <CartDrawer />
      <ActivityModal />
      <NewsModal />
      <WhatsAppConfigModal />
      <Toast />

      {/* Floating Action Button for Immediate WhatsApp Help */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => sendDirectWhatsApp("¡Hola! Me encuentro navegando en la web de Kinetic Lab y deseo hacer una consulta.")}
          className="group flex items-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black font-mono font-bold text-xs tracking-wider shadow-[0_0_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-black" />
          <span className="hidden sm:inline">¿Hablamos por WhatsApp?</span>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <GymProvider>
      <GymAppContent />
    </GymProvider>
  );
}
