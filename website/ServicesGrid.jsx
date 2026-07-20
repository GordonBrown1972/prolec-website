const SERVICES = [
  { title: "Solar + Inverter", desc: "Full solar + inverter installs with COC and SSEG registration handled end-to-end.", icon: "sun", badge: { label: "Solar", tone: "solar" } },
  { title: "New Installations", desc: "Complete electrical installs for new builds.", icon: "plug-zap", badge: { label: "Electrical", tone: "brand" } },
  { title: "Renovations", desc: "Rewiring and upgrades for home renovations and additions.", icon: "hammer", badge: { label: "Electrical", tone: "brand" } },
  { title: "Inverters", desc: "Backup power inverter supply and installation.", icon: "battery-charging", badge: { label: "Solar", tone: "solar" } },
  { title: "Aircons", desc: "Supply, installation and servicing of residential aircon units.", icon: "snowflake", badge: { label: "Maintenance", tone: "neutral" } },
  { title: "Preventative / General Maintenance", desc: "Scheduled inspections and callouts to keep your electrics compliant and safe.", icon: "wrench", badge: { label: "Maintenance", tone: "neutral" } },
  { title: "All-in-One COC's", desc: "Electrical, plumbing and gas compliance certificates — one visit, one invoice.", icon: "shield-check", badge: { label: "COC", tone: "approved" } },
];

function ServicesGrid() {
  const { ServiceCard } = window.ProLecElectricalDesignSystem_e8c325;
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "var(--space-5)",
      }}
    >
      {SERVICES.map((s) => (
        <ServiceCard
          key={s.title}
          title={s.title}
          description={s.desc}
          badge={s.badge}
          icon={<i data-lucide={s.icon} style={{ width: 20, height: 20 }}></i>}
        />
      ))}
    </div>
  );
}

window.ServicesGrid = ServicesGrid;
