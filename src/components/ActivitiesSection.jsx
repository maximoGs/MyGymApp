import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { ACTIVITIES } from '../data/gymData';
import { 
  Zap, 
  Clock, 
  Flame, 
  Users, 
  Check, 
  ArrowUpRight, 
  Activity, 
  Calendar,
  Sparkles,
  ShieldAlert
} from 'lucide-react';

export default function ActivitiesSection() {
  const { openBookingModal } = useGym();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'TODAS LAS ACTIVIDADES' },
    { id: 'endurance', label: 'RESISTENCIA & HYROX' },
    { id: 'recovery', label: 'BIOHACKING & RECOVERY' },
    { id: 'strength', label: 'FUERZA BIOMECÁNICA' },
    { id: 'mobility', label: 'MOVILIDAD & FLOW' },
    { id: 'combat', label: 'COMBATE' }
  ];

  const filteredActivities = selectedCategory === 'all'
    ? ACTIVITIES
    : ACTIVITIES.filter(a => a.categoryKey === selectedCategory);

  return (
    <section id="actividades" className="py-24 relative overflow-hidden bg-[#08090c]">
      {/* Decorative Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#ccff00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] font-bold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              <span>SISTEMA DE ENTRENAMIENTO BIOMÉDICO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              ACTIVIDADES & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#85ff7a] to-[#ccff00]">
                SESIONES GUIADAS
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              Protocolos diseñados para desatar adaptaciones biológicas concretas: hipertrofia inteligente, VO2 Max, resiliencia nerviosa y longevidad celular.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all uppercase tracking-wider ${
                  selectedCategory === cat.id
                    ? 'bg-[#00f0ff] text-black font-extrabold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-[#0f1118] border border-white/10 overflow-hidden hover:border-[#ccff00]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              {/* Media Thumbnail */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1118] via-black/30 to-transparent" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 flex gap-2 items-center">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#ccff00] font-mono text-[11px] font-black tracking-wider uppercase border border-[#ccff00]/30">
                    {act.category}
                  </span>
                </div>

                {/* Spots Alert */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2.5 py-1 rounded-full font-mono text-[10px] font-bold uppercase backdrop-blur-md border ${
                    act.spotsLeft <= 2 
                      ? 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse' 
                      : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                  }`}>
                    {act.spotsLeft <= 2 ? `¡ÚLTIMOS ${act.spotsLeft} CUPOS!` : `${act.spotsLeft} CUPOS DISPONIBLES`}
                  </span>
                </div>

                {/* Bottom Stats Floating inside Image */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-gray-300">
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-[#00f0ff]" />
                    <span>{act.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                    <Flame className="w-3.5 h-3.5 text-[#ccff00]" />
                    <span>{act.calories}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  {/* Intensity Bolt Rating */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-gray-400 uppercase">
                      INTENSIDAD BIOLÓGICA:
                    </span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Zap
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < act.intensity 
                              ? 'fill-[#ccff00] text-[#ccff00]' 
                              : 'text-gray-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-extrabold text-white group-hover:text-[#ccff00] transition-colors leading-tight">
                    {act.title}
                  </h3>

                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                    {act.shortDesc}
                  </p>

                  {/* Benefits Bullets */}
                  <div className="space-y-1.5 pt-2">
                    {act.benefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <Check className="w-3.5 h-3.5 text-[#ccff00] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coach & Reservation Action */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="text-left">
                      <span className="text-[10px] font-mono text-gray-500 block uppercase">HEAD COACH</span>
                      <span className="font-semibold text-white">{act.coach}</span>
                    </div>
                    <span className="text-right text-[11px] font-mono text-[#00f0ff]">
                      {act.pricing}
                    </span>
                  </div>

                  <button
                    onClick={() => openBookingModal(act)}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs font-mono tracking-wider transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(204,255,0,0.25)] flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(204,255,0,0.4)]"
                  >
                    <span>RESERVAR / SUSCRIBIRME</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
