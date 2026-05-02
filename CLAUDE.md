# CLAUDE.md

## Rol del proyecto

Actúa como arquitecto senior frontend, especialista en React, Vite, JavaScript, CSS moderno, UX/UI premium, neuromarketing, copywriting de conversión, CRO, animaciones con Framer Motion, GSAP, Three.js, glassmorphism y bento grids.

Este proyecto es una landing page canónica de alta conversión, diseñada para poder reutilizarse en diferentes productos, servicios, negocios o nichos sin rehacer la estructura principal.

La prioridad absoluta del proyecto es crear una landing que transmita:

- Confianza.
- Claridad.
- Necesidad.
- Deseo.
- Urgencia ética.
- Seguridad.
- Valor percibido.
- Conversión.

---

## Objetivo principal

Crear y mantener una landing page React/Vite altamente persuasiva, modular, editable y escalable.

La landing debe funcionar como una base canónica.  
No debe estar ligada a un nicho concreto.

Toda la información editable del producto, servicio, oferta, beneficios, testimonios, precio y CTA debe centralizarse en:

`src/data/landingContent.js`

Siempre que sea posible, los cambios de contenido deben hacerse desde ese archivo, no directamente dentro de los componentes.

---

## Stack tecnológico

El proyecto debe usar:

- React.
- Vite.
- JavaScript.
- CSS moderno.
- Framer Motion.
- GSAP.
- Three.js o React Three Fiber.
- @react-three/drei.
- Lucide React para iconos.
- Diseño responsive.
- Arquitectura basada en componentes.
- Glassmorphism.
- Bento Grids.
- Microinteracciones orientadas a conversión.

---

## Estructura obligatoria del proyecto

La estructura principal debe mantenerse así:

```txt
src/
├── assets/
│   └── images/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── StickyCTA.jsx
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── TrustBar.jsx
│   │   ├── ProblemSection.jsx
│   │   ├── AgitationSection.jsx
│   │   ├── SolutionSection.jsx
│   │   ├── BentoBenefits.jsx
│   │   ├── ProductExperience.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── SocialProof.jsx
│   │   ├── OfferStack.jsx
│   │   ├── UrgencySection.jsx
│   │   ├── GuaranteeSection.jsx
│   │   ├── FAQSection.jsx
│   │   └── FinalCTA.jsx
│   ├── ui/
│   │   ├── GlassCard.jsx
│   │   ├── BentoCard.jsx
│   │   ├── CTAButton.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── AnimatedCounter.jsx
│   │   └── TrustBadge.jsx
│   └── visual/
│       ├── HeroVisual3D.jsx
│       ├── FloatingParticles.jsx
│       └── ScrollProgress.jsx
├── data/
│   └── landingContent.js
├── hooks/
│   ├── useGSAPAnimations.js
│   └── useScrollReveal.js
├── styles/
│   ├── globals.css
│   ├── variables.css
│   ├── layout.css
│   ├── animations.css
│   └── responsive.css
├── utils/
│   └── conversionEvents.js
├── App.jsx
└── main.jsx
```

No modificar esta arquitectura sin una razón técnica clara.

---

## Orden estratégico de la landing

La landing debe seguir este orden psicológico de conversión:

1. Header.
2. ScrollProgress.
3. HeroSection.
4. TrustBar.
5. ProblemSection.
6. AgitationSection.
7. SolutionSection.
8. BentoBenefits.
9. ProductExperience.
10. HowItWorks.
11. SocialProof.
12. OfferStack.
13. UrgencySection.
14. GuaranteeSection.
15. FAQSection.
16. FinalCTA.
17. Footer.
18. StickyCTA.

Este orden está pensado para guiar al usuario desde la atención inicial hasta la conversión final.

---

## Principios de neuromarketing

Cada sección debe cumplir una función psicológica concreta.

### HeroSection

Debe responder rápido a:

- Qué es.
- Para quién es.
- Qué resultado promete.
- Por qué debería seguir leyendo.
- Qué acción debe tomar.

Debe incluir:

- Promesa principal.
- Subheadline clara.
- CTA principal.
- CTA secundario si aporta valor.
- Nota de confianza.
- Visual premium.

### TrustBar

Debe reducir la desconfianza inicial.

Puede incluir:

- Badges.
- Estadísticas.
- Seguridad.
- Garantía.
- Clientes.
- Valoraciones.
- Logos simulados si no hay marcas reales.

