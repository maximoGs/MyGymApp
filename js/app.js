/**
 * KINETIC LAB // High Performance & Bio-Lab Gym
 * Pure Static Application Engine for GitHub Pages
 */

// 1. DATA SOURCE
const GYM_DATA = {
  config: {
    name: "KINETIC LAB",
    defaultPhone: "34600123456",
    address: "Av. de la Innovación 45, Distrito Deportivo",
    schedule: "Lun - Vie: 06:00 - 23:00 | Sáb - Dom: 08:00 - 20:00",
    capacity: 64
  },

  activities: [
    {
      id: "hyrox-protocol",
      title: "HYROX Performance Protocol",
      category: "endurance",
      categoryLabel: "Resistencia & Fuerza",
      intensity: 5,
      duration: "60 min",
      calories: "750 - 950 kcal",
      coach: "Elena 'Valkyrie' Vega",
      coachRole: "Head Coach Hyrox & Master Trainer",
      spotsLeft: 3,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      desc: "Entrenamiento funcional de alta densidad para pruebas atléticas. Sled push, SkiErg, Wall Balls, zancadas y carreras por intervalos.",
      benefits: ["Potencia aeróbica y anaeróbica", "Resistencia muscular extrema", "Tácticas de ritmo y competición"],
      slots: [
        "Lunes y Miércoles 07:00 - 08:00",
        "Lunes y Miércoles 19:00 - 20:00",
        "Sábados Especial 10:30 - 12:00"
      ],
      priceBadge: "Incluido en Membresía o Pase $18"
    },
    {
      id: "bio-contrast",
      title: "Cryo & Infrared Contrast Lab",
      category: "recovery",
      categoryLabel: "Biohacking & Recovery",
      intensity: 3,
      duration: "45 min",
      calories: "250 kcal (Termogénesis)",
      coach: "Dr. Marcos Soler",
      coachRole: "Fisiólogo & Especialista en Longevidad",
      spotsLeft: 2,
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80",
      desc: "Inmersión en tinas de hielo a 3°C alternadas con sauna finlandés de infrarrojo lejano a 85°C para acelerar la desinflamación y la regeneración celular.",
      benefits: ["Regeneración del sistema nervioso", "Reducción radical de cortisol", "Pico de dopamina (+250%)"],
      slots: [
        "Lunes a Viernes 08:00 - 08:45",
        "Lunes a Viernes 14:00 - 14:45",
        "Lunes a Viernes 20:30 - 21:15"
      ],
      priceBadge: "Gratis en Plan Elite o $20"
    },
    {
      id: "power-sculpt",
      title: "Heavy Biomechanics & Hypertrophy",
      category: "strength",
      categoryLabel: "Fuerza Biomecánica",
      intensity: 4,
      duration: "55 min",
      calories: "500 - 650 kcal",
      coach: "Carlos 'Titan' Durán",
      coachRole: "Especialista en Biomecánica",
      spotsLeft: 4,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      desc: "Desarrollo muscular inteligente guiado por ángulos anatómicos de máxima tensión mecánica. Cero sobrecarga articular, máxima ganancia.",
      benefits: ["Hipertrofia miofibrilar pura", "Prevención y corrección postural", "Incremento de densidad ósea"],
      slots: [
        "Martes y Jueves 09:00 - 10:00",
        "Martes y Jueves 18:00 - 19:00",
        "Viernes 19:30 - 20:30"
      ],
      priceBadge: "Incluido en Membresía o Pase $18"
    },
    {
      id: "neuro-flow",
      title: "Neuro-Flow & Somatic Mobility",
      category: "mobility",
      categoryLabel: "Movilidad & Mente",
      intensity: 2,
      duration: "50 min",
      calories: "220 - 300 kcal",
      coach: "Sofía Alarcón",
      coachRole: "Instructora de Respiración y Movilidad",
      spotsLeft: 5,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
      desc: "Desbloqueo fascial, rango articular completo (CARS), técnicas respiratorias hipopresivas y regulación del sistema nervioso simpático.",
      benefits: ["Liberación de rigidez en caderas y columna", "Mayor estabilidad y rango de movimiento", "Disminución de estrés y tensión"],
      slots: [
        "Lunes, Miércoles y Viernes 08:00 - 08:50",
        "Martes y Jueves 20:00 - 20:50"
      ],
      priceBadge: "Incluido en Membresía o Pase $15"
    },
    {
      id: "hiit-metabolic",
      title: "Zone 5 Metabolic Sprint Conditioning",
      category: "endurance",
      categoryLabel: "Resistencia & Fuerza",
      intensity: 5,
      duration: "45 min",
      calories: "600 - 800 kcal",
      coach: "Mateo Rivera",
      coachRole: "Preparador Físico de Alto Rendimiento",
      spotsLeft: 6,
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80",
      desc: "Intervalos de máxima intensidad monitorizados con bandas cardíacas en directo en pantallas. Quema calórica post-ejercicio acelerada.",
      benefits: ["Mejora drástica del VO2 Max", "Aceleración metabólica de 24h", "Alta eficiencia de tiempo"],
      slots: [
        "Lunes a Viernes 06:30 - 07:15",
        "Lunes a Viernes 13:30 - 14:15",
        "Lunes a Jueves 20:00 - 20:45"
      ],
      priceBadge: "Incluido en Membresía o Pase $16"
    },
    {
      id: "tech-boxing",
      title: "Tech Boxing & Neuro-Reflexes",
      category: "combat",
      categoryLabel: "Combate & Agilidad",
      intensity: 4,
      duration: "50 min",
      calories: "650 - 850 kcal",
      coach: "Lucía Méndez",
      coachRole: "Ex-Boxeadora Olímpica",
      spotsLeft: 1,
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80",
      desc: "Golpeo al saco sensorial, combinaciones de agilidad neuromuscular, juego de pies y drills de reacción cognitiva.",
      benefits: ["Descarga total de tensión mental", "Coordinación y agilidad de reflejos", "Fortalecimiento de zona media"],
      slots: [
        "Martes y Jueves 07:30 - 08:20",
        "Lunes y Miércoles 18:30 - 19:20"
      ],
      priceBadge: "Incluido en Membresía o Pase $18"
    }
  ],

  products: [
    {
      id: "creapure-ultra",
      name: "Creatina Monohidrato Creapure® Ultramicronizada",
      category: "strength",
      categoryLabel: "Fuerza & Rendimiento",
      price: 34.00,
      size: "300g (100 tomas)",
      badge: "MÁS VENDIDO",
      rating: 4.9,
      reviews: 142,
      image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=600&q=80",
      features: "100% Creapure® Alemania. Sin sabor ni aditivos. Solubilidad instantánea para fuerza celular y volumen muscular."
    },
    {
      id: "hydro-isolate-whey",
      name: "Hydro-Isolate Pure Grass-Fed 1kg",
      category: "muscle",
      categoryLabel: "Masa Muscular",
      price: 58.00,
      size: "1kg (33 servicios)",
      badge: "PREMIUM BIOLAB",
      rating: 5.0,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=600&q=80",
      features: "28g de proteína por toma, 0g azúcares añadidos, 0% lactosa. Digestión ultrarrápida sabor Cacao Ancestral."
    },
    {
      id: "biocell-electrolytes",
      name: "Electrolitos Celulares Bio-Cell Matrix",
      category: "hydration",
      categoryLabel: "Hidratación & Energía",
      price: 26.00,
      size: "250g (50 servicios)",
      badge: "ESENCIAL HYROX",
      rating: 4.8,
      reviews: 84,
      image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=600&q=80",
      features: "Sal Rosa del Himalaya, Magnesio Bisglicinato y Potasio. Cero azúcar. Previene calambres y fatiga durante sesiones intensas."
    },
    {
      id: "neuro-drive-pre",
      name: "Nootropic Focus Pre-Workout Neuro-Drive",
      category: "energy",
      categoryLabel: "Enfoque & Energía",
      price: 39.00,
      size: "300g (30 servicios)",
      badge: "ENFOQUE LÁSER",
      rating: 4.9,
      reviews: 110,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
      features: "Alfa-GPC, L-Tirosina y cafeína de grano de café verde. Enfoque mental supremo y bombeo muscular sin taquicardias."
    },
    {
      id: "deep-sleep-magnesium",
      name: "Deep REM Magnesium + Apigenina & GABA",
      category: "recovery",
      categoryLabel: "Recuperación & Sueño",
      price: 31.00,
      size: "90 cápsulas (30 días)",
      badge: "BIOHACK FAVORITO",
      rating: 4.9,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
      features: "Magnesio quelado TRAACS®, apigenina natural y L-teanina para resetear el sistema nervioso y profundizar el sueño reparador."
    },
    {
      id: "omega-3-ultra-pure",
      name: "Omega-3 IFOS 5★ Triglicéridos Ultra Puro",
      category: "health",
      categoryLabel: "Salud & Longevidad",
      price: 29.00,
      size: "60 perlas (60 días)",
      badge: "CERTIFICADO IFOS",
      rating: 4.8,
      reviews: 65,
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80",
      features: "800mg EPA y 400mg DHA por cápsula. Destilación molecular libre de metales pesados. Potente desinflamatorio celular."
    },
    {
      id: "stealth-shaker-steel",
      name: "Shaker Térmico Stealth Acero Quirúrgico 750ml",
      category: "gear",
      categoryLabel: "Accesorios & Gear",
      price: 24.00,
      size: "750ml / 25oz",
      badge: "EDICIÓN LIMITADA",
      rating: 4.7,
      reviews: 52,
      image: "https://images.unsplash.com/photo-1585342565162-aa612f0f4a38?auto=format&fit=crop&w=600&q=80",
      features: "Acero inoxidable grado 316, doble pared al vacío. Mantiene la bebida helada por 24 horas. Cierre antifugas."
    },
    {
      id: "heavy-duty-straps",
      name: "Straps de Agarre Kevlar Grip Pro",
      category: "gear",
      categoryLabel: "Accesorios & Gear",
      price: 18.00,
      size: "Par ajustable",
      badge: "MÁXIMA TRACCIÓN",
      rating: 4.9,
      reviews: 44,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
      features: "Costuras de kevlar con almohadillas de neopreno. Agarre total para peso muerto y remos pesados sin fatiga de antebrazo."
    }
  ],

  news: [
    {
      id: "news-cryo",
      title: "Nueva Zona Cryo & Infrared: La ciencia del contraste térmico llega a Kinetic",
      tag: "NUEVA ZONA",
      category: "instalaciones",
      date: "Destacado Hoy",
      readTime: "2 min",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
      excerpt: "Inauguramos oficialmente las tinas de inmersión en frío a 3°C y el sauna de infrarrojo lejano para acelerar tu recuperación hasta un 300%.",
      content: "La terapia de contraste térmico es la herramienta de biohacking más potente del momento. Alternar entre calor profundo (activando heat shock proteins) y frío agudo (liberando noradrenalina y reduciendo la inflamación) multiplica la regeneración neuromuscular y optimiza el sueño profundo."
    },
    {
      id: "news-hyrox-cup",
      title: "VORTEX HYROX CUP 2026: Inscripciones Abiertas para el torneo interno",
      tag: "EVENTO EXCLUSIVO",
      category: "eventos",
      date: "Próximo Sábado 18",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      excerpt: "¿Listo para poner a prueba tu motor? Abrimos las inscripciones para la copa interna de simulación de carrera HYROX en Individual y Dobles.",
      content: "Estaciones completas de SkiErg, Sled Push/Pull, Burpee Broad Jumps, Remo, Farmers Carry y Wall Balls con 1km de carrera intermedia. Premiación en suplementación y membresías anuales para las mejores marcas."
    },
    {
      id: "news-creapure-batch",
      title: "Lote exclusivo Creapure® y nuevos sabores de Hydro-Isolate disponibles",
      tag: "TIENDA & NOVEDADES",
      category: "tienda",
      date: "Stock Actualizado",
      readTime: "2 min",
      image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=1000&q=80",
      excerpt: "Aterrizó el nuevo lote certificado de creatina Creapure® alemana y el codiciado sabor Cold Brew Coffee en proteína hidrolizada.",
      content: "Lotes analizados con cromatografía independiente garantizando 0% impurezas y máxima biodisponibilidad. Disponibles para retiro en recepción o entrega a domicilio rápida por WhatsApp."
    },
    {
      id: "news-masterclass",
      title: "Masterclass Gratuita: Ritmos Circadianos, Ayuno y Máximo Rendimiento",
      tag: "TALLER GRATUITO",
      category: "talleres",
      date: "Jueves 20:00 hs",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
      excerpt: "Aprende cómo sincronizar tus horarios de entreno, ingesta proteica y luz solar para optimizar tu balance hormonal y energía vital.",
      content: "Charla magistral presencial en el auditorio del gym dictada por médicos deportivos. Incluye cata de electrolitos y café nootrópico para todos los asistentes."
    }
  ],

  plans: [
    {
      id: "pass-day",
      name: "PASS EXPERIENCIA",
      price: 15,
      period: "Pase diario único",
      badge: "SIN COMPROMISO",
      popular: false,
      features: [
        "Acceso de día completo a sala de musculación biomecánica",
        "1 clase grupal guiada a elección",
        "Vestuarios con amenities premium",
        "Bebida isotónica de bienvenida cortesía del Lab"
      ]
    },
    {
      id: "plan-pro",
      name: "KINETIC PRO",
      price: 65,
      period: "Suscripción mensual",
      badge: "MÁS POPULAR",
      popular: true,
      features: [
        "Acceso ilimitado 7 días a la semana",
        "Todas las actividades y clases grupales incluidas",
        "Monitoreo cardíaco en pantallas en clases HIIT",
        "Locker permanente y toallas ilimitadas",
        "App de registro de cargas y marcas",
        "1 sesión de Cryo & Contrast Lab mensual"
      ]
    },
    {
      id: "plan-elite",
      name: "ELITE BIOHACKER",
      price: 115,
      period: "Suscripción mensual",
      badge: "EXPERIENCIA TOTAL",
      popular: false,
      features: [
        "Todo lo incluido en KINETIC PRO",
        "Acceso ILIMITADO al Cryo & Infrared Contrast Lab (Hielo + Sauna)",
        "15% de descuento permanente en la tienda de suplementos",
        "Evaluación mensual de bioimpedancia y composición corporal",
        "Plan nutricional personalizado y ajuste de suplementación",
        "2 pases de invitado al mes"
      ]
    }
  ],

  bioGoals: [
    {
      id: "goal-strength",
      title: "Aumento de Fuerza & Masa Muscular",
      activityId: "power-sculpt",
      productIds: ["hydro-isolate-whey", "creapure-ultra", "heavy-duty-straps"],
      desc: "Enfoque en tensión mecánica progresiva, proteína hidrolizada rápida y saturación muscular de fosfocreatina pura."
    },
    {
      id: "goal-hyrox",
      title: "Resistencia Atlética & Hyrox",
      activityId: "hyrox-protocol",
      productIds: ["biocell-electrolytes", "creapure-ultra", "neuro-drive-pre"],
      desc: "Intervalos de alta densidad, equilibrio de minerales intra-sesión y concentración mental ante la fatiga metabólica."
    },
    {
      id: "goal-longevity",
      title: "Salud, Desinflamación & Longevidad",
      activityId: "bio-contrast",
      productIds: ["deep-sleep-magnesium", "omega-3-ultra-pure", "biocell-electrolytes"],
      desc: "Estímulo de choque térmico (frío/calor) para regeneración celular, optimización de ondas delta en el sueño y soporte de ácidos grasos EPA/DHA."
    },
    {
      id: "goal-fatloss",
      title: "Quema Grasa & Acondicionamiento",
      activityId: "hiit-metabolic",
      productIds: ["biocell-electrolytes", "hydro-isolate-whey", "stealth-shaker-steel"],
      desc: "Entrenamiento por zonas cardíacas para acelerar el consumo metabólico glucogénico preservando toda la masa muscular."
    }
  ]
};

