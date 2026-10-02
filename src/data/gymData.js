// Data source for KINETIC LAB // Gym & Bio-Performance Sanctuary

export const GYM_CONFIG = {
  name: "KINETIC LAB",
  brandSubtitle: "HUMAN PERFORMANCE // BIO-SANCTUARY",
  defaultWhatsApp: "34600123456", // Format: country code + number without plus or spaces for wa.me
  displayWhatsApp: "+34 600 123 456",
  address: "Av. de la Innovación 45, Distrito Tecnológico / Deportivo",
  instagram: "@kinetic.biolab",
  schedule: "Lunes a Viernes: 06:00 - 23:00 | Sábados & Domingos: 08:00 - 20:00",
  currentCapacityPercent: 62, // Simulated live capacity
  statusMessage: "ZONA ABIERTA • AFORO MODERADO"
};

export const ACTIVITIES = [
  {
    id: "hyrox-protocol",
    title: "HYROX Performance Protocol",
    category: "Resistencia & Fuerza",
    categoryKey: "endurance",
    intensity: 5, // 1 to 5
    duration: "60 min",
    calories: "750 - 950 kcal",
    coach: "Elena 'Valkyrie' Vega",
    coachRole: "Head Coach Hyrox & Master Trainer",
    spotsTotal: 16,
    spotsLeft: 3,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Preparación de alto calibre para pruebas atléticas. Sled push, SkiErg, Wall Balls, zancadas ponderadas y carreras fraccionadas.",
    benefits: ["Potencia aeróbica y anaeróbica", "Resistencia muscular extrema", "Tácticas de ritmo y competición", "Quema calórica post-ejercicio (EPOC)"],
    scheduleSlots: [
      { day: "Lunes y Miércoles", time: "07:00 - 08:00", coach: "Elena Vega" },
      { day: "Lunes y Miércoles", time: "19:00 - 20:00", coach: "Elena Vega" },
      { day: "Sábados Especial", time: "10:30 - 12:00", coach: "Elena Vega & Invitados" }
    ],
    pricing: "Incluido en Membresía o Pase $18/sesión"
  },
  {
    id: "bio-contrast",
    title: "Cryo & Infrared Contrast Lab",
    category: "Biohacking & Recuperación",
    categoryKey: "recovery",
    intensity: 3,
    duration: "45 min",
    calories: "250 kcal (Termogénesis)",
    coach: "Dr. Marcos Soler",
    coachRole: "Fisiólogo & Especialista en Longevidad",
    spotsTotal: 8,
    spotsLeft: 2,
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Inmersión en tinas de hielo a 3°C alternadas con sauna de luz infrarroja lejana a 85°C. Impulso hormonal, proteínas de choque térmico y reducción total de inflamación.",
    benefits: ["Regeneración del sistema nervioso", "Reducción de cortisol y fatiga crónica", "Estimulación de dopamina (+250%)", "Optimización del sueño profundo"],
    scheduleSlots: [
      { day: "Todos los días", time: "08:00 - 08:45", coach: "Dr. Marcos Soler" },
      { day: "Todos los días", time: "14:00 - 14:45", coach: "Dr. Marcos Soler" },
      { day: "Lunes a Viernes", time: "20:30 - 21:15", coach: "Dr. Marcos Soler" }
    ],
    pricing: "Gratis en Plan Elite o $20/sesión"
  },
  {
    id: "power-sculpt",
    title: "Heavy Biomechanics & Hypertrophy",
    category: "Fuerza & Masa Muscular",
    categoryKey: "strength",
    intensity: 4,
    duration: "55 min",
    calories: "500 - 650 kcal",
    coach: "Carlos 'Titan' Durán",
    coachRole: "Especialista en Biomecánica y Powerbuilding",
    spotsTotal: 12,
    spotsLeft: 4,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Desarrollo muscular inteligente guiado por ángulos anatómicos de máxima tensión. Máquinas Nautilus y pesos calibrados con cero estrés articular.",
    benefits: ["Hipertrofia miofibrilar pura", "Prevención y corrección postural", "Incremento de densidad ósea", "Técnica milimétrica en sentadilla y peso muerto"],
    scheduleSlots: [
      { day: "Martes y Jueves", time: "09:00 - 10:00", coach: "Carlos Durán" },
      { day: "Martes y Jueves", time: "18:00 - 19:00", coach: "Carlos Durán" },
      { day: "Viernes", time: "19:30 - 20:30", coach: "Carlos Durán" }
    ],
    pricing: "Incluido en Membresía o Pase $18/sesión"
  },
  {
    id: "neuro-flow",
    title: "Neuro-Flow & Somatic Mobility",
    category: "Movilidad & Mente",
    categoryKey: "mobility",
    intensity: 2,
    duration: "50 min",
    calories: "220 - 300 kcal",
    coach: "Sofía Alarcón",
    coachRole: "Instructora de Movilidad & Respiración Consciente",
    spotsTotal: 14,
    spotsLeft: 5,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Desbloqueo fascial, rango articular completo (CARS), técnicas respiratorias hipopresivas y reequilibrio del tono simpático-vagal.",
    benefits: ["Liberación de rigidez en espalda y caderas", "Mayor flexibilidad activa y estabilidad", "Disminución de ansiedad muscular", "Mejora de la postura y el balance"],
    scheduleSlots: [
      { day: "Lunes, Miércoles y Viernes", time: "08:00 - 08:50", coach: "Sofía Alarcón" },
      { day: "Martes y Jueves", time: "20:00 - 20:50", coach: "Sofía Alarcón" }
    ],
    pricing: "Incluido en Membresía o Pase $15/sesión"
  },
  {
    id: "hiit-metabolic",
    title: "Zone 5 Metabolic Sprint Conditioning",
    category: "Resistencia & Fuerza",
    categoryKey: "endurance",
    intensity: 5,
    duration: "45 min",
    calories: "600 - 800 kcal",
    coach: "Mateo Rivera",
    coachRole: "Preparador Físico de Alto Rendimiento",
    spotsTotal: 18,
    spotsLeft: 6,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Intervalos de máxima intensidad monitorizados con bandas cardíacas en directo en los videowalls del gimnasio. Quema glucógeno y despierta tu motor metabólico.",
    benefits: ["Mejora drástica del VO2 Max", "Aceleración metabólica de 24h", "Entrenamiento de alta eficiencia temporal", "Pico de endorfinas"],
    scheduleSlots: [
      { day: "Lunes a Viernes", time: "06:30 - 07:15", coach: "Mateo Rivera" },
      { day: "Lunes a Viernes", time: "13:30 - 14:15", coach: "Mateo Rivera" },
      { day: "Lunes a Jueves", time: "20:00 - 20:45", coach: "Mateo Rivera" }
    ],
    pricing: "Incluido en Membresía o Pase $16/sesión"
  },
  {
    id: "tech-boxing",
    title: "Tech Boxing & Neuro-Reflexes",
    category: "Combate & Agilidad",
    categoryKey: "combat",
    intensity: 4,
    duration: "50 min",
    calories: "650 - 850 kcal",
    coach: "Lucía Méndez",
    coachRole: "Ex-Boxeadora Olímpica & Conditioning Specialist",
    spotsTotal: 12,
    spotsLeft: 1, // High demand
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "Golpeo al saco sensorial, combinaciones explosivas, juego de pies y drills cognitivos de reacción visual.",
    benefits: ["Descarga absoluta de tensión mental", "Coordinación óculo-manual de élite", "Fuerza en core y cintura escapular", "Defensa y reflejos rápidos"],
    scheduleSlots: [
      { day: "Martes y Jueves", time: "07:30 - 08:20", coach: "Lucía Méndez" },
      { day: "Lunes, Miércoles y Viernes", time: "18:30 - 19:20", coach: "Lucía Méndez" }
    ],
    pricing: "Incluido en Membresía o Pase $18/sesión"
  }
];

