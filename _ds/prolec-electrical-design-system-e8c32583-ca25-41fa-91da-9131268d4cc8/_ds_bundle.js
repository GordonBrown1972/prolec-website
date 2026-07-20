/* @ds-bundle: {"format":4,"namespace":"ProLecElectricalDesignSystem_e8c325","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"ContactBar","sourcePath":"components/marketing/ContactBar.jsx"},{"name":"SectionHeader","sourcePath":"components/marketing/SectionHeader.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"65d8a2a135b5","components/core/Button.jsx":"1ea94016d356","components/core/Card.jsx":"46e81cdf8d72","components/forms/Input.jsx":"14ed94448cff","components/forms/Select.jsx":"8c2a10b97b0d","components/forms/Textarea.jsx":"767e3e48ac05","components/marketing/ContactBar.jsx":"2a37473bd268","components/marketing/SectionHeader.jsx":"ffc28ceae6d6","components/marketing/ServiceCard.jsx":"cbf3af75b8e8","ui_kits/marketing-site/QuoteForm.jsx":"aa032540230a","ui_kits/marketing-site/ServicesGrid.jsx":"48f97031a0f9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ProLecElectricalDesignSystem_e8c325 = window.ProLecElectricalDesignSystem_e8c325 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const toneStyle = {
  brand: {
    background: "var(--color-brand-primary-tint)",
    color: "var(--red-600)"
  },
  solar: {
    background: "var(--color-accent-solar-tint)",
    color: "var(--amber-600)"
  },
  approved: {
    background: "var(--color-accent-approved-tint)",
    color: "var(--green-600)"
  },
  neutral: {
    background: "var(--paper-100)",
    color: "var(--ink-700)"
  }
};
function Badge({
  children,
  tone = "brand"
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...toneStyle[tone],
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 10px",
      borderRadius: "var(--radius-full)",
      font: "var(--text-label)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)"
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeStyles = {
  md: {
    padding: "10px 20px",
    font: "var(--text-body-md)"
  },
  sm: {
    padding: "7px 14px",
    font: "var(--text-body-sm)"
  }
};
function variantStyle(variant) {
  switch (variant) {
    case "secondary":
      return {
        background: "var(--color-bg-surface)",
        color: "var(--color-brand-primary)",
        border: "1px solid var(--color-brand-primary)"
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--color-text-primary)",
        border: "1px solid var(--color-border-strong)"
      };
    case "dark":
      return {
        background: "var(--ink-900)",
        color: "var(--color-text-on-ink)",
        border: "1px solid var(--ink-900)"
      };
    default:
      return {
        background: "var(--color-brand-primary)",
        color: "var(--color-text-on-red)",
        border: "1px solid var(--color-brand-primary)"
      };
  }
}
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  icon,
  onClick,
  type = "button"
}) {
  const [hover, setHover] = React.useState(false);
  const base = variantStyle(variant);
  const style = {
    ...base,
    ...sizeStyles[size],
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: 600,
    letterSpacing: "0.01em",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "filter var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
    filter: hover && !disabled ? "brightness(0.92)" : "none"
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = "24px",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-bg-surface)",
      border: "1px solid var(--color-border-default)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-sm)",
      padding,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const baseStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "10px 12px",
  font: "var(--text-body-md)",
  color: "var(--color-text-primary)",
  background: "var(--color-bg-surface)",
  border: "1px solid var(--color-border-strong)",
  borderRadius: "var(--radius-sm)",
  outline: "none"
};
function Input({
  label,
  placeholder,
  type = "text",
  required = false,
  value,
  onChange
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      marginBottom: "16px"
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      font: "var(--text-label)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)",
      color: "var(--color-text-secondary)",
      marginBottom: "6px"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-brand-primary)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...baseStyle,
      borderColor: focus ? "var(--color-focus-ring)" : "var(--color-border-strong)",
      boxShadow: focus ? "0 0 0 3px var(--red-100)" : "none"
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  required = false
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      marginBottom: "16px"
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      font: "var(--text-label)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)",
      color: "var(--color-text-secondary)",
      marginBottom: "6px"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-brand-primary)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "10px 12px",
      font: "var(--text-body-md)",
      color: "var(--color-text-primary)",
      background: "var(--color-bg-surface)",
      border: "1px solid",
      borderColor: focus ? "var(--color-focus-ring)" : "var(--color-border-strong)",
      borderRadius: "var(--radius-sm)",
      boxShadow: focus ? "0 0 0 3px var(--red-100)" : "none",
      outline: "none"
    }
  }, options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt,
    value: opt
  }, opt))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  placeholder,
  rows = 4,
  required = false,
  value,
  onChange
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      marginBottom: "16px"
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      font: "var(--text-label)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)",
      color: "var(--color-text-secondary)",
      marginBottom: "6px"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-brand-primary)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("textarea", {
    placeholder: placeholder,
    rows: rows,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "10px 12px",
      font: "var(--text-body-md)",
      color: "var(--color-text-primary)",
      background: "var(--color-bg-surface)",
      border: "1px solid",
      borderColor: focus ? "var(--color-focus-ring)" : "var(--color-border-strong)",
      borderRadius: "var(--radius-sm)",
      boxShadow: focus ? "0 0 0 3px var(--red-100)" : "none",
      outline: "none",
      resize: "vertical",
      fontFamily: "inherit"
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ContactBar.jsx
try { (() => {
function ContactBar({
  phone = "082 556 8476",
  email = "admin@prolec.co.za",
  area = "Helderberg Area, Cape Town"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-6)",
      alignItems: "center",
      background: "var(--ink-900)",
      color: "var(--color-text-on-ink)",
      padding: "10px 24px",
      font: "var(--text-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", null, area), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, "|"), /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/\s+/g, "")}`,
    style: {
      color: "#fff",
      textDecoration: "none"
    }
  }, phone), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, "|"), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    style: {
      color: "#fff",
      textDecoration: "none"
    }
  }, email));
}
Object.assign(__ds_scope, { ContactBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ContactBar.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      marginBottom: "var(--space-8)"
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-label)",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-label)",
      color: "var(--color-brand-primary)",
      marginBottom: "var(--space-2)"
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--text-display-md)",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--color-text-primary)",
      margin: "0 0 var(--space-3)",
      textTransform: "uppercase"
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-lg)",
      color: "var(--color-text-secondary)",
      margin: 0,
      maxWidth: align === "center" ? "640px" : "560px",
      marginInline: align === "center" ? "auto" : 0
    }
  }, description) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function ServiceCard({
  title,
  description,
  badge,
  icon
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padding: "20px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "10px"
    }
  }, icon ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: "40px",
      height: "40px",
      borderRadius: "var(--radius-sm)",
      background: "var(--color-brand-primary-tint)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-brand-primary)",
      flexShrink: 0
    }
  }, icon) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--text-heading-md)",
      color: "var(--color-text-primary)",
      margin: 0
    }
  }, title)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-sm)",
      color: "var(--color-text-secondary)",
      margin: badge ? "0 0 12px" : 0
    }
  }, description), badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badge.tone
  }, badge.label) : null);
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/QuoteForm.jsx
try { (() => {
function QuoteForm() {
  const {
    Input,
    Select,
    Textarea,
    Button
  } = window.ProLecElectricalDesignSystem_e8c325;
  const [submitted, setSubmitted] = React.useState(false);
  if (submitted) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--color-accent-approved-tint)",
        border: "1px solid var(--green-100)",
        borderRadius: "var(--radius-md)",
        padding: "var(--space-8)",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "0 0 8px",
        font: "var(--text-heading-lg)",
        color: "var(--green-600)"
      }
    }, "Thanks \u2014 request received"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: "var(--text-body-md)",
        color: "var(--color-text-secondary)"
      }
    }, "We'll call you back within one business day."));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSubmitted(true);
    },
    style: {
      background: "var(--color-bg-surface)",
      border: "1px solid var(--color-border-default)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-md)",
      padding: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0 20px"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Alex Buys",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone number",
    placeholder: "082 556 8476",
    type: "tel",
    required: true
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Service needed",
    options: ["Solar + Inverter", "New Installation", "Renovation", "Inverter", "Aircon", "Preventative Maintenance", "All-in-one COC"]
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Tell us about the job",
    placeholder: "e.g. 5kW inverter + 16 panel install, double-storey roof",
    rows: 4
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary"
  }, "Request a Quote"));
}
window.QuoteForm = QuoteForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/QuoteForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ServicesGrid.jsx
try { (() => {
const SERVICES = [{
  title: "Solar + Inverter",
  desc: "Full solar + inverter installs with COC and SSEG registration handled end-to-end.",
  icon: "sun",
  badge: {
    label: "Solar",
    tone: "solar"
  }
}, {
  title: "New Installations",
  desc: "Complete electrical installs for new builds.",
  icon: "plug-zap",
  badge: {
    label: "Electrical",
    tone: "brand"
  }
}, {
  title: "Renovations",
  desc: "Rewiring and upgrades for home renovations and additions.",
  icon: "hammer",
  badge: {
    label: "Electrical",
    tone: "brand"
  }
}, {
  title: "Inverters",
  desc: "Backup power inverter supply and installation.",
  icon: "battery-charging",
  badge: {
    label: "Solar",
    tone: "solar"
  }
}, {
  title: "Aircons",
  desc: "Supply, installation and servicing of residential aircon units.",
  icon: "snowflake",
  badge: {
    label: "Maintenance",
    tone: "neutral"
  }
}, {
  title: "Preventative / General Maintenance",
  desc: "Scheduled inspections and callouts to keep your electrics compliant and safe.",
  icon: "wrench",
  badge: {
    label: "Maintenance",
    tone: "neutral"
  }
}, {
  title: "All-in-One COC's",
  desc: "Electrical, plumbing and gas compliance certificates — one visit, one invoice.",
  icon: "shield-check",
  badge: {
    label: "COC",
    tone: "approved"
  }
}];
function ServicesGrid() {
  const {
    ServiceCard
  } = window.ProLecElectricalDesignSystem_e8c325;
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "var(--space-5)"
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, {
    key: s.title,
    title: s.title,
    description: s.desc,
    badge: s.badge,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": s.icon,
      style: {
        width: 20,
        height: 20
      }
    })
  })));
}
window.ServicesGrid = ServicesGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ServicesGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.ContactBar = __ds_scope.ContactBar;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

})();
