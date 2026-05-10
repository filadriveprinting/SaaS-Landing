import { landingContent } from "../../data/landingContent";
import "./Footer.css";

export function Footer() {
  const { brand, footer } = landingContent;
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <div className="site-footer__brand-row">
            <img src="/logo.svg" alt={brand.name} className="site-footer__logo" />
          </div>
          <p className="site-footer__desc">{footer.description}</p>
        </div>

        <div className="site-footer__cols">
          {footer.columns.map((col) => (
            <div key={col.title} className="site-footer__col">
              <h4 className="site-footer__col-title">{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <span>{footer.bottom}</span>
          <span className="site-footer__tag">{brand.tagline}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
