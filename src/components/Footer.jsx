import React from 'react';
import { useGym } from '../context/GymContext';
import { GYM_CONFIG } from '../data/gymData';
import { 
  Zap, 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  ArrowUp, 
  ShieldCheck,
  Settings,
  Globe
} from 'lucide-react';

export default function Footer() {
  const { whatsAppNumber, sendDirectWhatsApp, setIsSettingsModalOpen } = useGym();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050608] border-t border-white/10 pt-16 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ccff00] to-[#00f0ff] p-[2px]">
                <div className="w-full h-full bg-[#08090c] rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#ccff00] fill-[#ccff00]/20" />
                </div>
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white">
                KINETIC <span className="text-[#ccff00] font-mono">//LAB</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Donde la ciencia biomédica, el alto rendimiento biomecánico y la nutrición limpia convergen. Reserva tus clases y recibe tus pedidos con 1 click a través de WhatsApp.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => sendDirectWhatsApp()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-black font-mono font-extrabold text-xs tracking-wider hover:bg-[#20ba59] transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>CHAT WHATSAPP</span>
              </button>

              <button
                onClick={() => setIsSettingsModalOpen(true)}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors"
                title="Configurar número receptor de WhatsApp"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#ccff00] font-bold">
              UBICACIÓN & SEDE
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <span>{GYM_CONFIG.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <span className="font-mono">+{whatsAppNumber}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{GYM_CONFIG.schedule}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-bold">
              ECOSISTEMA
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-mono">
              <li><a href="#actividades" className="hover:text-white transition-colors">→ Clases & Hyrox Protocol</a></li>
              <li><a href="#novedades" className="hover:text-white transition-colors">→ Novedades & Radar</a></li>
              <li><a href="#tienda" className="hover:text-white transition-colors">→ Suplementación Creapure®</a></li>
              <li><a href="#bio-matcher" className="hover:text-white transition-colors">→ Bio-Matcher Interactivo</a></li>
              <li><a href="#planes" className="hover:text-white transition-colors">→ Membresías & Pases</a></li>
            </ul>
          </div>

          {/* Highlights & Guarantee */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              FILOSOFÍA KINETIC
            </h4>
            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-1.5 text-gray-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Seguridad Biomecánica</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Entrenadores titulados, control de cargas personal y asesoría de nutrición sin sustancias dopantes.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © 2026 KINETIC LAB. Todos los derechos reservados. Diseñado para alto impacto y salud integral.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gray-400">
              WhatsApp Activo: <strong className="text-[#ccff00]">+{whatsAppNumber}</strong>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
