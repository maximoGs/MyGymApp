import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { X, MessageSquare, Phone, Check, RefreshCw, Sparkles, ShieldCheck } from 'lucide-react';
import { GYM_CONFIG } from '../data/gymData';

export default function WhatsAppConfigModal() {
  const { 
    isSettingsModalOpen, 
    setIsSettingsModalOpen, 
    whatsAppNumber, 
    updateWhatsAppNumber,
    sendDirectWhatsApp
  } = useGym();

  const [inputVal, setInputVal] = useState(whatsAppNumber);
  const [copied, setCopied] = useState(false);

  if (!isSettingsModalOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    updateWhatsAppNumber(inputVal);
    setIsSettingsModalOpen(false);
  };

  const handleReset = () => {
    setInputVal(GYM_CONFIG.defaultWhatsApp);
    updateWhatsAppNumber(GYM_CONFIG.defaultWhatsApp);
  };

  const handleTestMessage = () => {
    sendDirectWhatsApp("¡Hola Kinetic Lab! Este es un mensaje de prueba desde la web oficial para comprobar la vinculación del canal de WhatsApp. 🚀");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#0e1017] border border-white/10 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsSettingsModalOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00]">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-mono text-[#ccff00] tracking-wider uppercase">VINCULACIÓN DIRECTA</div>
            <h3 className="text-xl font-bold font-display text-white">Canal de Pedidos WhatsApp</h3>
          </div>
        </div>

        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
          Todos los pedidos de la tienda de suplementos, reservas de actividades y altas de membresías se canalizan directamente a este número telefónico con un mensaje formateado y estructurado automáticamente.
        </p>

        {/* Form */}
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
              Número de WhatsApp (con código de país, sin espacios ni '+')
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Phone className="w-4 h-4 text-[#ccff00]" />
              </div>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ejemplo: 34600123456 o 5491123456789"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white font-mono text-sm focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-colors"
                required
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 font-mono">
              Formato internacional: [Código País][Código Área][Número]. Ej: España (34600...), Argentina (54911...), México (521...), Colombia (573...).
            </p>
          </div>

          {/* Test Link Button */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleTestMessage}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold text-white transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#00f0ff]" />
              Probar Envío de Test
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-gray-400 hover:text-white transition-colors"
              title="Restablecer al número demo"
            >
              <RefreshCw className="w-4 h-4" />
              Reset
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Guardado en este navegador</span>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsSettingsModalOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#ccff00] text-black font-bold text-sm hover:bg-[#b8e600] transition-transform active:scale-95 flex items-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.3)]"
              >
                <Check className="w-4 h-4" />
                Guardar Número
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