export const PRODUCTS = [
  {
    id: "creapure-ultra",
    name: "Creatina Monohidrato Creapure® Ultramicronizada",
    tagline: "El estándar de oro mundial en fuerza celular",
    category: "Fuerza & Rendimiento",
    categoryKey: "strength",
    price: 34.00,
    rating: 4.9,
    reviewsCount: 142,
    badge: "MÁS VENDIDO",
    inStock: true,
    size: "300g (100 servicios de 3g)",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=80",
    features: ["100% Creapure® fabricada en Alemania", "Solubilidad instantánea sin grumos", "Aumenta la fuerza explosiva y volumen celular", "Vegana, sin saborizantes ni aditivos artificiales"],
    howToUse: "3g diarios disueltos en agua o en tu batido, con o sin comida."
  },
  {
    id: "hydro-isolate-whey",
    name: "Hydro-Isolate Pure Grass-Fed 1kg",
    tagline: "Aislado hidrolizado de vacas de pastoreo sin hormonas",
    category: "Masa Muscular",
    categoryKey: "muscle",
    price: 58.00,
    rating: 5.0,
    reviewsCount: 98,
    badge: "PREMIUM BIOLAB",
    inStock: true,
    size: "1kg (33 tomas de 30g)",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80",
    features: ["28g de proteína pura por toma con 6.5g de BCAAs", "0g de azúcares añadidos y menos de 0.2g de grasa", "Absorción ultra-rápida en 15 minutos sin pesadez estomacal", "Sabor Cacao Ancestral Orgánico endulzado con Stevia pura"],
    howToUse: "1 scoop (30g) mezclado con 250ml de agua fría inmediatamente tras el entrenamiento."
  },
  {
    id: "biocell-electrolytes",
    name: "Bio-Cell Cellular Electrolytes & Minerals",
    tagline: "Hidratación intracelular sin azúcar ni caídas de energía",
    category: "Hidratación & Energía",
    categoryKey: "hydration",
    price: 26.00,
    rating: 4.8,
    reviewsCount: 84,
    badge: "ESENCIAL HYROX",
    inStock: true,
    size: "250g (50 servicios)",
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80",
    features: ["Ratio exacto de Sodio de Sal Rosa del Himalaya (500mg)", "Potasio citrato y Magnesio bisglicinato quelado", "Previene calambres, fatiga y niebla mental durante entrenamientos intensos", "Sabor Lima Eléctrica 100% natural"],
    howToUse: "1 cucharilla dosificadora en 700ml de agua durante tu sesión o sauna."
  },
  {
    id: "neuro-drive-pre",
    name: "Neuro-Drive Focus Nootropic Pre-Workout",
    tagline: "Enfoque láser y congestión muscular sin taquicardias",
    category: "Enfoque & Energía",
    categoryKey: "energy",
    price: 39.00,
    rating: 4.9,
    reviewsCount: 110,
    badge: "FÓRMULA NOOTRÓPICA",
    inStock: true,
    size: "300g (30 servicios)",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    features: ["L-Alfa-GPC 300mg para conexión mente-músculo", "L-Tirosina + L-Teanina para concentración serena", "L-Citrulina Malato 6000mg para óxido nítrico y bombeo", "Cafeína de liberación gradual de grano de café verde (150mg)"],
    howToUse: "Tomar 20 minutos antes de entrenar en 250ml de agua."
  },
  {
    id: "deep-sleep-magnesium",
    name: "Deep REM Magnesium Bisglycinate + Apigenina",
    tagline: "El reparador biológico nocturno por excelencia",
    category: "Recuperación & Sueño",
    categoryKey: "recovery",
    price: 31.00,
    rating: 4.9,
    reviewsCount: 76,
    badge: "BIOHACK FAVORITO",
    inStock: true,
    size: "90 cápsulas vegetales (30 días)",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    features: ["Magnesio de máxima biodisponibilidad TRAACS®", "50mg Apigenina de manzanilla pura (agonista GABA natural)", "50mg L-Teanina para silenciar pensamientos rumiantes", "Despierta con el sistema nervioso totalmente reseteado"],
    howToUse: "Tomar 3 cápsulas 45 minutos antes de dormir con agua tibia."
  },
  {
    id: "omega-3-ultra-pure",
    name: "Omega-3 Triglycerides IFOS 5★ Ultra Puro",
    tagline: "Antiinflamatorio celular y salud cardiovascular",
    category: "Salud & Longevidad",
    categoryKey: "health",
    price: 29.00,
    rating: 4.8,
    reviewsCount: 65,
    badge: "CERTIFICADO IFOS",
    inStock: true,
    size: "60 perlas de gel (60 días)",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
    features: ["800mg EPA y 400mg DHA por perla en forma de triglicéridos naturales", "Libre de metales pesados, PCBs y microplásticos por destilación molecular", "Cero regusto a pescado (sello FreshGuard)", "Protege articulaciones y optimiza el perfil lipídico"],
    howToUse: "1 o 2 perlas diarias con la comida principal."
  },
  {
    id: "stealth-shaker-steel",
    name: "Shaker Térmico Stealth Acero Quirúrgico 750ml",
    tagline: "Cero plástico, doble pared al vacío, frío durante 24 horas",
    category: "Equipamiento & Gear",
    categoryKey: "gear",
    price: 24.00,
    rating: 4.7,
    reviewsCount: 52,
    badge: "EDICIÓN LIMITADA",
    inStock: true,
    size: "750ml / 25oz",
    image: "https://images.unsplash.com/photo-1585342565162-aa612f0f4a38?auto=format&fit=crop&w=800&q=80",
    features: ["Acero inoxidable grado 316 resistente a olores bacterianos", "Rejilla rompegrumos silenciosa integrada", "Cierre hermético a prueba de fugas 100% garantizado", "Logo grabado en láser 'KINETIC LAB'"],
    howToUse: "Apto para lavavajillas. Ideal tanto para proteína fría como café caliente pre-entreno."
  },
  {
    id: "heavy-duty-straps",
    name: "Straps de Levantamiento Kevlar Grip Pro",
    tagline: "Diseñados para cargas pesadas en peso muerto y remos",
    category: "Equipamiento & Gear",
    categoryKey: "gear",
    price: 18.00,
    rating: 4.9,
    reviewsCount: 44,
    badge: "RESISTENCIA TOTAL",
    inStock: true,
    size: "Par ajustable con acolchado de neopreno",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    features: ["Algodón balístico reforzado con costuras dobles de hilo de kevlar", "Almohadilla de muñeca de neopreno de 5mm contra rozaduras", "Tracción inmediata en barras de barra olímpica y mancuernas", "Capacidad probada hasta 350 kg"],
    howToUse: "Enrollar firmemente sobre la barra en dirección opuesta a los dedos para fijar el agarre."
  }
];