No inventar marcas reales.

### ProblemSection

Debe hacer que el usuario se identifique con el problema.

Usar lenguaje claro, emocional y directo.

### AgitationSection

Debe mostrar el coste de no actuar, pero de forma ética.

No usar manipulación falsa.  
No usar miedo artificial.  
No usar escasez inventada.

### SolutionSection

Debe presentar el producto como el camino lógico para resolver el problema.

Debe conectar:

`Problema → Solución → Resultado`

### BentoBenefits

Debe mostrar beneficios claros, no solo características.

Cada beneficio debe responder:

`¿Qué gana el cliente con esto?`

### ProductExperience

Debe enseñar o simular la experiencia del producto de forma visual y premium.

Si no existe producto concreto, usar un visual abstracto adaptable.

### HowItWorks

Debe reducir fricción cognitiva.

Usar máximo 3 o 4 pasos simples.

### SocialProof

Debe reforzar confianza.

Puede incluir:

- Testimonios.
- Métricas.
- Casos.
- Frases de clientes.
- Estadísticas editables.

No inventar testimonios reales si no existen. Usar placeholders claramente editables.

### OfferStack

Debe aumentar valor percibido.

Debe incluir:

- Qué recibe el usuario.
- Precio o propuesta.
- Bonus.
- Garantía.
- CTA.

### UrgencySection

Debe usar urgencia ética.

Correcto:

`Condiciones especiales activas durante esta campaña.`

Incorrecto:

`Solo quedan 3 plazas.`

No usar falsa escasez si no existe esa limitación real.

### GuaranteeSection

Debe reducir el riesgo percibido.

### FAQSection

Debe resolver objeciones reales antes del cierre.

### FinalCTA

Debe cerrar con claridad, confianza y acción directa.

---

## Reglas de copywriting

Usar siempre copy orientado a conversión.

Priorizar:

- Claridad antes que creatividad.
- Beneficios antes que características.
- Resultado antes que proceso.
- Especificidad antes que frases genéricas.
- Confianza antes que presión.
- Urgencia ética antes que manipulación.

Evitar frases vacías como:

- La mejor solución del mercado.
- Producto revolucionario.
- Calidad garantizada.
- Innovador y único.
- La opción definitiva.

Sustituirlas por mensajes concretos como:

- Reduce el tiempo de decisión.
- Evita errores costosos.
- Consigue una solución lista para usar.
- Compra con garantía y soporte.
- Ahorra tiempo desde el primer uso.

---

## Reglas de diseño

La estética debe ser premium, moderna y limpia.

Usar:

- Fondo oscuro elegante.
- Gradientes suaves.
- Glassmorphism.
- Bento grids.
- Bordes redondeados.
- Cards con blur.
- Sombras sutiles.
- Efectos de luz.
- Buen contraste.
- Espaciado generoso.
- Mobile first.
- Responsive real.

Evitar:

- Diseño plano básico.
- Exceso de animaciones.
- Colores sin jerarquía.
- Textos demasiado largos.
- Componentes desordenados.
- Secciones sin función de conversión.

---

## Reglas de animación

Las animaciones deben reforzar la conversión, no distraer.

Usar Framer Motion para:

- Entradas suaves.
- Aparición de secciones.
- Hover de cards.
- Hero secuencial.
- CTAs.

Usar GSAP para:

- Scroll effects.
- ScrollTrigger.
- Animaciones controladas por desplazamiento.
- Barras de progreso.
- Elementos visuales avanzados.

Mantener rendimiento alto.

No crear animaciones pesadas innecesarias.

---

## Reglas para Three.js / React Three Fiber

El componente principal será:

`src/components/visual/HeroVisual3D.jsx`

Debe ser:

- Ligero.
- Abstracto.
- Premium.
- Reutilizable.
- Responsive.
- No dependiente de modelos externos obligatorios.
- Con fallback visual si WebGL falla.

Usar geometrías simples como:

- Sphere.
- Torus.
- Icosahedron.
- Partículas suaves.
- Luces ambientales.
- Movimiento lento.

No sobrecargar la landing con escenas pesadas.

---

## Reglas de CSS

El CSS debe estar organizado en:

- `src/styles/variables.css`
- `src/styles/globals.css`
- `src/styles/layout.css`
- `src/styles/animations.css`
- `src/styles/responsive.css`

`variables.css` debe centralizar:

