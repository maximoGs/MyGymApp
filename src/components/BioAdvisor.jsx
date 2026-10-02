import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { BIO_RECOMMENDER_GOALS, ACTIVITIES, PRODUCTS } from '../data/gymData';
import { 
  Dumbbell, 
  Zap, 
  HeartPulse, 
  Flame, 
  Sparkles, 
  ArrowRight, 
  Check, 
  ShoppingBag, 
  ArrowUpRight 
} from 'lucide-react';

export default function BioAdvisor() {
  const { openBookingModal, addToCart, setIsCartOpen, showToast } = useGym();
  const [selectedGoalId, setSelectedGoalId] = useState(BIO_RECOMMENDER_GOALS[0].id);

  const goalIcons = {
    strength: <Dumbbell className="w-5 h-5 text-[#ccff00]" />,
    hyrox: <Zap className="w-5 h-5 text-[#00f0ff]" />,
    longevity: <HeartPulse className="w-5 h-5 text-emerald-400" />,
    fatloss: <Flame className="w-5 h-5 text-amber-400" />
  };

  const currentGoal = BIO_RECOMMENDER_GOALS.find(g => g.id === selectedGoalId) || BIO_RECOMMENDER_GOALS[0];
  const matchedActivity = ACTIVITIES.find(a => a.id === currentGoal.recommendedActivityId);
  const matchedProducts = PRODUCTS.filter(p => currentGoal.recommendedProducts.includes(p.id));

  const handleAddFullStack = () => {
    matchedProducts.forEach(prod => {
      addToCart(prod, 1);
    });
    showToast(`Stack completo (${matchedProducts.length} suplementos) añadido al carrito`, 'success');
    setIsCartOpen(true);
  };

  return (
    <section id="bio-matcher" className="py-24 relative overflow-hidden bg-[#08090c] border-y border-white/5">
      {/* Background Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 text-xs font-mono text-[#ccff00] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BIO-ALGORITMO DE EMPAREJAMIENTO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            DESCUBRE TU PROTOCOLO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#85ff7a] to-[#00f0ff]">
              ACTIVIDAD + SUPLEMENTACIÓN
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Selecciona tu objetivo biológico prioritario y obtén la combinación sinérgica recomendada por nuestros preparadores físicos y fisiólogos.
          </p>
        </div>

        {/* Goal Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {BIO_RECOMMENDER_GOALS.map((goal) => {
            const isSelected = goal.id === selectedGoalId;
            return (
              <button
                key={goal.id}
                onClick={() => setSelectedGoalId(goal.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#141722] border-[#ccff00] shadow-[0_0_25px_rgba(204,255,0,0.15)] -translate-y-1'
                    : 'bg-[#0d0f15] border-white/10 hover:border-white/20 text-gray-300'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#ccff00]/10 rounded-bl-full pointer-events-none" />
                )}
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                  {goalIcons[goal.id]}
                </div>
                <h3 className={`text-sm font-bold font-display ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                  {goal.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Matched Protocol Result Panel */}
        <div className="rounded-3xl bg-[#0f121a] border border-white/15 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Strategy column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ccff00] font-bold">
                  // ESTRATEGIA RECOMENDADA
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  {currentGoal.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed pt-1">
                  {currentGoal.strategyText}
                </p>
              </div>

              {/* Recommended Activity Card */}
              {matchedActivity && (
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                  <div className="text-[11px] font-mono text-[#00f0ff] uppercase font-bold flex items-center gap-1.5">
                    <span>ACTIVIDAD IDEAL:</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <img
                      src={matchedActivity.image}
                      alt={matchedActivity.title}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {matchedActivity.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {matchedActivity.duration} • Coach {matchedActivity.coach}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => openBookingModal(matchedActivity)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Reservar esta sesión de prueba</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#ccff00]" />
                  </button>
                </div>
              )}
            </div>

            {/* Recommended Products Stack column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-bold">
                  // STACK DE SUPLEMENTOS RECOMENDADO ({matchedProducts.length} FÓRMULAS)
                </span>
                <button
                  onClick={handleAddFullStack}
                  className="px-3.5 py-1.5 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-mono text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(204,255,0,0.25)]"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Añadir Stack Completo</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {matchedProducts.map((p) => (
                  <div
                    key={p.id}
                    className="p-3 rounded-2xl bg-black/50 border border-white/10 flex flex-col justify-between space-y-2 hover:border-[#ccff00]/40 transition-colors"
                  >
                    <div className="space-y-1.5">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-24 rounded-lg object-cover"
                      />
                      <span className="text-[10px] font-mono text-[#ccff00] block uppercase font-bold truncate">
                        {p.category}
                      </span>
                      <h5 className="text-xs font-bold text-white line-clamp-2 leading-snug">
                        {p.name}
                      </h5>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-white">${p.price.toFixed(2)}</span>
                      <button
                        onClick={() => addToCart(p, 1)}
                        className="p-1.5 rounded-lg bg-white/10 hover:bg-[#ccff00] hover:text-black text-gray-300 transition-colors"
                        title="Añadir al carrito"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
