import React from 'react';
import { useGym } from '../context/GymContext';
import { X, Calendar, Clock, Sparkles, MessageCircle, ArrowRight, Share2 } from 'lucide-react';

export default function NewsModal() {
  const { 
    selectedNewsArticle, 
    isNewsModalOpen, 
    closeNewsModal, 
    sendNewsInquiry,
    openBookingModal,
    setIsCartOpen 
  } = useGym();

  if (!isNewsModalOpen || !selectedNewsArticle) return null;

  const article = selectedNewsArticle;

  const handleAction = () => {
    if (article.actionType === 'shop') {
      closeNewsModal();
      setIsCartOpen(true);
      const shopEl = document.getElementById('tienda');
      if (shopEl) shopEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      sendNewsInquiry(article);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e1017] border border-white/15 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-black/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={closeNewsModal}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-black text-gray-300 hover:text-white transition-colors border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#ccff00] text-black font-mono font-extrabold text-xs tracking-wider uppercase">
              {article.categoryTag}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-gray-300 font-mono text-xs border border-white/10">
              {article.date}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#00f0ff]" />
                {article.readTime}
              </span>
              <span>•</span>
              <span className="text-[#00f0ff] uppercase">{article.category}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
              {article.title}
            </h2>
          </div>

          <p className="text-base text-gray-300 leading-relaxed font-normal">
            {article.content}
          </p>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="text-xs font-mono text-[#ccff00] uppercase tracking-wider font-bold">
              ¿Por qué es relevante para ti?
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              En Kinetic Lab innovamos de forma continua para darte ventajas biológicas reales. Ya seas socio activo o quieras visitarnos por primera vez, este avance está disponible para ti desde hoy.
            </p>
          </div>

          {/* CTA Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAction}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-sm font-mono tracking-wider transition-all hover:scale-[1.01] shadow-[0_0_20px_rgba(37,211,102,0.25)]"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>{article.actionText}</span>
            </button>

            <button
              onClick={closeNewsModal}
              className="px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm font-semibold transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
