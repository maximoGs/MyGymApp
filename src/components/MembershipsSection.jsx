import React from 'react';
import { useGym } from '../context/GymContext';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { Check, Zap, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';

export default function MembershipsSection() {
  const { sendMembershipInquiry } = useGym();

  return (
    <section id="planes" className="py-24 relative overflow-hidden bg-[#07080a]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ccff00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>ACCESO TOTAL // SUSCRIPCIONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            ELIGE TU NIVEL DE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#85ff7a] to-[#ccff00]">
              EVOLUCIÓN FÍSICA
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Membresías transparentes, sin costes ocultos ni permanencias forzadas. Todas gestionables y confirmables directamente por WhatsApp.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#141826] to-[#0e1017] border-2 border-[#ccff00] shadow-[0_0_35px_rgba(204,255,0,0.18)] lg:-translate-y-3'
                  : 'bg-[#0d0f15] border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Badge */}
              <div className="flex justify-between items-center mb-6">
                <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-extrabold uppercase tracking-wider ${
                  plan.popular 
                    ? 'bg-[#ccff00] text-black shadow-md' 
                    : 'bg-white/10 text-gray-300'
                }`}>
                  {plan.badge}
                </span>

                {plan.popular && (
                  <span className="text-[11px] font-mono text-[#ccff00] flex items-center gap-1 font-bold">
                    <Sparkles className="w-3 h-3" />
                    RECOMENDADO
                  </span>
                )}
              </div>

              {/* Title & Price */}
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="text-2xl font-display font-extrabold text-white">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    {plan.tagline}
                  </p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-mono font-extrabold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    / {plan.period}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 space-y-3.5 mb-8 border-t border-white/10 pt-6">
                {plan.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <div className="w-4 h-4 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#ccff00]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button linked to WhatsApp */}
              <button
                onClick={() => sendMembershipInquiry(plan)}
                className={`w-full py-4 px-4 rounded-2xl font-bold font-mono text-xs sm:text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-[#ccff00] text-black hover:bg-[#b8e600] shadow-[0_0_20px_rgba(204,255,0,0.35)] hover:scale-[1.02]'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>{plan.ctaText}</span>
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
