import { motion } from "framer-motion";
import {
  CheckCircle2,
  CompassIcon,
  FileText,
  LayoutDashboard,
  ListChecks,
  Lock,
  Play,
  Settings,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ScrollProgress } from "../components/visual/ScrollProgress";
import { landingContent } from "../data/landingContent";
import "./DashboardInicioPage.css";

const SIDEBAR_DONE = [
  { label: "Pago confirmado", icon: CheckCircle2 },
  { label: "Cuenta creada", icon: CheckCircle2 },
];
const SIDEBAR_ACTIVE = { label: "Configurar workspace", icon: Sparkles };
const SIDEBAR_LOCKED = [
  { label: "Mi primer run", icon: Play },
  { label: "Veredictos", icon: FileText },
  { label: "Plan 30/60/90", icon: ListChecks },
  { label: "Ajustes", icon: Settings },
];

export function DashboardInicioPage() {
  const { brand, product } = landingContent;

  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="dash-init">
        <div className="container dash-init__grid">
          {/* Sidebar simulando dashboard */}
          <aside className="dash-init__sidebar">
            <p className="dash-init__sidebar-title">{brand.name}</p>
            {SIDEBAR_DONE.map((it) => {
              const Icon = it.icon;
              return (
                <div key={it.label} className="dash-init__nav-item">
                  <Icon size={16} strokeWidth={2.2} className="dash-init__nav-icon" style={{ color: "#34d399" }} />
                  <span>{it.label}</span>
                </div>
              );
            })}
            <div className="dash-init__nav-item dash-init__nav-item--active">
              <SIDEBAR_ACTIVE.icon size={16} strokeWidth={2.4} className="dash-init__nav-icon" />
              <span>{SIDEBAR_ACTIVE.label}</span>
            </div>
            {SIDEBAR_LOCKED.map((it) => {
              const Icon = it.icon;
              return (
                <div key={it.label} className="dash-init__nav-item dash-init__nav-item--locked">
                  <Lock size={14} strokeWidth={2.2} className="dash-init__nav-icon" />
                  <span>{it.label}</span>
                </div>
              );
            })}
          </aside>

          {/* Contenido principal */}
          <section className="dash-init__main">
            <motion.div
              className="dash-init__welcome"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="dash-init__chip">
                <LayoutDashboard size={12} strokeWidth={2.4} />
                Workspace activado
              </span>
              <h1 className="dash-init__welcome-title">
                <span className="text-gradient">Bienvenido a tu workspace de {brand.name}</span>
              </h1>
              <p className="dash-init__welcome-lead">
                Tu cuenta está lista. Configura tu primer espacio de trabajo y lanza tu primer
                veredicto sobre {product.name} en menos de 3 minutos.
              </p>
            </motion.div>

            <div className="dash-init__steps">
              <motion.div
                className="dash-init__step dash-init__step--done"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <span className="dash-init__step-num">
                  <CheckCircle2 size={18} strokeWidth={2.4} />
                </span>
                <div className="dash-init__step-body">
                  <h3 className="dash-init__step-title">Pago verificado</h3>
                  <p className="dash-init__step-desc">
                    Recibo enviado a tu email. Acceso completo a {product.name} activado.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="dash-init__step"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <span className="dash-init__step-num">1</span>
                <div className="dash-init__step-body">
                  <h3 className="dash-init__step-title">
                    <Target size={18} strokeWidth={2.2} style={{ color: "#ff8a5b" }} />
                    Define tu nicho principal
                  </h3>
                  <p className="dash-init__step-desc">
                    Cuéntanos en qué vertical operas (Amazon FBA, Shopify, TikTok Shop,
                    dropshipping...). Ajustamos la rúbrica y el peso de las 11 dimensiones a tu
                    caso.
                  </p>
                  <button type="button" className="dash-init__step-action" disabled>
                    <Settings size={14} strokeWidth={2.2} />
                    Configurar nicho · próximamente
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="dash-init__step"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <span className="dash-init__step-num">2</span>
                <div className="dash-init__step-body">
                  <h3 className="dash-init__step-title">
                    <CompassIcon size={18} strokeWidth={2.2} style={{ color: "#ff8a5b" }} />
                    Lanza tu primer run
                  </h3>
                  <p className="dash-init__step-desc">
                    Describe una idea de producto. En 7 minutos recibes veredicto + scorecard de 11
                    dimensiones + plan 30/60/90 descargable.
                  </p>
                  <button type="button" className="dash-init__step-action" disabled>
                    <Play size={14} strokeWidth={2.2} />
                    Crear primer run · próximamente
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="dash-init__step"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <span className="dash-init__step-num">3</span>
                <div className="dash-init__step-body">
                  <h3 className="dash-init__step-title">
                    <Users size={18} strokeWidth={2.2} style={{ color: "#ff8a5b" }} />
                    Únete a la comunidad
                  </h3>
                  <p className="dash-init__step-desc">
                    Acceso al Discord privado de Founders. Revisión de runs entre pares, plantillas
                    y casos reales.
                  </p>
                  <button type="button" className="dash-init__step-action" disabled>
                    <Users size={14} strokeWidth={2.2} />
                    Entrar al Discord · próximamente
                  </button>
                </div>
              </motion.div>
            </div>

            <p className="dash-init__support">
              ¿Algún problema con el acceso? Escríbenos a{" "}
              <a href="mailto:soporte@filadrive.io">soporte@filadrive.io</a> y te respondemos en menos de 2 horas.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DashboardInicioPage;