export const FEATURED_NEWS = [
  {
    id: "news-cryo-launch",
    title: "Nueva Zona Cryo & Infrared: La ciencia del contraste térmico llega a Kinetic",
    category: "INSTALACIONES & BIENESTAR",
    categoryTag: "NUEVA ZONA",
    date: "Destacado Hoy",
    readTime: "2 min de lectura",
    featuredBadge: "NOVEDAD ESTRELLA",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Hemos inaugurado oficialmente nuestras tinas de inmersión en frío a 3°C y el sauna de infrarrojo lejano de alta penetración celular para acelerar tu recuperación hasta un 300%.",
    content: "La terapia de contraste térmico es la herramienta de biohacking más potente del momento. Al someter el organismo a la alternancia entre calor profundo (activando heat shock proteins) y frío agudo (liberando noradrenalina y reduciendo la inflamación sistémica), no solo multiplicas la tasa de recuperación muscular sino que optimizas el sistema cardiovascular y la calidad del sueño.",
    actionText: "Reservar sesión inaugural por WhatsApp",
    actionType: "booking",
    linkedActivityId: "bio-contrast"
  },
  {
    id: "news-hyrox-internal-cup",
    title: "VORTEX HYROX CUP 2026: Competición interna y clasificatoria oficial",
    category: "EVENTOS & COMPETICIÓN",
    categoryTag: "EVENTO EXCLUSIVO",
    date: "Próximo Sábado 18",
    readTime: "3 min de lectura",
    featuredBadge: "INSCRIPCIONES ABIERTAS",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    excerpt: "¿Listo para poner a prueba tu motor? Abrimos las inscripciones para la copa interna de simulación de carrera HYROX en modalidades Individual y Dobles.",
    content: "Con estaciones de SkiErg, Sled Push/Pull, Burpee Broad Jumps, Remo, Farmers Carry, Zancadas con saco y Wall Balls, junto a 1km de carrera entre cada estación. Premios para los 3 primeros puestos en equipamiento y suplementación de Kinetic Lab.",
    actionText: "Anotar a mi equipo / dupla vía WhatsApp",
    actionType: "event",
    eventCode: "HYROX-CUP-2026"
  },
  {
    id: "news-new-creapure-batch",
    title: "Lote exclusivo Creapure® y Nuevos Sabores de Hydro-Isolate disponibles",
    category: "TIENDA & NUTRICIÓN",
    categoryTag: "PRODUCTOS NUEVOS",
    date: "Stock Actualizado",
    readTime: "2 min de lectura",
    featuredBadge: "STOCK LIMITADO",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Acaba de aterrizar en nuestra tienda el nuevo embarque certificado de creatina Creapure® y el codiciado sabor Cold Brew Coffee para la proteína Hydro-Isolate.",
    content: "Ambos productos cuentan con análisis cromatográficos independientes que garantizan 0% impurezas y máxima biodisponibilidad. Puedes retirarlos directamente en la recepción del gimnasio o solicitarlos para entrega a domicilio mediante nuestro WhatsApp.",
    actionText: "Comprar ahora con 1 click",
    actionType: "shop"
  },
  {
    id: "news-longevity-masterclass",
    title: "Masterclass Gratuita: Ritmos Circadianos, Ayuno y Máximo Rendimiento",
    category: "FORMACIÓN & SALUD",
    categoryTag: "TALLER GRATIS",
    date: "Jueves 20:00 hs",
    readTime: "4 min de lectura",
    featuredBadge: "CUPOS LIMITADOS",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    excerpt: "Aprende de la mano de médicos deportivos cómo sincronizar tus horarios de entrenamiento, ingesta proteica y exposición a la luz solar para maximizar tu testosterona y energía diaria.",
    content: "Una charla amena, con base empírica y aplicable al día a día. Incluye cata de electrolitos y café nootrópico para todos los asistentes presenciales en el auditorio del gym.",
    actionText: "Asegurar mi asiento por WhatsApp",
    actionType: "event",
    eventCode: "MASTERCLASS-CIRCADIANOS"
  }
];

