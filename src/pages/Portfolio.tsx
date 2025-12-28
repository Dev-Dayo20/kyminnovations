import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    client: "PayFlow Inc.",
    department: "Technology & Innovation",
    type: "Web Development",
    problem: "Complex financial data was hard to visualize and analyze",
    solution: "Built an intuitive real-time dashboard with advanced analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Brand Identity System",
    client: "NexGen Startup",
    department: "Multimedia & Creative",
    type: "Visual Design",
    problem: "Inconsistent brand presence across platforms",
    solution: "Created comprehensive visual identity with brand guidelines",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Enterprise IT Infrastructure",
    client: "GlobalCorp Ltd.",
    department: "Engineering & Technical Services",
    type: "IT Setup",
    problem: "Outdated systems causing productivity issues",
    solution: "Complete IT infrastructure overhaul with modern equipment",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    client: "RetailMax",
    department: "Technology & Innovation",
    type: "Web Development",
    problem: "Limited online presence and sales capability",
    solution: "Developed full-featured e-commerce with inventory management",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Product Animation Series",
    client: "TechGadgets Pro",
    department: "Multimedia & Creative",
    type: "3D Animation",
    problem: "Products needed dynamic presentation for marketing",
    solution: "Created stunning 3D product animations for campaigns",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Network Security Upgrade",
    client: "SecureBank",
    department: "Engineering & Technical Services",
    type: "IT Security",
    problem: "Vulnerable network infrastructure",
    solution: "Implemented enterprise-grade security protocols",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Mobile App UI/UX",
    client: "HealthTrack",
    department: "Multimedia & Creative",
    type: "UI/UX Design",
    problem: "Poor user engagement with health tracking app",
    solution: "Redesigned interface for intuitive health monitoring",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "SaaS Platform Development",
    client: "CloudTools",
    department: "Technology & Innovation",
    type: "Software Solution",
    problem: "Manual processes slowing down operations",
    solution: "Built automated SaaS platform for workflow management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    id: 9,
    title: "Corporate Video Production",
    client: "Summit Corp",
    department: "Multimedia & Creative",
    type: "Video Editing",
    problem: "Needed compelling content for investor presentation",
    solution: "Produced professional corporate video with motion graphics",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Technology & Innovation", value: "Technology & Innovation" },
  { label: "Multimedia & Creative", value: "Multimedia & Creative" },
  { label: "Engineering & Technical Services", value: "Engineering & Technical Services" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.department === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Projects That Speak for Themselves
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our diverse portfolio of successful projects across multimedia, 
              software, and engineering domains.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-y border-border bg-secondary/30 sticky top-16 z-30 backdrop-blur-xl">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border card-hover"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  
                  {/* Department Badge */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                      {project.department}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-sm text-primary font-medium">
                    {project.type}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Client: {project.client}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-foreground">Problem:</span>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Solution:</span>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects found for this filter.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
