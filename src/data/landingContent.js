// Contenido canónico de la landing.
// Edita SOLO este archivo para adaptar la landing a cualquier producto, servicio o nicho.

export const landingContent = {
  brand: {
    name: "Filadrive",
    logoText: "FILADRIVE",
    tagline: "Research e-commerce con veredicto. Decide con evidencia, no a ojo."
  },

  product: {
    name: "Filadrive Intelligence",
    category: "SaaS de research e-commerce todo en uno",
    mainPromise:
      "Sabe en 7 minutos si tu próxima idea de producto va a funcionar — o no",
    shortDescription:
      "Cruza Google Trends, SERPs, Amazon, ads activos y proveedores. Aplica una rúbrica abierta de 11 dimensiones. Te entrega un veredicto claro: DESCARTAR, TESTEAR, LANZAR o ESCALAR.",
    targetAudience:
      "Sellers de Amazon, Shopify y TikTok Shop, dropshippers, agencias de growth y founders que validan ideas en serie"
  },

  hero: {
    eyebrow: "Nuevo · SaaS de research con veredicto",
    headline: "Deja de buscar productos. Empieza a tomar decisiones.",
    subheadline:
      "El primer SaaS de research e-commerce en español que te dice si lanzar tu próximo producto, con evidencia. No con suposiciones.",
    primaryCTA: "Quiero mi acceso ahora",
    secondaryCTA: "Ver cómo funciona",
    secondaryVideoUrl: "/demo.mp4",
    trustNote: "Pago Seguro · Datos 100% privados · Soporte humano"
  },

  // Lead magnet: dossier informativo gratis para captar al lead antes de la conversión.
  // Se renderiza como bloque secundario en el hero, debajo del CTA "Ver cómo funciona".
  freebie: {
    eyebrow: "📥 Recurso gratuito",
    description:
      "Llévate la guía completa con la metodología de las 11 dimensiones — la rúbrica entera, los 4 veredictos y un tour del dashboard.",
    cta: "Guía GRATIS",
    fileUrl: "/guia-filadrive.pdf",
    fileName: "Filadrive-Intelligence-Guia.pdf",
    eventName: "lead_magnet_download"
  },

  trustBar: {
    label: "Construido sobre las mejores fuentes de datos del mercado",
    badges: [
      "Google Trends",
      "DataForSEO",
      "SerpApi",
      "Apify",
      "Amazon SERP",
      "Meta Ad Library"
    ]
  },

  painPoints: {
    headline: "¿Te suena alguno de estos escenarios?",
    subheadline: "Si reconoces uno solo, esta herramienta está pensada para ti.",
    items: [
      "Tienes 12 productos en una hoja de cálculo y aún no sabes cuál lanzar primero.",
      "Probaste EcomHunt, Niche Scraper y Helium 10 — y cada uno te dice algo diferente.",
      "Cada idea nueva acaba siendo otra apuesta a ciegas. Sin evidencia. Solo intuición."
    ]
  },

  agitation: {
    headline: "Cada lanzamiento sin validar es dinero quemado",
    description:
      "Una decisión equivocada significa semanas de creatividades, ads gastados, stock parado y un equipo desmoralizado. El problema no es la falta de ideas: es que no tienes una forma fiable de saber cuál merece la pena.",
    points: [
      "Tu presupuesto de ads se va probando productos sin validación previa.",
      "Tu tiempo desaparece comparando 4 herramientas que no se ponen de acuerdo.",
      "Tu próxima idea brillante se queda en la hoja de cálculo otros tres meses."
    ]
  },

  solution: {
    headline: "Una rúbrica abierta. 11 dimensiones. Un veredicto claro.",
    description:
      "Filadrive aplica una metodología pública sobre tu idea — tendencia, demanda, competencia, margen, logística, diferenciación, viralidad, SEO, retención, riesgo y oferta — cruza Google Trends, SERPs, Amazon, ads activos y proveedores, y te entrega un veredicto justificado en formato simple.",
    bullets: [
      "11 Dimensiones Evaluadas, 100 puntos, Una sola Decisión",
      "Cada Puntaje Viene con su Fuente y Su Nivel de Confianza",
      "Veredicto en 7 minutos: DESCARTAR, TESTEAR, LANZAR o ESCALAR"
    ],
    verdicts: [
      {
        name: "ESCALAR",
        range: "Score ≥90",
        description: "Datos reales positivos. Invierte sin titubear, plan de escalado activo.",
        variant: "primary"
      },
      {
        name: "LANZAR",
        range: "Score 80–89",
        description: "Confianza alta, 0 red flags. Adelante con plan 30/60/90 ejecutable.",
        variant: "success"
      },
      {
        name: "TESTEAR",
        range: "Score 60–79",
        description: "Validar primero con tráfico mínimo antes de comprometer presupuesto.",
        variant: "info"
      },
      {
        name: "DESCARTAR",
        range: "Score <50",
        description: "Te ahorras un lanzamiento que probablemente no funcionaba.",
        variant: "danger"
      }
    ]
  },

  benefits: {
    headline: "Lo que cambia desde tu primer run",
    subheadline: "No es un dashboard de métricas sueltas. Es una decisión.",
    items: [
      {
        title: "Veredicto en 7 minutos",
        description:
          "No 47 métricas: una decisión clara — DESCARTAR, TESTEAR, LANZAR o ESCALAR.",
        icon: "Compass",
        size: "lg",
        back: {
          description:
            "Tu cerebro no decide con 47 KPIs flotando. Decide con un sí o un no. Filadrive te entrega esa decisión en menos tiempo del que tardas en abrir Helium 10 — y con más fundamento. 6 horas de research convertidas en una sola línea: lanzar o descartar."
        }
      },
      {
        title: "Evidencia trazable",
        description:
          "Cada puntaje viene con fuente: Google Trends, SERP, Amazon, Meta. Sin scores inventados.",
        icon: "Microscope",
        size: "md",
        back: {
          description:
            "Lanzar un producto de 5.000€ basándote en un \"winning score 9/10\" es apostar sin saberlo. Cada puntaje de Filadrive viene con su fuente exacta — Trends, SERP, Amazon, ads activos. Si dudas, lo verificas en 30 segundos. Tu decisión deja de depender de la fe."
        }
      },
      {
        title: "En español de verdad",
        description:
          "Producto, soporte y comunidad nativos. Sin traducciones torpes de Helium 10.",
        icon: "Languages",
        size: "md",
        back: {
          description:
            "Helium 10 traduce \"winning product\" como \"producto ganador\" y se queda tan ancho. Filadrive nace en español, piensa en español y entiende tu mercado real: IVA, dropshipping a CDMX, precios psicológicos en LATAM. La diferencia entre traducir y entender."
        }
      },
      {
        title: "Rúbrica abierta de 11 dimensiones",
        description:
          "Tendencia, demanda, competencia, margen, logística, riesgo. Auditable y repetible.",
        icon: "Layers",
        size: "md",
        back: {
          description:
            "Cualquiera puede inventar un score y llamarlo \"AI proprietary\". Filadrive te enseña la rúbrica completa, los pesos de cada dimensión y cómo se calcula. ¿No estás de acuerdo con un puntaje? Lo discutes con argumentos. La transparencia que evitan las cajas negras."
        }
      },
      {
        title: "Plan 30 / 60 / 90",
        description:
          "Cada veredicto positivo viene con un plan ejecutable descargable en PDF.",
        icon: "CalendarRange",
        size: "md",
        back: {
          description:
            "Saber que algo va a funcionar y no saber qué hacer mañana es la trampa más cara del e-commerce. Cada veredicto positivo trae tu primer día, semana y mes ya planificados: creatividades, presupuesto y KPI a vigilar. Ejecutas — no improvisas."
        }
      },
      {
        title: "Datos 100% privados",
        description: "Tus runs son tuyos. No vendemos datos. La metodología es la única abierta.",
        icon: "Lock",
        size: "lg",
        back: {
          description:
            "Tu próxima idea de 30.000€/mes no debería viajar a un servidor que entrena modelos para tu competencia. Filadrive guarda tus runs en tu workspace privado, no usa tus búsquedas para entrenar nada y cumple GDPR de origen. Tu nicho, tu margen, tu propiedad."
        }
      }
    ]
  },

  productExperience: {
    eyebrow: "Vive el veredicto",
    headline: "Una pantalla que sí entiendes",
    description:
      "Sin 47 KPIs flotantes. Un titular, un puntaje, un veredicto y los 3 motivos clave que lo explican. La complejidad del análisis está debajo — disponible cuando la necesitas.",
    highlights: [
      "Veredicto destacado: DESCARTAR, TESTEAR, LANZAR o ESCALAR",
      "Scorecard de 11 dimensiones con fuente y confianza",
      "Plan 30/60/90 descargable en PDF y dashboard"
    ],
    demo: {
      title: "Últimos veredictos",
      subtitle: "Vista de muestra del workspace",
      stats: [
        { label: "Runs ejecutados", value: "1.247", delta: "+12%", deltaTone: "success" },
        { label: "Veredictos LANZAR", value: "184", delta: "+8%", deltaTone: "success" },
        { label: "Tasa ESCALAR", value: "8,2%", delta: "+1,4pp", deltaTone: "primary" }
      ],
      runs: [
        {
          id: "OP-241201-014",
          idea: "Botellas thermo eco infusoras",
          score: 91,
          verdict: "ESCALAR",
          variant: "primary"
        },
        {
          id: "OP-241130-027",
          idea: "Bolsas térmicas para meal prep",
          score: 84,
          verdict: "LANZAR",
          variant: "success"
        },
        {
          id: "OP-241129-031",
          idea: "Cables organizadores premium",
          score: 72,
          verdict: "TESTEAR",
          variant: "info"
        },
        {
          id: "OP-241128-018",
          idea: "Stand tablet ergonómico cocina",
          score: 67,
          verdict: "TESTEAR",
          variant: "info"
        },
        {
          id: "OP-241127-009",
          idea: "Lámparas LED TikTok aesthetic",
          score: 38,
          verdict: "DESCARTAR",
          variant: "danger"
        }
      ]
    }
  },

  howItWorks: {
    headline: "Cómo funciona, en 3 pasos",
    subheadline: "Sin curva de aprendizaje. Sin spreadsheets. Sin gurús.",
    steps: [
      {
        step: "01",
        title: "Describe tu idea",
        description: "Un campo, dos minutos. Tu nicho, tu producto, tu hipótesis."
      },
      {
        step: "02",
        title: "Filadrive ejecuta 13 fases de research",
        description:
          "Tendencias, demanda, competidores, keywords, márgenes, oferta y plan. Todo cruzado con fuentes públicas."
      },
      {
        step: "03",
        title: "Recibes tu veredicto",
        description:
          "Veredicto + scorecard + plan 30/60/90 en PDF y dashboard. Decides con evidencia."
      }
    ]
  },

  socialProof: {
    headline: "Quienes ya lo usan dejaron de adivinar",
    subheadline: "Reviews iniciales de la Founder's edition.",
    testimonials: [
      {
        name: "Carla R.",
        role: "E-commerce founder · Barcelona",
        text: "El primer veredicto que entendí. DESCARTAR — y me ahorré 1.200€ en ads que ya tenía planeados."
      },
      {
        name: "David S.",
        role: "Amazon seller · Madrid",
        text: "Llevaba 6 meses con Helium 10 y nunca había pillado el sentido. Filadrive me lo explicó en una pantalla."
      },
      {
        name: "Lucía M.",
        role: "Dropshipping · CDMX",
        text: "Lo bueno: en español. Lo mejor: no me dijo que mi idea era genial cuando no lo era."
      }
    ],
    stats: [
      { value: 11, label: "Dimensiones de análisis" },
      { value: 13, label: "Fases de research por run" },
      { value: 7, suffix: " min", label: "Tiempo medio al veredicto" },
      { value: 14, suffix: " días", label: "Garantía money-back" }
    ]
  },

  offer: {
    eyebrow: "Plan Starter · Founder's edition",
    headline: "Todo lo que recibes con el primer plan",
    subheadline: "5 runs al mes. Veredicto, scorecard y plan en cada uno.",
    priceAnchor: "59€/mes",
    price: "24,90€",
    priceNote: "ÚNICO PAGO",
    included: [
      "5 runs/mes con análisis completo (depth: standard)",
      "Veredicto + scorecard de 11 dimensiones + plan 30/60/90 descargable",
      "Plantilla 'Validador 7 minutos' + minicurso 'Cómo leer un veredicto'",
      "Acceso a la rúbrica abierta y a la metodología completa"
    ],
    primaryCTA: "Quiero mi acceso ahora",

  },

  urgency: {
    headline: "Founder's edition activa",
    description:
      "El precio actual y los bonus (minicurso, plantilla, comunidad VIP) forman parte del lanzamiento. Cuando el cupo de Founders se complete, los planes pasan al precio estándar.",
    limitText: "Condiciones de Founder activas durante esta campaña."
  },

  faq: [
    {
      question: "¿En qué se diferencia de Helium 10, Sell The Trend o Niche Scraper?",
      answer:
        "Filadrive es research con veredicto. Las otras te dan datos sueltos; Filadrive cruza fuentes y emite una recomendación clara — DESCARTAR, TESTEAR, LANZAR o ESCALAR. Y todo en español nativo."
    },
    {
      question: "¿Sirve si vendo en Amazon, Shopify o TikTok Shop?",
      answer:
        "Sí. Filadrive es agnóstica de plataforma. Si vendes producto físico, digital o dropshipping en cualquier canal, el research aplica. Si tu nicho es Amazon-only, considera Helium 10 como complemento."
    },
    {
      question: "¿Qué pasa si el veredicto es DESCARTAR?",
      answer:
        "Te has ahorrado un lanzamiento que probablemente no funcionaba. El report te explica por qué y qué cambiaría el veredicto (cambiar de proveedor, pivotar segmento, esperar a otra estación)."
    },
    {
      question: "¿Cómo se calculan los puntajes?",
      answer:
        "La rúbrica es abierta y pública: 11 dimensiones, 100 puntos. Cada puntaje viene con su fuente (Trends, SERP, Amazon, ads activos) y su nivel de confianza (alto, medio o bajo)."
    },
    {
      question: "¿Mi idea está protegida? ¿Subiréis mis nichos a alguna parte?",
      answer:
        "No. Tus runs son privados. No vendemos datos ni los usamos para entrenar nada. La metodología es abierta; los datos de cada run son tuyos."
    },
    {
      question: "¿Funciona si soy completamente principiante?",
      answer:
        "Está pensado para ti. El minicurso 'Cómo leer un veredicto' + las plantillas + la comunidad cubren la curva inicial."
    },
    {
      question: "¿Hay garantía?",
      answer:
        "Trial 14 días money-back, sin preguntas. Si no descubres al menos 1 oportunidad real para tu nicho, te devolvemos tu dinero al contactar soporte."
    }
  ],

  finalCTA: {
    eyebrow: "Decisión simple",
    headline: "Activa tu acceso. Veredicto en 7 minutos.",
    description:
      "Acceso inmediato. 14 días money-back. Datos 100% tuyos. La próxima decisión que tomes sobre un producto puede tener evidencia detrás.",
    button: "Quiero mi acceso ahora",
    microcopy: "Sin tarjeta · 90 segundos para empezar · Acceso inmediato"
  },

  // Página de gracias post-pago: CTA primario que lleva al onboarding (crear cuenta).
  // El ThankYouPage añade automáticamente ?pi=<paymentIntentId> para verificar el pago.
  thankYou: {
    primaryCTA: "Crear mi cuenta",
    primaryCTAUrl: "/crear-cuenta",
    primaryCTAHelper: "Define tus credenciales en 30 segundos y te activamos el acceso."
  },

  // Página de crear-cuenta: CTA del estado de éxito (tras crear cuenta).
  // Apunta al dashboard real del repo saas-dashboard donde el usuario inicia sesión
  // con las credenciales recién creadas (Supabase auth).
  //   - Dev (corriendo `npm run dev` del saas-dashboard):  http://localhost:3000/login
  //   - Prod (cuando lo despliegues en Vercel):            https://tu-dashboard.vercel.app/login
  createAccount: {
    successCta: "Ir a mi dashboard",
    successCtaUrl: "http://localhost:3000/login"
  },

  footer: {
    description:
      "SaaS de research e-commerce con veredicto. Evidencia trazable, en español, sin marketing humo. Helium 10®, Jungle Scout®, Sell The Trend® y otras marcas son de sus propietarios. Filadrive no está afiliada.",
    columns: [
      {
        title: "Producto",
        links: [
          { label: "Beneficios", href: "#benefits" },
          { label: "Cómo funciona", href: "#how" },
          { label: "FAQ", href: "#faq" }
        ]
      },
      {
        title: "Recursos",
        links: [
          { label: "Rúbrica abierta", href: "#" },
          { label: "Documentación", href: "#" },
          { label: "Comunidad Discord", href: "#" }
        ]
      },
      {
        title: "Legal",
        links: [
          { label: "Aviso legal", href: "#" },
          { label: "Privacidad", href: "#" },
          { label: "Cookies", href: "#" }
        ]
      }
    ],
    bottom: "© 2026 Filadrive. Todos los derechos reservados."
  },

  navigation: [
    { label: "Beneficios", href: "#benefits" },
    { label: "Cómo funciona", href: "#how" },
    { label: "Testimonios", href: "#proof" },
    { label: "FAQ", href: "#faq" }
  ],

  // Configuración de conversión: cambia type/url para redirigir el CTA principal.
  // type:
  //   "checkout"  → redirige en la MISMA pestaña a una URL fija (Stripe Payment Link, etc)
  //   "external"  → abre URL en nueva pestaña (links de soporte, docs...)
  //   "scroll"    → scroll suave al id (#offer)
  //   "callback"  → llama a conversion.callback(payload)
  //
  // Actual: redirige a /pago (Stripe Elements custom con paleta naranja).
  // El cobro se procesa via /api/create-payment-intent y, tras succeeded,
  // /api/create-account crea el usuario en Supabase para el dashboard.
  conversion: {
    type: "checkout",
    url: "/pago",
    eventName: "checkout_open"
  }
};

export default landingContent;
