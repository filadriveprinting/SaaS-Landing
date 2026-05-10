import "./CreditCardForm.css";
import { useMemo, useState } from "react";
import { CTAButton } from "../ui/CTAButton";

function detectBrand(number) {
  const n = number.replace(/\s/g, "");
  if (/^4/.test(n)) return "VISA";
  if (/^(5[1-5]|2[2-7])/.test(n)) return "MASTERCARD";
  if (/^3[47]/.test(n)) return "AMEX";
  if (/^6/.test(n)) return "DISCOVER";
  return "TARJETA";
}

function formatNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 19);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatExpiry(value) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length < 3) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function padNumber(number) {
  const groups = ["••••", "••••", "••••", "••••"];
  const clean = number.replace(/\s/g, "");
  for (let i = 0; i < 4; i++) {
    const slice = clean.slice(i * 4, i * 4 + 4);
    if (slice) groups[i] = slice.padEnd(4, "•");
  }
  return groups;
}

export function CreditCardForm({ amountLabel = "Pagar", onSubmit }) {
  const [number, setNumber] = useState("");
  const [holder, setHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [flipped, setFlipped] = useState(false);

  const brand = useMemo(() => detectBrand(number), [number]);
  const numberGroups = useMemo(() => padNumber(number), [number]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ number, holder, expiry, cvv, brand });
  };

  return (
    <form className="cc-form" onSubmit={handleSubmit} noValidate>
      <div className={`cc-preview ${flipped ? "cc-preview--flipped" : ""}`}>
        <div className="cc-preview__inner">
          {/* FRONT */}
          <div className="cc-preview__face">
            <div className="cc-preview__top">
              <div className="cc-preview__chip" aria-hidden="true" />
              <span className="cc-preview__brand">{brand}</span>
            </div>
            <div className="cc-preview__number">
              {numberGroups.map((g, i) => (
                <span key={i} className="cc-preview__number-group">
                  {g}
                </span>
              ))}
            </div>
            <div className="cc-preview__bottom">
              <div className="cc-preview__field">
                <span className="cc-preview__label">Titular</span>
                <span className="cc-preview__value">
                  {holder ? holder.toUpperCase() : "NOMBRE APELLIDO"}
                </span>
              </div>
              <div className="cc-preview__field">
                <span className="cc-preview__label">Caduca</span>
                <span className="cc-preview__value">{expiry || "MM/YY"}</span>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div className="cc-preview__face cc-preview__face--back">
            <div className="cc-preview__strip" aria-hidden="true" />
            <div className="cc-preview__cvv-row">
              <span className="cc-preview__cvv-label">CVV</span>
              <span className="cc-preview__cvv-box">
                {cvv ? cvv.replace(/./g, "•") : "•••"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="cc-form__grid">
        <div className="cc-form__field cc-form__field--full">
          <label className="cc-form__label" htmlFor="cc-number">
            Número de tarjeta
          </label>
          <input
            id="cc-number"
            className="cc-form__input cc-form__input--mono"
            inputMode="numeric"
            autoComplete="cc-number"
            placeholder="1234 5678 9012 3456"
            value={number}
            onChange={(e) => setNumber(formatNumber(e.target.value))}
            maxLength={23}
          />
        </div>

        <div className="cc-form__field cc-form__field--full">
          <label className="cc-form__label" htmlFor="cc-holder">
            Nombre del titular
          </label>
          <input
            id="cc-holder"
            className="cc-form__input"
            autoComplete="cc-name"
            placeholder="Como aparece en la tarjeta"
            value={holder}
            onChange={(e) => setHolder(e.target.value)}
            maxLength={26}
          />
        </div>

        <div className="cc-form__field">
          <label className="cc-form__label" htmlFor="cc-expiry">
            Caducidad
          </label>
          <input
            id="cc-expiry"
            className="cc-form__input cc-form__input--mono"
            inputMode="numeric"
            autoComplete="cc-exp"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(formatExpiry(e.target.value))}
            maxLength={5}
          />
        </div>

        <div className="cc-form__field">
          <label className="cc-form__label" htmlFor="cc-cvv">
            CVV
          </label>
          <input
            id="cc-cvv"
            className="cc-form__input cc-form__input--mono"
            inputMode="numeric"
            autoComplete="cc-csc"
            placeholder="•••"
            value={cvv}
            onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
            onFocus={() => setFlipped(true)}
            onBlur={() => setFlipped(false)}
            maxLength={4}
          />
        </div>
      </div>

      <CTAButton type="submit" size="lg" fullWidth icon="Lock" className="cc-form__submit">
        {amountLabel}
      </CTAButton>
    </form>
  );
}

export default CreditCardForm;
