import React from 'react';
import { useGym } from '../context/GymContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast() {
  const { toast } = useGym();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-[#ccff00] shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-[#00f0ff] shrink-0" />
  };

  const borders = {
    success: 'border-[#ccff00]/40 shadow-[0_0_20px_rgba(204,255,0,0.2)]',
    error: 'border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.2)]',
    info: 'border-[#00f0ff]/40 shadow-[0_0_20px_rgba(0,240,255,0.2)]'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-sm w-full pointer-events-none">
      <div className={`pointer-events-auto flex items-center gap-3 p-4 rounded-xl bg-[#0e1015]/95 backdrop-blur-md border ${borders[toast.type] || borders.success}`}>
        {icons[toast.type] || icons.success}
        <p className="text-sm font-medium text-white flex-1">{toast.message}</p>
      </div>
    </div>
  );
}
