import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { X, Calendar, Clock, Flame, User, Phone, Zap, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ActivityModal() {
  const { 
    selectedActivity, 
    isBookingModalOpen, 
    closeBookingModal, 
    sendBookingRequest 
  } = useGym();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [passType, setPassType] = useState('Clase de Prueba Gratuita (Primer acceso)');
  const [notes, setNotes] = useState('');

  if (!isBookingModalOpen || !selectedActivity) return null;

  const activity = selectedActivity;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    sendBookingRequest({
      activity,
      slot: selectedSlot || (activity.scheduleSlots[0] ? `${activity.scheduleSlots[0].day} - ${activity.scheduleSlots[0].time}` : 'A convenir'),
      name: name.trim(),
      phone: phone.trim(),
      passType,
      notes: notes.trim()
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0e1017] border border-white/15 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Preview */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden">
          <img 
            src={activity.image} 
            alt={activity.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-black/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={closeBookingModal}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-gray-300 hover:text-white transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Info pill */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#ccff00] text-black font-mono font-extrabold text-xs uppercase">
              {activity.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 font-mono text-xs border border-white/10">
              {activity.spotsLeft} cupos libres
            </span>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
              {activity.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Coach especialista: <span className="text-white font-semibold">{activity.coach}</span> ({activity.coachRole})
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
            <div>
              <div className="text-[10px] font-mono text-gray-400 uppercase">DURACIÓN</div>
              <div className="text-sm font-bold text-white mt-0.5">{activity.duration}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-gray-400 uppercase">INTENSIDAD</div>
              <div className="text-sm font-bold text-[#ccff00] mt-0.5 flex items-center justify-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Zap 
                    key={i} 
                    className={`w-3 h-3 ${i < activity.intensity ? 'fill-[#ccff00] text-[#ccff00]' : 'text-gray-600'}`} 
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-gray-400 uppercase">CONSUMO EST.</div>
              <div className="text-sm font-bold text-[#00f0ff] mt-0.5">{activity.calories}</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Slot Picker */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2 font-bold">
                1. Selecciona Turno / Horario Disponible:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activity.scheduleSlots.map((slot, idx) => {
                  const val = `${slot.day} (${slot.time})`;
                  const isSelected = selectedSlot === val || (!selectedSlot && idx === 0);
                  return (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setSelectedSlot(val)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all ${
                        isSelected 
                          ? 'border-[#ccff00] bg-[#ccff00]/10 text-white shadow-[0_0_10px_rgba(204,255,0,0.15)]' 
                          : 'border-white/10 bg-black/40 text-gray-400 hover:text-white hover:border-white/20'
                      }`}
                    >
                      <div className="font-bold text-white flex items-center justify-between">
                        <span>{slot.day}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00]" />}
                      </div>
                      <div className="font-mono text-[11px] text-gray-400 mt-1">{slot.time}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pass Type */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2 font-bold">
                2. Tipo de Inscripción:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  'Clase de Prueba Gratuita',
                  'Sesión Suelta ($18)',
                  'Suscripción Mensual Pro'
                ].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setPassType(type)}
                    className={`p-3 rounded-xl text-center border text-xs transition-all ${
                      passType === type
                        ? 'border-[#00f0ff] bg-[#00f0ff]/10 text-white font-bold'
                        : 'border-white/10 bg-black/40 text-gray-400 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* User Data */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                  Tu Nombre y Apellido:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <User className="w-4 h-4 text-[#ccff00]" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Lucas Rossi"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs sm:text-sm focus:border-[#ccff00] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                  Tu Teléfono / WhatsApp:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <Phone className="w-4 h-4 text-[#00f0ff]" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. +34 612 345 678"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-black/60 border border-white/15 text-white text-xs sm:text-sm focus:border-[#00f0ff] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                Notas opcionales (Nivel actual, lesiones o dudas):
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="Ej. Es mi primera vez entrenando Hyrox, me gustaría una inducción previa."
                className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white text-xs focus:border-[#ccff00] focus:outline-none resize-none"
              />
            </div>

            {/* Submit via WhatsApp Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-sm sm:text-base font-mono tracking-wider transition-all hover:scale-[1.01] shadow-[0_0_25px_rgba(37,211,102,0.35)] flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>CONFIRMAR Y ENVIAR RESERVA POR WHATSAPP</span>
              </button>
              <p className="text-center text-[11px] font-mono text-gray-500 mt-2">
                Al presionar, se abrirá WhatsApp con el mensaje estructurado para que el equipo de Kinetic Lab confirme tu plaza de inmediato.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
