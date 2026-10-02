import React, { useState } from 'react';
import { useGym } from '../context/GymContext';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  Tag, 
  Truck, 
  Store, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    cartSubtotal, 
    discountPercent, 
    discountAmount, 
    cartTotal, 
    promoCode, 
    applyPromoCode, 
    sendShopOrder,
    whatsAppNumber 
  } = useGym();

  const [deliveryMethod, setDeliveryMethod] = useState('pickup'); // 'pickup' | 'delivery'
  const [address, setAddress] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    applyPromoCode(couponInput);
    setCouponInput('');
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    if (!customerName.trim() || !customerPhone.trim()) {
      alert('Por favor introduce tu nombre y teléfono para procesar el pedido por WhatsApp');
      return;
    }

    sendShopOrder({
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      deliveryMethod,
      address: address.trim(),
      notes: orderNotes.trim()
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm transition-opacity">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0d0f15] border-l border-white/10 shadow-2xl flex flex-col justify-between text-left">
          
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#11141d]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold font-display text-white">Tu Carrito de Suplementos</h3>
                <span className="text-[11px] font-mono text-gray-400">
                  {cart.length} {cart.length === 1 ? 'producto' : 'productos'} seleccionados
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-display font-bold text-lg">Tu carrito está vacío</h4>
                  <p className="text-xs text-gray-400 max-w-xs">
                    Explora nuestra línea de nutrición deportiva, creatinas, electrolitos y gear para potenciar tus sesiones.
                  </p>
                </div>
                <a
                  href="#tienda"
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#ccff00] text-black font-bold text-xs font-mono tracking-wider hover:bg-[#b8e600] transition-colors"
                >
                  EXPLORAR TIENDA
                </a>
              </div>
            ) : (
              <>
                {/* Product Items */}
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10"
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="text-xs font-bold text-white leading-tight truncate">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-500 hover:text-red-400 p-1 transition-colors"
                            title="Eliminar"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        
                        <div className="text-[11px] font-mono text-gray-400">
                          {item.product.size}
                        </div>

                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs font-mono font-bold text-[#ccff00]">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>

                          <div className="flex items-center gap-2 bg-black/60 border border-white/10 rounded-lg px-2 py-0.5">
                            <button
                              onClick={() => updateQuantity(item.product.id, -1)}
                              className="text-gray-400 hover:text-white p-0.5"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-mono font-bold text-white min-w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, 1)}
                              className="text-gray-400 hover:text-white p-0.5"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyCoupon} className="pt-2 flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Código cupón (ej. KINETIC10)"
                      className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-xs text-white uppercase font-mono focus:border-[#ccff00] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono font-bold text-white transition-colors"
                  >
                    APLICAR
                  </button>
                </form>

                {discountPercent > 0 && (
                  <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/20 text-xs font-mono text-[#ccff00]">
                    <span>CUPÓN: {promoCode} (-{discountPercent}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                {/* Delivery Method Selector */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-mono text-gray-400 uppercase">
                    Modalidad de Entrega:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('pickup')}
                      className={`p-2.5 rounded-xl border text-xs text-left transition-all ${
                        deliveryMethod === 'pickup'
                          ? 'border-[#ccff00] bg-[#ccff00]/10 text-white font-bold'
                          : 'border-white/10 bg-black/40 text-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <Store className="w-3.5 h-3.5 text-[#ccff00]" />
                        <span>Retiro en Gym</span>
                      </div>
                      <span className="text-[10px] text-gray-500 font-normal block mt-0.5">En recepción (Gratis)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('delivery')}
                      className={`p-2.5 rounded-xl border text-xs text-left transition-all ${
                        deliveryMethod === 'delivery'
                          ? 'border-[#00f0ff] bg-[#00f0ff]/10 text-white font-bold'
                          : 'border-white/10 bg-black/40 text-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5 text-[#00f0ff]" />
                        <span>A Domicilio</span>
                      </div>
                      <span className="text-[10px] text-gray-500 font-normal block mt-0.5">Envío express</span>
                    </button>
                  </div>
                </div>

                {/* Customer Details Form */}
                <div className="space-y-2.5 pt-2 border-t border-white/10">
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Tu Nombre completo *"
                    className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-xs text-white focus:border-[#ccff00] focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Tu Número de WhatsApp *"
                    className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-xs text-white focus:border-[#ccff00] focus:outline-none"
                  />
                  {deliveryMethod === 'delivery' && (
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Dirección completa de entrega (Calle, Piso, Ciudad) *"
                      className="w-full px-3 py-2 rounded-xl bg-black/60 border border-[#00f0ff]/40 text-xs text-white focus:border-[#00f0ff] focus:outline-none"
                    />
                  )}
                  <input
                    type="text"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="Notas adicionales (ej. Horario de retiro / sabor deseado)"
                    className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-xs text-white focus:border-[#ccff00] focus:outline-none"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout Actions */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#11141d] space-y-3">
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal:</span>
                  <span>${cartSubtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#ccff00]">
                    <span>Descuento aplicado:</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm sm:text-base font-bold text-white pt-2 border-t border-white/10">
                  <span>TOTAL ESTIMADO:</span>
                  <span className="text-[#ccff00] font-mono text-lg">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-4 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-extrabold text-sm font-mono tracking-wider transition-all hover:scale-[1.01] shadow-[0_0_20px_rgba(37,211,102,0.35)] flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>FINALIZAR PEDIDO POR WHATSAPP</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Vinculado con WhatsApp oficial: +{whatsAppNumber}</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