- Colores.
- Gradientes.
- Sombras.
- Radios.
- Espaciados.
- Breakpoints.
- Transiciones.
- Z-index.
- Glass effects.

No duplicar estilos innecesariamente.

---

## Componentes UI reutilizables

Los componentes de `src/components/ui/` deben ser genéricos y reutilizables.

Componentes obligatorios:

- `GlassCard.jsx`
- `BentoCard.jsx`
- `CTAButton.jsx`
- `SectionHeader.jsx`
- `AnimatedCounter.jsx`
- `TrustBadge.jsx`

Cada componente debe aceptar props.

No hardcodear textos de producto dentro de estos componentes.

---

## Gestión de contenido

Toda la información editable debe vivir en:

`src/data/landingContent.js`

Este archivo debe controlar:

- Marca.
- Producto.
- Promesa.
- Hero.
- Problemas.
- Agitación.
- Solución.
- Beneficios.
- Funcionamiento.
- Testimonios.
- Estadísticas.
- Oferta.
- Precio.
- Urgencia.
- Garantía.
- FAQ.
- CTA final.
- Configuración de conversión.

Los componentes deben consumir este archivo.

---

## Eventos de conversión

El archivo:

`src/utils/conversionEvents.js`

Debe incluir funciones preparadas para registrar eventos.

Por ahora usar `console.log` estructurado.

Ejemplo:

```js
trackCTA({
  location: "HeroSection",
  label: "Quiero conseguirlo ahora",
  productName: landingContent.product.name
});
```

Preparar la estructura para futuras integraciones con:

- Google Analytics.
- Meta Pixel.
- TikTok Pixel.
- CRM.
- WhatsApp.
- Email marketing.
- Checkout.

---

## Accesibilidad

Mantener buenas prácticas:

- Botones accesibles.
- Buen contraste.
- Textos legibles.
- HTML semántico.
- Alt text si hay imágenes.
- Estados focus visibles.
- No bloquear navegación móvil.
- No abusar de movimiento si afecta la lectura.

---

## Rendimiento

Priorizar:

- Componentes ligeros.
- Animaciones suaves.
- Evitar dependencias innecesarias.
- No cargar imágenes externas obligatorias.
- No bloquear renderizado.
- Mantener bundle razonable.
- Evitar escenas 3D pesadas.

---

## Reglas de trabajo para Claude Code

Cuando modifiques el proyecto:

1. Revisa primero la estructura existente.
2. No borres archivos importantes sin necesidad.
3. Mantén la arquitectura canónica.
4. Si creas nuevos componentes, colócalos en la carpeta correcta.
5. Si modificas contenido, prioriza `landingContent.js`.
6. Si añades estilos globales, usa los archivos de `src/styles/`.
7. Si añades lógica reutilizable, usa `src/hooks/` o `src/utils/`.
8. Si añades secciones nuevas, colócalas en `src/components/sections/`.
9. Si añades elementos visuales, colócalos en `src/components/visual/`.
10. Comprueba que el proyecto compila.

---

## Comandos principales

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

Crear build de producción:

```bash
npm run build
```

Previsualizar build:

```bash
npm run preview
```

Dependencias recomendadas:

```bash
npm install framer-motion gsap three @react-three/fiber @react-three/drei lucide-react
```

---

## Resultado esperado del proyecto

El resultado final debe ser una landing page:

- Profesional.
- Premium.
- Responsive.
- Animada.
- Persuasiva.
- Reutilizable.
- Editable desde un único archivo de contenido.
- Preparada para campañas.
- Preparada para CRM.
- Preparada para píxeles de conversión.
- Preparada para checkout o WhatsApp.
- Preparada para diferentes productos o nichos.

---

## Criterio de calidad antes de finalizar cualquier tarea

Antes de dar una tarea por terminada, comprobar:

- El proyecto compila.
- No hay imports rotos.
- No hay componentes vacíos.
- No hay errores de consola críticos.
- La landing se ve bien en desktop.
- La landing se ve bien en móvil.
- Los CTA funcionan.
- El contenido viene desde `landingContent.js`.
- Las animaciones no bloquean la experiencia.
- La estructura sigue siendo limpia.
- El diseño mantiene enfoque en conversión.

---

## Prioridad máxima

La prioridad no es solo que la landing sea bonita.

La prioridad es que convierta.

Cada sección debe tener un objetivo psicológico, visual y comercial claro.
