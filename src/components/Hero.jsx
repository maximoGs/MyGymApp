import React from 'react';
import { useGym } from '../context/GymContext';
import { 
  Zap, 
  ArrowUpRight, 
  Flame, 
  ShieldCheck, 
  Activity, 
  Clock, 
  Award,
  Sparkles,
  MessageCircle,
  Play
} from 'lucide-react';
import { ACTIVITIES } from '../data/gymData';

export default function Hero() {
  const { openBookingModal, sendDirectWhatsApp } = useGym();

  const handleQuickBook = () => {
    // Open modal with the flagship activity (Hyrox)
    openBookingModal(ACTIVITIES[0]);
  };

  const tickerItems = [
    "// HYROX OFFICIAL TRAINING HUB",
    "// CRYO & CONTRAST THERAPY A 3°C",
    "// CREAPURE® & WHEY HYDRO-ISOLATE",
    "// ENTRENAMIENTO BIOMECÁNICO 1:1",
    "// BIOHACKING & LONGEVIDAD ACTIVA",
    "// RESERVAS Y PEDIDOS DIRECTO POR WHATSAPP",
    "// MONITOREO CARDÍACO ZONA 5",
  ];

  return (
    <section className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-between overflow-hidden cyber-grid">
      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#ccff00]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Divergent Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tech Badges */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <span className="px-3 py-1 rounded-full bg-[#ccff00] text-black text-xs font-mono font-extrabold tracking-wider uppercase flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-black" />
                BIO-PERFORMANCE 2026
              </span>
              <span className="text-xs font-mono text-gray-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#00f0ff]" />
                Salud celular & Fuerza divergente
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
              REDEFINE TU <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#85ff7a] to-[#00f0ff] drop-shadow-[0_0_30px_rgba(204,255,0,0.3)]">
                BIOLOGÍA.
              </span>
              <br />
              DOMINA TU LÍMITE.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 max-w-xl font-normal leading-relaxed">
              El primer centro de entrenamiento donde la <strong className="text-white font-semibold">fuerza biomecánica</strong>, la <strong className="text-white font-semibold">recuperación térmica celular</strong> y la <strong className="text-[#ccff00] font-semibold">suplementación pura</strong> se orquestan en una sola experiencia. Reserva tus actividades y gestiona tus pedidos directo por WhatsApp.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleQuickBook}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#ccff00] text-black font-extrabold text-base transition-all duration-300 hover:bg-[#b8e600] hover:scale-[1.02] shadow-[0_0_25px_rgba(204,255,0,0.35)] active:scale-95"
              >
                <span>RESERVAR CLASE DE PRUEBA</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#tienda"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-sm transition-all hover:border-[#00f0ff]/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]"
              >
                <span>TIENDA DE SUPLEMENTOS</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#00f0ff]/20 text-[#00f0ff] font-mono font-bold">
                  8 FÓRMULAS
                </span>
              </a>
            </div>

            {/* Social Trust Indicators */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">1,450+</div>
                <div className="text-xs font-mono text-gray-400 uppercase mt-0.5">Socios Activos</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#ccff00]">3°C - 90°C</div>
                <div className="text-xs font-mono text-gray-400 uppercase mt-0.5">Cryo & Sauna</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#00f0ff]">100%</div>
                <div className="text-xs font-mono text-gray-400 uppercase mt-0.5">Vía WhatsApp</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Hero Holographic Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/10 to-transparent p-2 backdrop-blur-xl shadow-2xl">
              
              {/* Main Image with Gradient Overlay */}
              <div className="relative h-[480px] sm:h-[540px] rounded-2xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
                  alt="Kinetic Lab Athlete"
                  className="w-full h-full object-cover object-center filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-black/40 to-transparent" />

                {/* Floating Holographic Cards */}
                
                {/* Top Badge: Live Session */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                    <span className="text-xs font-mono text-white uppercase tracking-wider font-semibold">
                      SALA HYROX EN CURSO
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#ccff00] font-bold">ZONA 5 ATLETA</span>
                </div>

                {/* Bottom Highlight Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-[#0e1015]/90 backdrop-blur-md border border-white/10 text-left">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#00f0ff] font-bold">
                      PROTOCOL PROTO-01
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                      CUPOS DISPONIBLES
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mb-1">
                    Hyrox & Contrast Thermal Lab
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 mb-3">
                    60 minutos de desafío funcional seguido de inmersión en tinas frías para regeneración neuromuscular instantánea.
                  </p>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div className="flex items-center gap-1.5 text-xs text-gray-300">
                      <Clock className="w-3.5 h-3.5 text-[#ccff00]" />
                      <span>Hoy a las 19:00 hs</span>
                    </div>

                    <button
                      onClick={handleQuickBook}
                      className="px-3 py-1.5 rounded-lg bg-[#ccff00] text-black font-extrabold text-xs hover:bg-[#b8e600] transition-colors flex items-center gap-1"
                    >
                      <span>RESERVAR</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Decorative Floating Pill */}
            <div className="absolute -bottom-5 -left-6 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-[#141720]/95 border border-[#ccff00]/30 shadow-xl backdrop-blur-md">
              <div className="w-9 h-9 rounded-xl bg-[#ccff00]/10 flex items-center justify-center text-[#ccff00]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-left text-xs">
                <div className="font-mono text-gray-400 text-[10px]">RESERVA RÁPIDA</div>
                <div className="font-bold text-white">Sincronizado con WhatsApp</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Infinite Kinetic Ticker Banner */}
      <div className="w-full mt-12 py-3 bg-[#ccff00] overflow-hidden whitespace-nowrap border-y border-[#ccff00] select-none">
        <div className="animate-marquee flex items-center gap-8">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <span key={idx} className="text-black font-mono font-extrabold text-xs sm:text-sm tracking-widest uppercase flex items-center gap-2">
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
