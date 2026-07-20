function QuoteForm() {
  const { Input, Select, Textarea, Button } = window.ProLecElectricalDesignSystem_e8c325;
  const [submitted, setSubmitted] = React.useState(false);
  const formRef = React.useRef(null);

  if (submitted) {
    return (
      <div
        style={{
          background: "var(--color-accent-approved-tint)",
          border: "1px solid var(--green-100)",
          borderRadius: "var(--radius-md)",
          padding: "var(--space-8)",
          textAlign: "center",
        }}
      >
        <h3 style={{ margin: "0 0 var(--space-2)", font: "var(--text-heading-lg)", color: "var(--green-600)" }}>
          Thanks — request received
        </h3>
        <p style={{ margin: 0, font: "var(--text-body-md)", color: "var(--color-text-secondary)" }}>
          Your email app should have opened with the details filled in — send it and we'll call you back within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const name = data.get("name") || "";
        const phone = data.get("phone") || "";
        const service = data.get("service") || "";
        const details = data.get("details") || "";
        const body = `Name: ${name}%0D%0APhone: ${phone}%0D%0AService: ${service}%0D%0A%0D%0A${encodeURIComponent(details)}`;
        window.location.href = `mailto:admin@prolec.co.za?subject=${encodeURIComponent("Quote request — " + name)}&body=${body}`;
        setSubmitted(true);
      }}
      style={{
        background: "var(--color-bg-surface)",
        border: "1px solid var(--color-border-default)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-md)",
        padding: "var(--space-8)",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 var(--space-5)" }}>
        <Input name="name" label="Full name" placeholder="Alex Buys" required />
        <Input name="phone" label="Phone number" placeholder="082 556 8476" type="tel" required />
      </div>
      <Select
        name="service"
        label="Service needed"
        options={["Solar + Inverter", "New Installation", "Renovation", "Inverter", "Aircon", "Preventative Maintenance", "All-in-one COC"]}
      />
      <Textarea name="details" label="Tell us about the job" placeholder="e.g. 5kW inverter + 16 panel install, double-storey roof" rows={4} />
      <Button type="submit" variant="primary">
        Request a Quote
      </Button>
    </form>
  );
}

window.QuoteForm = QuoteForm;
