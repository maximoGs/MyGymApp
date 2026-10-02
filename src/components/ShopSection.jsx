import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { PRODUCTS } from '../data/gymData';
import { 
  ShoppingBag, 
  Star, 
  Check, 
  Sparkles, 
  Zap, 
  Plus, 
  ArrowUpRight,
  ShieldCheck,
  Flame
} from 'lucide-react';

export default function ShopSection() {
  const { addToCart, setIsCartOpen } = useGym();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'TODAS LAS FÓRMULAS' },
    { id: 'strength', label: 'FUERZA & CREATINAS' },
    { id: 'muscle', label: 'PROTEÍNAS ISOLATE' },
    { id: 'hydration', label: 'ELECTROLITOS' },
    { id: 'energy', label: 'ENFOQUE & PRE-WORKOUT' },
    { id: 'recovery', label: 'SUEÑO & MAGNESIO' },
    { id: 'health', label: 'OMEGA & LONGEVIDAD' },
    { id: 'gear', label: 'ACCESORIOS & GEAR' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.categoryKey === activeCategory);

  const handleInstantBuy = (product) => {
    addToCart(product, 1);
    setIsCartOpen(true);
  };

  return (
    <section id="tienda" className="py-24 relative overflow-hidden bg-[#07080a]">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ccff00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#00f0ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/30 text-xs font-mono text-[#ccff00] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>APOTECARIO & NUTRICIÓN BIOMÉDICA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              TIENDA DE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#85ff7a] to-[#00f0ff]">
                SUPLEMENTACIÓN & GEAR
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              Fórmulas limpias, sin rellenos innecesarios ni azúcares artificiales. Seleccionadas por fisiólogos para maximizar tu recuperación, masa muscular y longevidad.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all uppercase tracking-wider ${
                  activeCategory === c.id
                    ? 'bg-[#ccff00] text-black font-extrabold shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quality Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#141720] to-[#0e1015] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Pureza y Calidad Farmacéutica Garantizada</h4>
              <p className="text-xs text-gray-400">Todos nuestros lotes cuentan con certificados Creapure®, IFOS 5★ y materias primas sin aditivos sintéticos.</p>
            </div>
          </div>

          <div className="text-xs font-mono text-[#00f0ff] flex items-center gap-2">
            <span>PEDIDOS SEGUROS VINCULADOS A WHATSAPP</span>
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between rounded-2xl bg-[#0e1015] border border-white/10 overflow-hidden hover:border-[#ccff00]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-lg"
            >
              {/* Product Image */}
              <div className="relative h-56 w-full overflow-hidden bg-black/40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#ccff00] font-mono text-[10px] font-extrabold uppercase border border-[#ccff00]/30 shadow-md">
                    {product.badge}
                  </span>
                </div>

                {/* Size pill */}
                <div className="absolute bottom-2 left-3">
                  <span className="text-[10px] font-mono text-gray-300 bg-black/60 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                    {product.size}
                  </span>
                </div>
              </div>

              {/* Product Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-gray-500 uppercase text-[10px]">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-[#ccff00] text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-[#ccff00]" />
                      <span>{product.rating}</span>
                      <span className="text-gray-500 font-normal text-[10px]">({product.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="text-base font-display font-bold text-white group-hover:text-[#ccff00] transition-colors leading-snug line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-2">
                    {product.tagline}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1 pt-1">
                    {product.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-gray-400 truncate">
                        <Check className="w-3 h-3 text-[#00f0ff] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="pt-3 border-t border-white/10 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-mono text-gray-400">PRECIO:</span>
                    <span className="text-xl font-mono font-extrabold text-[#ccff00]">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="py-2.5 px-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5 text-[#ccff00]" />
                      <span>Agregar</span>
                    </button>

                    <button
                      onClick={() => handleInstantBuy(product)}
                      className="py-2.5 px-2 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-mono text-xs font-extrabold transition-colors flex items-center justify-center gap-1 shadow-[0_0_10px_rgba(204,255,0,0.2)]"
                    >
                      <span>Pedir Ya</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
