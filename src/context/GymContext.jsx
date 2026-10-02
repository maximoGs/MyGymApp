import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { GYM_CONFIG } from '../data/gymData';

const GymContext = createContext();

export function GymProvider({ children }) {
  // WhatsApp Number Configuration (Persisted)
  const [whatsAppNumber, setWhatsAppNumber] = useState(() => {
    const saved = localStorage.getItem('kinetic_whatsapp_number');
    return saved || GYM_CONFIG.defaultWhatsApp;
  });

  // Shopping Cart State (Persisted)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('kinetic_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  // Modals state
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const [selectedNewsArticle, setSelectedNewsArticle] = useState(null);
  const [isNewsModalOpen, setIsNewsModalOpen] = useState(false);

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  // Toast notifications
  const [toast, setToast] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem('kinetic_cart', JSON.stringify(cart));
  }, [cart]);

  // Sync WhatsApp number to localStorage
  const updateWhatsAppNumber = (num) => {
    // clean number: keep only digits
    const cleaned = num.replace(/[^0-9]/g, '');
    setWhatsAppNumber(cleaned);
    localStorage.setItem('kinetic_whatsapp_number', cleaned);
    showToast('Número de WhatsApp del Gimnasio actualizado', 'info');
  };

  const showToast = (message, type = 'success') => {
    setToast({ id: Date.now(), message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Cart operations
  const addToCart = (product, quantity = 1, options = {}) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity
        };
        return next;
      }
      return [...prev, { product, quantity, options }];
    });

    showToast(`"${product.name.split(' ')[0]}..." añadido al carrito`, 'success');
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Producto eliminado del carrito', 'info');
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
    setPromoCode('');
    setDiscountPercent(0);
  };

  const applyPromoCode = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'KINETIC10' || clean === 'BIOWELLNESS') {
      setPromoCode(clean);
      setDiscountPercent(10);
      showToast('¡Cupón aplicado! 10% de descuento concedido', 'success');
      return true;
    } else if (clean === 'ELITE20') {
      setPromoCode(clean);
      setDiscountPercent(20);
      showToast('¡Cupón VIP aplicado! 20% de descuento concedido', 'success');
      return true;
    } else {
      showToast('Cupón no válido o expirado', 'error');
      return false;
    }
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = (cartSubtotal * discountPercent) / 100;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Modal openers
  const openBookingModal = (activity) => {
    setSelectedActivity(activity);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedActivity(null);
  };

  const openNewsModal = (article) => {
    setSelectedNewsArticle(article);
    setIsNewsModalOpen(true);
  };

  const closeNewsModal = () => {
    setIsNewsModalOpen(false);
    setSelectedNewsArticle(null);
  };

  // WhatsApp Message Builders & Dispatchers
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ccff00', '#00f0ff', '#ffffff']
    });
  };

  // Helper to open WhatsApp with pre-formatted text
  const openWhatsAppUrl = (text) => {
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${whatsAppNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // 1. WhatsApp for Activity Booking / Class Subscription
  const sendBookingRequest = ({ activity, slot, name, phone, passType, notes }) => {
    const message = 
`⚡ *RESERVA DE ACTIVIDAD // KINETIC LAB*
━━━━━━━━━━━━━━━━━━━━
🏋️ *Actividad:* ${activity.title}
👤 *Cliente:* ${name}
📱 *Contacto:* ${phone}
📅 *Horario Seleccionado:* ${slot || 'A convenir con recepción'}
🎟️ *Modalidad:* ${passType}
${notes ? `📝 *Observaciones:* ${notes}\n` : ''}━━━━━━━━━━━━━━━━━━━━
Hola equipo de Kinetic Lab! Deseo confirmar mi lugar para esta sesión. ¿Me indican los detalles para el acceso? Muchas gracias!`;

    triggerConfetti();
    openWhatsAppUrl(message);
    closeBookingModal();
    showToast('¡Redirigiendo a WhatsApp para confirmar tu reserva!', 'success');
  };

  // 2. WhatsApp for Supplement Shop Checkout
  const sendShopOrder = ({ customerName, customerPhone, deliveryMethod, address, notes }) => {
    if (cart.length === 0) return;

    let itemsList = cart.map((item) => {
      const lineTotal = (item.product.price * item.quantity).toFixed(2);
      return `• ${item.quantity}x *${item.product.name}* ($${lineTotal})`;
    }).join('\n');

    const discountLine = discountPercent > 0 
      ? `\n🎟️ *Descuento (${promoCode}):* -$${discountAmount.toFixed(2)}` 
      : '';

    const message = 
`🛒 *PEDIDO TIENDA SUPLEMENTOS // KINETIC LAB*
━━━━━━━━━━━━━━━━━━━━
👤 *Cliente:* ${customerName}
📱 *Teléfono:* ${customerPhone}
📍 *Modalidad:* ${deliveryMethod === 'pickup' ? 'Retiro en Recepción del Gym' : 'Envío a Domicilio'}
${deliveryMethod === 'delivery' && address ? `🏠 *Dirección de Entrega:* ${address}\n` : ''}━━━━━━━━━━━━━━━━━━━━
📦 *DETALLE DEL PEDIDO:*
${itemsList}
${discountLine}
━━━━━━━━━━━━━━━━━━━━
💰 *TOTAL A PAGAR: $${cartTotal.toFixed(2)}*
${notes ? `📝 *Notas adicionales:* ${notes}\n` : ''}━━━━━━━━━━━━━━━━━━━━
Hola! Quiero formalizar este pedido con ustedes. ¿Me confirman disponibilidad y medios de pago (transferencia / tarjeta / efectivo en caja)? Gracias!`;

    triggerConfetti();
    openWhatsAppUrl(message);
    setIsCartOpen(false);
    clearCart();
    showToast('¡Pedido transferido a WhatsApp exitosamente!', 'success');
  };

  // 3. WhatsApp for Membership Subscription
  const sendMembershipInquiry = (plan) => {
    const message = 
`💎 *ALTA DE MEMBRESÍA // KINETIC LAB*
━━━━━━━━━━━━━━━━━━━━
🔥 *Plan Solicitado:* ${plan.name} ($${plan.price} / ${plan.period})
🏷️ *Categoría:* ${plan.tagline}
━━━━━━━━━━━━━━━━━━━━
Hola equipo Kinetic Lab! Quiero activar mi suscripción a la membresía *${plan.name}*. ¿Podrían indicarme los requisitos y coordinar el alta de mi usuario? ¡Gracias!`;

    triggerConfetti();
    openWhatsAppUrl(message);
    showToast(`Iniciando suscripción a ${plan.name} por WhatsApp`, 'success');
  };

  // 4. WhatsApp for Featured News / Event
  const sendNewsInquiry = (article) => {
    const message = 
`📣 *CONSULTA NOVEDAD // KINETIC LAB*
━━━━━━━━━━━━━━━━━━━━
📌 *Asunto:* ${article.title}
🏷️ *Categoría:* ${article.categoryTag}
━━━━━━━━━━━━━━━━━━━━
Hola! Leí la novedad sobre "${article.title}" en la web de Kinetic y me gustaría obtener más información o reservar mi participación. ¿Me dan más detalles?`;

    triggerConfetti();
    openWhatsAppUrl(message);
    closeNewsModal();
  };

  // 5. WhatsApp General Quick Chat
  const sendDirectWhatsApp = (text = "Hola Kinetic Lab! Quisiera consultar información sobre el gimnasio.") => {
    openWhatsAppUrl(text);
  };

  return (
    <GymContext.Provider
      value={{
        whatsAppNumber,
        updateWhatsAppNumber,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        cartSubtotal,
        discountPercent,
        discountAmount,
        cartTotal,
        totalItemsCount,
        promoCode,
        applyPromoCode,
        selectedActivity,
        isBookingModalOpen,
        openBookingModal,
        closeBookingModal,
        selectedNewsArticle,
        isNewsModalOpen,
        openNewsModal,
        closeNewsModal,
        isSettingsModalOpen,
        setIsSettingsModalOpen,
        toast,
        showToast,
        sendBookingRequest,
        sendShopOrder,
        sendMembershipInquiry,
        sendNewsInquiry,
        sendDirectWhatsApp
      }}
    >
      {children}
    </GymContext.Provider>
  );
}

export function useGym() {
  const context = useContext(GymContext);
  if (!context) {
    throw new Error('useGym must be used within a GymProvider');
  }
  return context;
}
