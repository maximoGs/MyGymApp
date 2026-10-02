import React, { useState, useEffect } from 'react';
import { useGym } from '../context/GymContext';
import { 
  Zap, 
  ShoppingBag, 
  MessageCircle, 
  Settings, 
  Menu, 
  X, 
  Activity, 
  Flame, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GYM_CONFIG } from '../data/gymData';

export default function Navbar() {
  const { 
    totalItemsCount, 
    cartTotal, 
    setIsCartOpen, 
    setIsSettingsModalOpen, 
    sendDirectWhatsApp,
    whatsAppNumber 
  } = useGym();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Actividades', href: '#actividades' },
    { name: 'Novedades', href: '#novedades', highlight: true },
    { name: 'Suplementos', href: '#tienda' },
    { name: 'Bio-Matcher', href: '#bio-matcher' },
    { name: 'Membresías', href: '#planes' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#08090c]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#ccff00] to-[#00f0ff] p-[2px] transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#08090c] rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#ccff00] fill-[#ccff00]/20 transition-transform group-hover:rotate-12" />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                  KINETIC <span className="text-[#ccff00] text-sm font-mono tracking-widest">//LAB</span>
                </span>
                <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase -mt-1 hidden sm:block">
                  Human Performance & Biohack
                </span>
              </div>
            </a>

            {/* Center: Live Gym Status Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]"></span>
              </span>
              <span className="text-gray-300">AFORO EN VIVO:</span>
              <span className="text-[#ccff00] font-bold">{GYM_CONFIG.currentCapacityPercent}%</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">ABIERTO HASTA 23:00</span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    link.highlight 
                      ? 'text-[#ccff00] hover:bg-[#ccff00]/10 flex items-center gap-1.5' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.highlight && <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" />}
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* WhatsApp Config / Settings Trigger */}
              <button
                onClick={() => setIsSettingsModalOpen(true)}
                className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-[#ccff00] transition-colors"
                title="Configurar número de WhatsApp para pedidos"
                aria-label="Ajustes de WhatsApp"
              >
                <Settings className="w-4 h-4" />
              </button>

              {/* Shopping Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-[#141720] hover:bg-[#1a1e2a] border border-white/10 text-white transition-all group hover:border-[#ccff00]/40"
              >
                <ShoppingBag className="w-4 h-4 text-gray-300 group-hover:text-[#ccff00] transition-colors" />
                <span className="text-xs font-mono font-bold hidden sm:inline">
                  {cartTotal > 0 ? `$${cartTotal.toFixed(0)}` : 'TIENDA'}
                </span>
                {totalItemsCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#ccff00] text-black text-xs font-bold flex items-center justify-center animate-scale-in">
                    {totalItemsCount}
                  </span>
                )}
              </button>

              {/* Direct WhatsApp Contact Button */}
              <button
                onClick={() => sendDirectWhatsApp()}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] font-semibold text-xs font-mono tracking-wider transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP</span>
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono mb-4">
              <span className="text-gray-400">AFORO EN SALA:</span>
              <span className="text-[#ccff00] font-bold">{GYM_CONFIG.currentCapacityPercent}%</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5 text-lg font-display font-semibold text-white hover:border-[#ccff00]/40 transition-colors"
              >
                <span className="flex items-center gap-2">
                  {link.highlight && <Sparkles className="w-4 h-4 text-[#ccff00]" />}
                  {link.name}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-500" />
              </a>
            ))}
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                sendDirectWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#25D366] text-black font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Escribir por WhatsApp al Gym
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsSettingsModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 text-gray-300 text-xs font-mono"
            >
              <Settings className="w-4 h-4" />
              Configurar WhatsApp ({whatsAppNumber})
            </button>
          </div>
        </div>
      )}
    </>
  );
}
