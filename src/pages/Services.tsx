import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Palette,
  Code,
  Wrench,
  Layers,
  Smartphone,
  Film,
  Boxes,
  Video,
  Globe,
  Server,
  Cloud,
  Database,
  Monitor,
  HardDrive,
  Cpu,
  Settings,
  ArrowRight,
} from "lucide-react";

const services = {
  technology: {
    title: "Technology & Innovation",
    description: "Cutting-edge digital solutions that transform ideas into powerful, scalable applications.",
    icon: Code,
    color: "from-primary to-blue-400",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
    items: [
      {
        icon: Globe,
        title: "Web Development",
        description: "Modern, responsive websites and web applications built with latest technologies.",
      },
      {
        icon: Server,
        title: "Software Solutions",
        description: "Custom software tailored to your unique business needs and workflows.",
      },
      {
        icon: Cloud,
        title: "Cloud Services",
        description: "Scalable cloud infrastructure and migration services for modern businesses.",
      },
      {
        icon: Database,
        title: "API Development",
        description: "Robust APIs that connect your systems and enable seamless integrations.",
      },
    ],
  },
  multimedia: {
    title: "Multimedia & Creative",
    description: "Creative solutions that captivate audiences and communicate your brand message effectively.",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
    items: [
      {
        icon: Layers,
        title: "Graphic Design",
        description: "Brand identity, marketing materials, and visual assets that make lasting impressions.",
      },
      {
        icon: Smartphone,
        title: "UI/UX Design",
        description: "User-centered interfaces that are intuitive, beautiful, and drive engagement.",
      },
      {
        icon: Film,
        title: "Motion Design",
        description: "Dynamic animations that bring your brand to life and capture attention.",
      },
      {
        icon: Boxes,
        title: "3D Animation",
        description: "Immersive 3D content for product visualization, gaming, and marketing.",
      },
      {
        icon: Video,
        title: "Video Editing",
        description: "Professional video production and editing for all platforms and purposes.",
      },
    ],
  },
  engineering: {
    title: "Engineering & Technical Services",
    description: "Reliable hardware solutions and technical support that keep your operations running smoothly.",
    icon: Wrench,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    items: [
      {
        icon: Monitor,
        title: "Computer Repairs",
        description: "Expert diagnostics and repairs for all types of computer systems.",
      },
      {
        icon: HardDrive,
        title: "Hardware Servicing",
        description: "Maintenance, upgrades, and optimization for peak hardware performance.",
      },
      {
        icon: Cpu,
        title: "System Sales",
        description: "Quality computer systems and accessories tailored to your needs.",
      },
      {
        icon: Settings,
        title: "IT Support",
        description: "Ongoing technical support and maintenance for worry-free operations.",
      },
    ],
  },
};

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Comprehensive Solutions for Every Need
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From creative design to complex software systems and reliable engineering, 
              we offer a full spectrum of services to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {Object.entries(services).map(([key, service], sectionIndex) => (
        <section
          key={key}
          id={key}
          className={`section-padding ${sectionIndex % 2 === 0 ? "bg-secondary/30" : ""}`}
        >
          <div className="container-custom mx-auto">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
              <div
                className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center`}
              >
                <service.icon className={`w-8 h-8 ${service.iconColor}`} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {service.title}
                </h2>
                <p className="text-muted-foreground max-w-xl">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.items.map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl border border-border p-6 card-hover group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Don't see exactly what you need? We specialize in creating tailored 
              solutions that perfectly fit your unique requirements.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Let's Talk
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
