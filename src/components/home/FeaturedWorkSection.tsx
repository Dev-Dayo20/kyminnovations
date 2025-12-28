import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
  {
    title: "FinTech Dashboard",
    category: "Software Development",
    department: "Software",
    description: "A comprehensive financial analytics platform with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Brand Identity System",
    category: "Visual Design",
    department: "Multimedia",
    description: "Complete visual identity redesign for a leading tech startup.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    title: "Enterprise IT Infrastructure",
    category: "Engineering",
    department: "Engineering",
    description: "Full-scale IT infrastructure setup and optimization for corporate offices.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
];

export const FeaturedWorkSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Projects That Define Us
            </h2>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link to="/portfolio">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.title}
              to="/portfolio"
              className="group relative bg-card rounded-2xl overflow-hidden border border-border card-hover"
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
                <div className="absolute top-4 left-4">
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
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
