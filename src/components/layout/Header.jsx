import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CTAButton } from "../ui/CTAButton";
import { landingContent } from "../../data/landingContent";
import { handleCTA } from "../../utils/conversionEvents";
import "./Header.css";

export function Header() {
  const { brand, navigation, conversion, hero, product, offer } = landingContent;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePrimary = () => {
    handleCTA(conversion, {
      location: "header",
      label: hero.primaryCTA,
      productName: product.name
    });
    setOpen(false);
  };

  const goTo = (href) => (e) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <motion.header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container site-header__inner">
        <a href="#top" className="site-header__brand" onClick={goTo("#top")} aria-label={brand.name}>
          <img src="/logo.svg" alt={brand.name} className="site-header__logo" />
        </a>

        <nav className={`site-header__nav ${open ? "is-open" : ""}`} aria-label="Principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={goTo(item.href)}
              className="site-header__link"
            >
              {item.label}
            </a>
          ))}
          <div className="site-header__pricing" aria-hidden="true">
            <span className="site-header__pricing-label">{product.name}</span>
            <span className="site-header__pricing-price">
              <span className="site-header__pricing-anchor">{offer.priceAnchor}</span>
              <span className="site-header__pricing-now">{offer.price}</span>
            </span>
          </div>
          <div className="site-header__nav-cta">
            <CTAButton onClick={handlePrimary} size="sm" icon="ArrowRight">
              {hero.primaryCTA}
            </CTAButton>
          </div>
        </nav>

        <button
          className="site-header__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </motion.header>
  );
}

export default Header;
