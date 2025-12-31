import proxySoftwareSystems from "@/assets/clients/proxy-software-systems.png";
import kirkiraInnovationHub from "@/assets/clients/kirkira-innovation-hub.png";
import kebramTech from "@/assets/clients/kebram-tech.png";
import qfLogo from "@/assets/clients/qf-logo.png";

const clients = [
  { name: "Proxy Software Systems", logo: proxySoftwareSystems },
  { name: "Kirkira Innovation Hub", logo: kirkiraInnovationHub },
  { name: "Kebram Tech", logo: kebramTech },
  { name: "QF", logo: qfLogo },
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
              key={client.name}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