export const MEMBERSHIP_PLANS = [
  {
    id: "plan-trial",
    name: "PASS EXPERIENCIA",
    tagline: "Para descubrir el ecosistema",
    price: 15,
    period: "Pase diario único",
    popular: false,
    badge: "SIN COMPROMISO",
    features: [
      "Acceso de día completo a sala de pesas biomecánica",
      "1 clase grupal a elección (Hyrox, Flow o Boxing)",
      "Acceso a vestuarios con amenities premium",
      "Bebida isotónica de bienvenida cortesía del Lab"
    ],
    ctaText: "Pedir Pase de 1 Día por WhatsApp"
  },
  {
    id: "plan-kinetic-pro",
    name: "KINETIC PRO",
    tagline: "El estándar para atletas comprometidos",
    price: 65,
    period: "Facturación mensual",
    popular: true,
    badge: "MÁS POPULAR",
    features: [
      "Acceso ilimitado 7 días a la semana",
      "Todas las actividades y clases grupales incluidas",
      "Monitoreo cardíaco en pantallas en clases HIIT",
      "Locker permanente y toallas ilimitadas",
      "Acceso a la app de registro de cargas y marcas",
      "1 sesión de Cryo & Contrast mensual"
    ],
    ctaText: "Suscribirme al Plan Pro por WhatsApp"
  },
  {
    id: "plan-elite-biohacker",
    name: "ELITE BIOHACKER",
    tagline: "Optimización biológica y física integral",
    price: 115,
    period: "Facturación mensual",
    popular: false,
    badge: "EXPERIENCIA DEFINITIVA",
    features: [
      "Todo lo incluido en KINETIC PRO",
      "Acceso ILIMITADO al Cryo & Infrared Contrast Lab (Hielo + Sauna)",
      "15% de descuento permanente en toda la tienda de suplementos",
      "Evaluación mensual de composición corporal InBody / Bioimpedancia",
      "Plan nutricional personalizado y ajuste de suplementación",
      "2 pases de invitado al mes para amigos"
    ],
    ctaText: "Solicitar Membresía Elite por WhatsApp"
  }
];

