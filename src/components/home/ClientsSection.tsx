const clients = [
  "TechCorp",
  "InnovateLab",
  "DigitalFirst",
  "FutureScale",
  "CloudNine",
  "DataDriven",
];

export const ClientsSection = () => {
  return (
    <section className="py-16 border-y border-border bg-secondary/20">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
            Trusted by innovative companies
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {clients.map((client) => (
            <div
              key={client}
              className="text-2xl md:text-3xl font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300 cursor-default"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
