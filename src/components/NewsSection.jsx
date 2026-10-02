import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { FEATURED_NEWS } from '../data/gymData';
import { 
  Sparkles, 
  ArrowUpRight, 
  Clock, 
  MessageCircle, 
  Flame, 
  Bell,
  ArrowRight
} from 'lucide-react';

export default function NewsSection() {
  const { openNewsModal, sendNewsInquiry } = useGym();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'TODAS' },
    { id: 'INSTALACIONES & BIENESTAR', label: 'ZONAS & SALUD' },
    { id: 'EVENTOS & COMPETICIÓN', label: 'EVENTOS' },
    { id: 'TIENDA & NUTRICIÓN', label: 'TIENDA' },
    { id: 'FORMACIÓN & SALUD', label: 'MASTERCLASSES' }
  ];

  const filteredNews = activeFilter === 'all' 
    ? FEATURED_NEWS 
    : FEATURED_NEWS.filter(item => item.category === activeFilter);

  // The main flagship news article
  const flagship = FEATURED_NEWS[0];
  const secondaryNews = FEATURED_NEWS.slice(1);

  return (
    <section id="novedades" className="py-24 relative overflow-hidden bg-[#07080a]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#ccff00]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 text-xs font-mono text-[#ccff00] font-bold uppercase tracking-wider">
              <Bell className="w-3.5 h-3.5" />
              <span>RADAR DE NOVEDADES & COMUNIDAD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              LO ÚLTIMO EN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-[#00f0ff]">
                KINETIC LAB
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              Nuevas zonas biomecánicas, lanzamientos de suplementación de grado farmacéutico, competiciones y eventos exclusivos para socios.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all uppercase tracking-wider ${
                  activeFilter === f.id
                    ? 'bg-[#ccff00] text-black font-extrabold shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Highlighted Flagship Banner (If 'all' or matching category) */}
        {(activeFilter === 'all' || flagship.category === activeFilter) && (
          <div className="mb-10 rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-[#0e1017] via-[#12151f] to-[#0e1017] p-1 sm:p-2 shadow-2xl group text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Flagship Image */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl overflow-hidden">
                <img 
                  src={flagship.image} 
                  alt={flagship.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#ccff00] text-black text-xs font-mono font-black uppercase tracking-wider shadow-lg">
                    {flagship.featuredBadge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono border border-white/10">
                    {flagship.date}
                  </span>
                </div>
              </div>

              {/* Flagship Description */}
              <div className="lg:col-span-5 p-4 sm:p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{flagship.readTime}</span>
                  <span>•</span>
                  <span>{flagship.category}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
                  {flagship.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {flagship.excerpt}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => sendNewsInquiry(flagship)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-mono font-bold text-xs tracking-wider transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(37,211,102,0.3)]"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>CONSULTAR POR WHATSAPP</span>
                  </button>

                  <button
                    onClick={() => openNewsModal(flagship)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs border border-white/10 transition-colors"
                  >
                    <span>LEER ARTÍCULO</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#ccff00]" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Secondary News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredNews
            .filter(item => activeFilter === 'all' ? item.id !== flagship.id : true)
            .map((item) => (
              <div 
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#0e1015] border border-white/10 overflow-hidden hover:border-[#ccff00]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                {/* Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[#ccff00] font-mono text-[10px] font-extrabold uppercase border border-[#ccff00]/30">
                      {item.categoryTag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400">
                      <Clock className="w-3 h-3 text-[#00f0ff]" />
                      <span>{item.readTime}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>

                    <h4 className="text-lg font-display font-bold text-white group-hover:text-[#ccff00] transition-colors leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs text-gray-300 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                    <button
                      onClick={() => openNewsModal(item)}
                      className="text-xs font-mono font-bold text-white hover:text-[#ccff00] flex items-center gap-1 transition-colors"
                    >
                      <span>Ver más</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => sendNewsInquiry(item)}
                      className="p-2 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-xs font-mono transition-colors flex items-center gap-1"
                      title="Preguntar por WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">WhatsApp</span>
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
