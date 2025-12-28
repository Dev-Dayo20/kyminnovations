import { Link } from "react-router-dom";
import { Palette, Code, Wrench, ArrowUpRight } from "lucide-react";

const departments = [
  {
    icon: Code,
    title: "Technology & Innovation",
    description:
      "Web and software development, digital products, and custom solutions that solve real problems.",
    services: ["Web Development", "Software Solutions", "Digital Products", "API Integration", "Cloud Services"],
    color: "from-primary to-blue-400",
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Palette,
    title: "Multimedia & Creative",
    description:
      "Graphic design, UI/UX, motion design, 3D animations, and video editing that captivate and engage.",
    services: ["Graphic Design", "UI/UX Design", "Motion Design", "3D Animation", "Video Editing"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    icon: Wrench,
    title: "Engineering & Technical Services",
    description:
      "Computer repairs, hardware servicing, and sales of systems and accessories you can rely on.",
    services: ["Computer Repairs", "Hardware Servicing", "System Sales", "IT Support", "Network Setup"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
];

export const DepartmentsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three Pillars of Innovation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We operate through three specialized departments, each dedicated to 
            delivering excellence in their domain.
          </p>
        </div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <div
              key={dept.title}
              className="group relative bg-card rounded-2xl border border-border p-8 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${dept.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
              >
                <dept.icon className={`w-7 h-7 ${dept.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {dept.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {dept.description}
              </p>

              {/* Services List */}
              <ul className="space-y-2 mb-8">
                {dept.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${dept.color}`} />
                    {service}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all duration-300"
              >
                Learn More
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {/* Decorative gradient */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-5 rounded-2xl blur-2xl transition-opacity duration-500`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