export const BIO_RECOMMENDER_GOALS = [
  {
    id: "strength",
    title: "Aumento de Fuerza & Masa Muscular",
    icon: "Dumbbell",
    recommendedActivityId: "power-sculpt",
    recommendedActivityTitle: "Heavy Biomechanics & Hypertrophy",
    recommendedProducts: ["hydro-isolate-whey", "creapure-ultra", "heavy-duty-straps"],
    strategyText: "Enfoque en tensión mecánica progresiva, proteína hidrolizada rápida y saturación de fosfocreatina muscular."
  },
  {
    id: "hyrox",
    title: "Resistencia Atlética & Competición Hyrox",
    icon: "Zap",
    recommendedActivityId: "hyrox-protocol",
    recommendedActivityTitle: "HYROX Performance Protocol",
    recommendedProducts: ["biocell-electrolytes", "creapure-ultra", "neuro-drive-pre"],
    strategyText: "Intervalos de alta densidad, equilibrio electrolítico intra-entrenamiento y enfoque cognitivo bajo fatiga."
  },
  {
    id: "longevity",
    title: "Salud, Desinflamación & Longevidad Activa",
    icon: "HeartPulse",
    recommendedActivityId: "bio-contrast",
    recommendedActivityTitle: "Cryo & Infrared Contrast Lab",
    recommendedProducts: ["deep-sleep-magnesium", "omega-3-ultra-pure", "biocell-electrolytes"],
    strategyText: "Exposición térmica al frío y calor para regeneración celular, optimización de ondas delta en el sueño y soporte de ácidos grasos EPA/DHA."
  },
  {
    id: "fatloss",
    title: "Quema Grasa, Tono & Salud Cardiovascular",
    icon: "Flame",
    recommendedActivityId: "hiit-metabolic",
    recommendedActivityTitle: "Zone 5 Metabolic Sprint Conditioning",
    recommendedProducts: ["biocell-electrolytes", "hydro-isolate-whey", "stealth-shaker-steel"],
    strategyText: "Entrenamiento por zonas cardíacas para vaciado glucogénico y déficit calórico seguro preservando la masa muscular."
  }
];
