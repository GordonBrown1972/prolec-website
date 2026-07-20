function QuoteForm() {
  const { Input, Select, Textarea, Button } = window.ProLecElectricalDesignSystem_e8c325;
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState(false);
  const formRef = React.useRef(null);
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

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
          We've received your request and will call you back within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={async (e) => {
        e.preventDefault();
        setSending(true);
        setError(false);
        const data = new FormData(e.target);
        try {
          const res = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            body: data,
            headers: { Accept: "application/json" },
          });
          if (!res.ok) throw new Error("send failed");
          setSubmitted(true);
        } catch (err) {
          setError(true);
        } finally {
          setSending(false);
        }
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
      {error && (
        <p style={{ color: "var(--red-500)", font: "var(--text-body-sm)", margin: "0 0 var(--space-4)" }}>
          Something went wrong sending your request — please call us instead.
        </p>
      )}
      <Button type="submit" variant="primary" disabled={sending}>
        {sending ? "Sending…" : "Request a Quote"}
      </Button>
    </form>
  );
}

window.QuoteForm = QuoteForm;