// 2. APPLICATION STATE
let state = {
  whatsAppPhone: localStorage.getItem("kinetic_phone") || GYM_DATA.config.defaultPhone,
  cart: JSON.parse(localStorage.getItem("kinetic_cart") || "[]"),
  promoCode: "",
  discountPercent: 0,
  deliveryMethod: "pickup",
  selectedActivity: null,
  selectedNews: null,
  activeActivityCategory: "all",
  activeProductCategory: "all",
  activeNewsCategory: "all",
  activeGoalId: "goal-strength"
};

// 3. WHATSAPP ENGINE
function openWhatsApp(message) {
  const phone = state.whatsAppPhone.replace(/[^0-9]/g, "");
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function triggerConfetti() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.65 },
      colors: ["#ccff00", "#00f0ff", "#ffffff"]
    });
  }
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  const borderCol = type === "error" ? "border-red-500/50" : type === "info" ? "border-[#00f0ff]/50" : "border-[#ccff00]/50";
  toast.className = `p-4 rounded-xl bg-[#0e1017]/95 border ${borderCol} shadow-2xl backdrop-blur-md text-white text-xs font-mono flex items-center justify-between gap-3 pointer-events-auto transition-all transform translate-y-2`;
  toast.innerHTML = `
    <div class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full ${type === "error" ? "bg-red-400" : type === "info" ? "bg-[#00f0ff]" : "bg-[#ccff00]"} animate-ping"></span>
      <span>${message}</span>
    </div>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-x-full");
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// 4. CART LOGIC
function saveCart() {
  localStorage.setItem("kinetic_cart", JSON.stringify(state.cart));
  renderCart();
  updateCartBadge();
}

function addToCart(productId, qty = 1) {
  const product = GYM_DATA.products.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    state.cart.push({ id: productId, quantity: qty });
  }

  saveCart();
  showToast(`"${product.name.split(" ")[0]}" añadido al carrito`);
}

function updateQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }
  saveCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  showToast("Producto eliminado del carrito", "info");
}

function applyCoupon(code) {
  const clean = code.trim().toUpperCase();
  if (clean === "KINETIC10" || clean === "BIOWELLNESS") {
    state.promoCode = clean;
    state.discountPercent = 10;
    showToast("¡Cupón aplicado! 10% de descuento concedido");
    renderCart();
    return true;
  } else if (clean === "ELITE20") {
    state.promoCode = clean;
    state.discountPercent = 20;
    showToast("¡Cupón VIP aplicado! 20% de descuento concedido");
    renderCart();
    return true;
  } else {
    showToast("Cupón inválido o expirado", "error");
    return false;
  }
}

function updateCartBadge() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById("cart-badge");
  const cartSubtotalEl = document.getElementById("nav-cart-subtotal");

  if (badge) {
    badge.textContent = count;
    badge.classList.toggle("hidden", count === 0);
  }

  const subtotal = state.cart.reduce((sum, item) => {
    const prod = GYM_DATA.products.find(p => p.id === item.id);
    return sum + (prod ? prod.price * item.quantity : 0);
  }, 0);

  if (cartSubtotalEl) {
    cartSubtotalEl.textContent = subtotal > 0 ? `$${subtotal.toFixed(0)}` : "TIENDA";
  }
}

// 5. RENDER FUNCTIONS
function renderActivities() {
  const container = document.getElementById("activities-grid");
  if (!container) return;

  const filtered = state.activeActivityCategory === "all"
    ? GYM_DATA.activities
    : GYM_DATA.activities.filter(a => a.category === state.activeActivityCategory);

  container.innerHTML = filtered.map(act => `
    <div class="group flex flex-col justify-between rounded-3xl bg-[#0f1118] border border-white/10 overflow-hidden hover:border-[#ccff00]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl text-left">
      <div class="relative h-60 w-full overflow-hidden">
        <img src="${act.image}" alt="${act.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0f1118] via-transparent to-transparent"></div>
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#ccff00] font-mono text-[11px] font-black uppercase border border-[#ccff00]/30">
            ${act.categoryLabel}
          </span>
        </div>
        <div class="absolute top-4 right-4">
          <span class="px-2.5 py-1 rounded-full font-mono text-[10px] font-bold uppercase backdrop-blur-md border ${
            act.spotsLeft <= 2 ? 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
          }">
            ${act.spotsLeft <= 2 ? `¡ÚLTIMOS ${act.spotsLeft} CUPOS!` : `${act.spotsLeft} CUPOS DISPONIBLES`}
          </span>
        </div>
        <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-gray-300">
          <span class="bg-black/60 px-2.5 py-1 rounded-lg border border-white/10">⏱️ ${act.duration}</span>
          <span class="bg-black/60 px-2.5 py-1 rounded-lg border border-white/10 text-[#ccff00]">🔥 ${act.calories}</span>
        </div>
      </div>

      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div class="space-y-2.5">
          <div class="flex items-center justify-between text-xs font-mono text-gray-400">
            <span>INTENSIDAD:</span>
            <span class="text-[#ccff00] font-bold tracking-widest">${"⚡".repeat(act.intensity)}</span>
          </div>

          <h3 class="text-xl font-display font-extrabold text-white group-hover:text-[#ccff00] transition-colors leading-tight">
            ${act.title}
          </h3>

          <p class="text-xs text-gray-300 line-clamp-2 leading-relaxed">
            ${act.desc}
          </p>

          <div class="space-y-1 pt-1">
            ${act.benefits.map(b => `
              <div class="flex items-center gap-2 text-xs text-gray-400">
                <span class="text-[#ccff00] font-bold">✓</span>
                <span>${b}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="pt-4 border-t border-white/10 space-y-3">
          <div class="flex items-center justify-between text-xs">
            <div>
              <span class="text-[10px] font-mono text-gray-500 block uppercase">COACH</span>
              <span class="font-semibold text-white">${act.coach}</span>
            </div>
            <span class="text-[11px] font-mono text-[#00f0ff]">${act.priceBadge}</span>
          </div>

          <button 
            onclick="openBookingModal('${act.id}')"
            class="w-full py-3.5 px-4 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs font-mono tracking-wider transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(204,255,0,0.25)] flex items-center justify-center gap-2"
          >
            <span>RESERVAR / SUSCRIBIRME</span>
            <span>↗</span>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function renderProducts() {
  const container = document.getElementById("products-grid");
  if (!container) return;

  const filtered = state.activeProductCategory === "all"
    ? GYM_DATA.products
    : GYM_DATA.products.filter(p => p.category === state.activeProductCategory);

  container.innerHTML = filtered.map(prod => `
    <div class="group flex flex-col justify-between rounded-2xl bg-[#0e1015] border border-white/10 overflow-hidden hover:border-[#ccff00]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg text-left">
      <div class="relative h-56 w-full overflow-hidden bg-black/40">
        <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-transparent to-transparent"></div>
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#ccff00] font-mono text-[10px] font-extrabold uppercase border border-[#ccff00]/30 shadow-md">
            ${prod.badge}
          </span>
        </div>
        <div class="absolute bottom-2 left-3">
          <span class="text-[10px] font-mono text-gray-300 bg-black/60 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
            ${prod.size}
          </span>
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs">
            <span class="font-mono text-gray-500 uppercase text-[10px]">${prod.categoryLabel}</span>
            <span class="text-[#ccff00] font-bold text-xs">★ ${prod.rating} <span class="text-gray-500 font-normal">(${prod.reviews})</span></span>
          </div>

          <h3 class="text-base font-display font-bold text-white group-hover:text-[#ccff00] transition-colors leading-snug line-clamp-2">
            ${prod.name}
          </h3>

          <p class="text-xs text-gray-400 line-clamp-2 leading-relaxed">
            ${prod.features}
          </p>
        </div>

        <div class="pt-3 border-t border-white/10 space-y-2">
          <div class="flex items-baseline justify-between">
            <span class="text-xs font-mono text-gray-400">PRECIO:</span>
            <span class="text-xl font-mono font-extrabold text-[#ccff00]">$${prod.price.toFixed(2)}</span>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <button 
              onclick="addToCart('${prod.id}', 1)"
              class="py-2.5 px-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-1"
            >
              <span>+ Agregar</span>
            </button>
            <button 
              onclick="quickBuy('${prod.id}')"
              class="py-2.5 px-2 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-mono text-xs font-extrabold transition-colors flex items-center justify-center gap-1 shadow-[0_0_10px_rgba(204,255,0,0.2)]"
            >
              <span>Pedir Ya ↗</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function renderNews() {
  const container = document.getElementById("news-grid");
  if (!container) return;

  const filtered = state.activeNewsCategory === "all"
    ? GYM_DATA.news
    : GYM_DATA.news.filter(n => n.category === state.activeNewsCategory);

  container.innerHTML = filtered.map(item => `
    <div class="group flex flex-col justify-between rounded-2xl bg-[#0e1015] border border-white/10 overflow-hidden hover:border-[#ccff00]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg text-left">
      <div class="relative h-48 w-full overflow-hidden">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0e1015] via-transparent to-transparent"></div>
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-[#ccff00] font-mono text-[10px] font-extrabold uppercase border border-[#ccff00]/30">
            ${item.tag}
          </span>
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div class="space-y-2">
          <div class="flex items-center gap-2 text-[11px] font-mono text-gray-400">
            <span class="text-[#00f0ff]">${item.readTime}</span>
            <span>•</span>
            <span>${item.date}</span>
          </div>

          <h4 class="text-lg font-display font-bold text-white group-hover:text-[#ccff00] transition-colors leading-snug">
            ${item.title}
          </h4>

          <p class="text-xs text-gray-300 line-clamp-3 leading-relaxed">
            ${item.excerpt}
          </p>
        </div>

        <div class="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
          <button 
            onclick="openNewsModal('${item.id}')"
            class="text-xs font-mono font-bold text-white hover:text-[#ccff00] flex items-center gap-1 transition-colors"
          >
            <span>Ver más →</span>
          </button>

          <button 
            onclick="sendNewsWhatsApp('${item.id}')"
            class="px-3 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] text-xs font-mono font-bold transition-colors flex items-center gap-1"
          >
            <span>WhatsApp 💬</span>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function renderBioMatcher() {
  const goal = GYM_DATA.bioGoals.find(g => g.id === state.activeGoalId) || GYM_DATA.bioGoals[0];
  const act = GYM_DATA.activities.find(a => a.id === goal.activityId);
  const prods = GYM_DATA.products.filter(p => goal.productIds.includes(p.id));

  const goalEl = document.getElementById("bio-strategy-content");
  if (!goalEl) return;

  goalEl.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
      <div class="lg:col-span-5 space-y-6">
        <div class="space-y-2">
          <span class="text-xs font-mono uppercase tracking-widest text-[#ccff00] font-bold">// ESTRATEGIA RECOMENDADA</span>
          <h3 class="text-2xl sm:text-3xl font-display font-extrabold text-white">${goal.title}</h3>
          <p class="text-sm text-gray-300 leading-relaxed pt-1">${goal.desc}</p>
        </div>

        ${act ? `
          <div class="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
            <div class="text-[11px] font-mono text-[#00f0ff] uppercase font-bold">ACTIVIDAD IDEAL:</div>
            <div class="flex gap-3 items-center">
              <img src="${act.image}" alt="${act.title}" class="w-16 h-16 rounded-xl object-cover" />
              <div>
                <h4 class="text-sm font-bold text-white">${act.title}</h4>
                <p class="text-xs text-gray-400 mt-0.5">${act.duration} • Coach ${act.coach}</p>
              </div>
            </div>
            <button onclick="openBookingModal('${act.id}')" class="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2">
              <span>Reservar sesión de prueba</span>
              <span class="text-[#ccff00]">↗</span>
            </button>
          </div>
        ` : ''}
      </div>

      <div class="lg:col-span-7 space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-xs font-mono uppercase tracking-widest text-[#00f0ff] font-bold">// STACK DE SUPLEMENTOS RECOMENDADO</span>
          <button onclick="addGoalStack('${goal.id}')" class="px-3.5 py-1.5 rounded-xl bg-[#ccff00] hover:bg-[#b8e600] text-black font-mono text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(204,255,0,0.25)]">
            <span>Añadir Stack Completo (${prods.length})</span>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          ${prods.map(p => `
            <div class="p-3 rounded-2xl bg-black/50 border border-white/10 flex flex-col justify-between space-y-2 hover:border-[#ccff00]/40 transition-colors">
              <div class="space-y-1.5">
                <img src="${p.image}" alt="${p.name}" class="w-full h-24 rounded-lg object-cover" />
                <span class="text-[10px] font-mono text-[#ccff00] block uppercase font-bold truncate">${p.categoryLabel}</span>
                <h5 class="text-xs font-bold text-white line-clamp-2 leading-snug">${p.name}</h5>
              </div>
              <div class="pt-2 border-t border-white/5 flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-white">$${p.price.toFixed(2)}</span>
                <button onclick="addToCart('${p.id}', 1)" class="p-1.5 rounded-lg bg-white/10 hover:bg-[#ccff00] hover:text-black text-gray-300 transition-colors">
                  🛒
                </button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderCart() {
  const container = document.getElementById("cart-items-container");
  const checkoutSection = document.getElementById("cart-checkout-section");
  const emptyState = document.getElementById("cart-empty-state");

  if (!container || !checkoutSection) return;

  if (state.cart.length === 0) {
    container.innerHTML = "";
    emptyState.classList.remove("hidden");
    checkoutSection.classList.add("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  checkoutSection.classList.remove("hidden");

  let subtotal = 0;

  container.innerHTML = state.cart.map(item => {
    const prod = GYM_DATA.products.find(p => p.id === item.id);
    if (!prod) return "";

    const lineTotal = prod.price * item.quantity;
    subtotal += lineTotal;

    return `
      <div class="flex gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors text-left">
        <img src="${prod.image}" alt="${prod.name}" class="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10" />
        <div class="flex-1 min-w-0 flex flex-col justify-between">
          <div class="flex items-start justify-between gap-1">
            <h4 class="text-xs font-bold text-white leading-tight truncate">${prod.name}</h4>
            <button onclick="removeFromCart('${prod.id}')" class="text-gray-500 hover:text-red-400 p-1">✕</button>
          </div>
          <div class="text-[11px] font-mono text-gray-400">${prod.size}</div>
          <div class="flex items-center justify-between mt-1">
            <span class="text-xs font-mono font-bold text-[#ccff00]">$${lineTotal.toFixed(2)}</span>
            <div class="flex items-center gap-2 bg-black/60 border border-white/10 rounded-lg px-2 py-0.5">
              <button onclick="updateQuantity('${prod.id}', -1)" class="text-gray-400 hover:text-white px-1 font-bold">-</button>
              <span class="text-xs font-mono font-bold text-white min-w-4 text-center">${item.quantity}</span>
              <button onclick="updateQuantity('${prod.id}', 1)" class="text-gray-400 hover:text-white px-1 font-bold">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const discountAmount = (subtotal * state.discountPercent) / 100;
  const total = Math.max(0, subtotal - discountAmount);

  document.getElementById("cart-subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`;

  const discountRow = document.getElementById("cart-discount-row");
  if (discountRow) {
    if (state.discountPercent > 0) {
      discountRow.classList.remove("hidden");
      document.getElementById("cart-discount-amount").textContent = `-$${discountAmount.toFixed(2)} (${state.promoCode})`;
    } else {
      discountRow.classList.add("hidden");
    }
  }
}

// 6. MODALS
function openBookingModal(activityId) {
  const act = GYM_DATA.activities.find(a => a.id === activityId);
  if (!act) return;

  state.selectedActivity = act;
  const modal = document.getElementById("booking-modal");
  if (!modal) return;

  document.getElementById("booking-modal-title").textContent = act.title;
  document.getElementById("booking-modal-coach").textContent = `${act.coach} (${act.coachRole})`;
  document.getElementById("booking-modal-img").src = act.image;
  document.getElementById("booking-modal-duration").textContent = act.duration;
  document.getElementById("booking-modal-calories").textContent = act.calories;
  document.getElementById("booking-modal-spots").textContent = `${act.spotsLeft} cupos libres`;

  // Render slots radio buttons
  const slotsContainer = document.getElementById("booking-modal-slots");
  slotsContainer.innerHTML = act.slots.map((s, idx) => `
    <label class="p-3 rounded-xl border border-white/10 bg-black/40 text-xs flex items-center gap-2.5 cursor-pointer hover:border-[#ccff00]/40 transition-colors">
      <input type="radio" name="booking-slot" value="${s}" ${idx === 0 ? "checked" : ""} class="accent-[#ccff00]" />
      <span class="text-gray-300 font-mono">${s}</span>
    </label>
  `).join("");

  modal.classList.remove("hidden");
}

function closeBookingModal() {
  document.getElementById("booking-modal")?.classList.add("hidden");
}

function openNewsModal(newsId) {
  const item = GYM_DATA.news.find(n => n.id === newsId);
  if (!item) return;

  state.selectedNews = item;
  const modal = document.getElementById("news-modal");
  if (!modal) return;

  document.getElementById("news-modal-img").src = item.image;
  document.getElementById("news-modal-tag").textContent = item.tag;
  document.getElementById("news-modal-date").textContent = item.date;
  document.getElementById("news-modal-title").textContent = item.title;
  document.getElementById("news-modal-content").textContent = item.content;

  modal.classList.remove("hidden");
}

function closeNewsModal() {
  document.getElementById("news-modal")?.classList.add("hidden");
}

function openCartDrawer() {
  renderCart();
  document.getElementById("cart-drawer")?.classList.remove("hidden");
}

function closeCartDrawer() {
  document.getElementById("cart-drawer")?.classList.add("hidden");
}

function openSettingsModal() {
  document.getElementById("settings-phone-input").value = state.whatsAppPhone;
  document.getElementById("settings-modal")?.classList.remove("hidden");
}

function closeSettingsModal() {
  document.getElementById("settings-modal")?.classList.add("hidden");
}

function quickBuy(productId) {
  addToCart(productId, 1);
  openCartDrawer();
}

function addGoalStack(goalId) {
  const goal = GYM_DATA.bioGoals.find(g => g.id === goalId);
  if (!goal) return;

  goal.productIds.forEach(id => {
    addToCart(id, 1);
  });
  showToast(`Stack completo (${goal.productIds.length} productos) añadido`);
  openCartDrawer();
}

// 7. FORM SUBMISSIONS VIA WHATSAPP
function handleBookingSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("booking-name").value.trim();
  const phone = document.getElementById("booking-phone").value.trim();
  const notes = document.getElementById("booking-notes").value.trim();
  const passType = document.querySelector('input[name="booking-pass-type"]:checked')?.value || "Clase de Prueba";
  const slot = document.querySelector('input[name="booking-slot"]:checked')?.value || "Horario a convenir";

  if (!name || !phone) {
    alert("Por favor completa tu nombre y teléfono");
    return;
  }

  const msg = 
`⚡ *RESERVA DE ACTIVIDAD // KINETIC LAB*
━━━━━━━━━━━━━━━━━━━━
🏋️ *Actividad:* ${state.selectedActivity.title}
👤 *Cliente:* ${name}
📱 *Contacto:* ${phone}
📅 *Turno:* ${slot}
🎟️ *Tipo de Pase:* ${passType}
${notes ? `📝 *Observaciones:* ${notes}\n` : ""}━━━━━━━━━━━━━━━━━━━━
¡Hola equipo de Kinetic Lab! Deseo confirmar mi lugar para esta sesión. ¿Me indican los detalles para el acceso? Muchas gracias!`;

  triggerConfetti();
  openWhatsApp(msg);
  closeBookingModal();
  showToast("¡Redirigiendo a WhatsApp para confirmar tu reserva!");
}

function handleCartCheckout(e) {
  e.preventDefault();
  const name = document.getElementById("cart-name").value.trim();
  const phone = document.getElementById("cart-phone").value.trim();
  const address = document.getElementById("cart-address").value.trim();
  const notes = document.getElementById("cart-notes").value.trim();

  if (!name || !phone) {
    alert("Por favor ingresa tu nombre y teléfono para procesar el pedido");
    return;
  }

  if (state.cart.length === 0) return;

  let itemsList = state.cart.map(item => {
    const p = GYM_DATA.products.find(x => x.id === item.id);
    return `• ${item.quantity}x *${p.name}* ($${(p.price * item.quantity).toFixed(2)})`;
  }).join("\n");

  const subtotal = state.cart.reduce((sum, item) => {
    const p = GYM_DATA.products.find(x => x.id === item.id);
    return sum + (p ? p.price * item.quantity : 0);
  }, 0);
  const discountAmount = (subtotal * state.discountPercent) / 100;
  const total = Math.max(0, subtotal - discountAmount);

  const msg = 
`🛒 *PEDIDO TIENDA SUPLEMENTOS // KINETIC LAB*
━━━━━━━━━━━━━━━━━━━━
👤 *Cliente:* ${name}
📱 *Teléfono:* ${phone}
📍 *Modalidad:* ${state.deliveryMethod === 'pickup' ? 'Retiro en Recepción Gym (Gratis)' : 'Envío a Domicilio'}
${state.deliveryMethod === 'delivery' && address ? `🏠 *Dirección:* ${address}\n` : ""}━━━━━━━━━━━━━━━━━━━━
📦 *DETALLE DEL PEDIDO:*
${itemsList}
${state.discountPercent > 0 ? `🎟️ *Cupón (${state.promoCode}):* -$${discountAmount.toFixed(2)}\n` : ""}━━━━━━━━━━━━━━━━━━━━
💰 *TOTAL A PAGAR: $${total.toFixed(2)}*
${notes ? `📝 *Notas:* ${notes}\n` : ""}━━━━━━━━━━━━━━━━━━━━
Hola! Quiero formalizar este pedido con ustedes. ¿Me confirman disponibilidad y medios de pago? Gracias!`;

  triggerConfetti();
  openWhatsApp(msg);
  state.cart = [];
  saveCart();
  closeCartDrawer();
  showToast("¡Pedido transferido a WhatsApp exitosamente!");
}

function sendMembershipWhatsApp(planId) {
  const plan = GYM_DATA.plans.find(p => p.id === planId);
  if (!plan) return;

  const msg = 
`💎 *ALTA DE MEMBRESÍA // KINETIC LAB*
━━━━━━━━━━━━━━━━━━━━
🔥 *Plan Solicitado:* ${plan.name} ($${plan.price} / ${plan.period})
🏷️ *Categoría:* ${plan.badge}
━━━━━━━━━━━━━━━━━━━━
Hola equipo Kinetic Lab! Quiero activar mi suscripción a la membresía *${plan.name}*. ¿Podrían indicarme los requisitos y coordinar el alta? ¡Muchas gracias!`;

  triggerConfetti();
  openWhatsApp(msg);
}

function sendNewsWhatsApp(newsId) {
  const item = GYM_DATA.news.find(n => n.id === newsId);
  if (!item) return;

  const msg = 
`📣 *CONSULTA NOVEDAD // KINETIC LAB*
━━━━━━━━━━━━━━━━━━━━
📌 *Asunto:* ${item.title}
🏷️ *Categoría:* ${item.tag}
━━━━━━━━━━━━━━━━━━━━
Hola! Leí la novedad sobre "${item.title}" en la web de Kinetic y me gustaría obtener más información o reservar mi participación. ¿Me dan detalles?`;

  triggerConfetti();
  openWhatsApp(msg);
  closeNewsModal();
}

function sendDirectWhatsApp(text) {
  openWhatsApp(text || "Hola Kinetic Lab! Quisiera consultar información sobre el gimnasio.");
}

function saveWhatsAppSettings(e) {
  e.preventDefault();
  const input = document.getElementById("settings-phone-input").value.trim();
  const cleaned = input.replace(/[^0-9]/g, "");
  if (!cleaned) return;

  state.whatsAppPhone = cleaned;
  localStorage.setItem("kinetic_phone", cleaned);
  closeSettingsModal();
  showToast(`Número de WhatsApp actualizado: +${cleaned}`, "info");

  const footerPhone = document.getElementById("footer-whatsapp-display");
  if (footerPhone) footerPhone.textContent = `+${cleaned}`;
}

// 8. INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  renderActivities();
  renderProducts();
  renderNews();
  renderBioMatcher();
  updateCartBadge();

  // Activity filter buttons
  document.querySelectorAll("[data-activity-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-activity-filter]").forEach(b => {
        b.className = "px-3.5 py-1.5 rounded-full text-xs font-mono transition-all uppercase tracking-wider bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5";
      });
      btn.className = "px-3.5 py-1.5 rounded-full text-xs font-mono transition-all uppercase tracking-wider bg-[#00f0ff] text-black font-extrabold shadow-[0_0_15px_rgba(0,240,255,0.3)]";
      state.activeActivityCategory = btn.getAttribute("data-activity-filter");
      renderActivities();
    });
  });

  // Product filter buttons
  document.querySelectorAll("[data-product-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-product-filter]").forEach(b => {
        b.className = "px-3.5 py-1.5 rounded-full text-xs font-mono transition-all uppercase tracking-wider bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5";
      });
      btn.className = "px-3.5 py-1.5 rounded-full text-xs font-mono transition-all uppercase tracking-wider bg-[#ccff00] text-black font-extrabold shadow-[0_0_15px_rgba(204,255,0,0.3)]";
      state.activeProductCategory = btn.getAttribute("data-product-filter");
      renderProducts();
    });
  });

  // News filter buttons
  document.querySelectorAll("[data-news-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-news-filter]").forEach(b => {
        b.className = "px-3.5 py-1.5 rounded-full text-xs font-mono transition-all uppercase tracking-wider bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5";
      });
      btn.className = "px-3.5 py-1.5 rounded-full text-xs font-mono transition-all uppercase tracking-wider bg-[#ccff00] text-black font-extrabold shadow-[0_0_15px_rgba(204,255,0,0.3)]";
      state.activeNewsCategory = btn.getAttribute("data-news-filter");
      renderNews();
    });
  });

  // Bio goal tab buttons
  document.querySelectorAll("[data-bio-goal]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-bio-goal]").forEach(b => {
        b.className = "p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden bg-[#0d0f15] border-white/10 text-gray-300 hover:border-white/20";
      });
      btn.className = "p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden bg-[#141722] border-[#ccff00] shadow-[0_0_25px_rgba(204,255,0,0.15)] text-white -translate-y-1";
      state.activeGoalId = btn.getAttribute("data-bio-goal");
      renderBioMatcher();
    });
  });

  // Delivery method toggles
  document.querySelectorAll("[data-delivery-method]").forEach(btn => {
    btn.addEventListener("click", () => {
      const method = btn.getAttribute("data-delivery-method");
      state.deliveryMethod = method;
      document.querySelectorAll("[data-delivery-method]").forEach(b => {
        b.className = "p-2.5 rounded-xl border border-white/10 bg-black/40 text-gray-400 text-xs text-left";
      });
      btn.className = "p-2.5 rounded-xl border border-[#ccff00] bg-[#ccff00]/10 text-white font-bold text-xs text-left";
      document.getElementById("cart-address-wrapper")?.classList.toggle("hidden", method !== "delivery");
    });
  });

  // Coupon form
  document.getElementById("coupon-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = document.getElementById("coupon-input").value;
    applyCoupon(val);
  });

  // Update display
  const footerPhone = document.getElementById("footer-whatsapp-display");
  if (footerPhone) footerPhone.textContent = `+${state.whatsAppPhone}`;
});
