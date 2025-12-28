import { Layout } from "@/components/layout/Layout";
import { Linkedin, Twitter, Mail } from "lucide-react";

import alameenImage from "@/assets/team/alameen-rabiu.png";
import abdulkabirImage from "@/assets/team/abdulkabir-yahaya.jpg";
import zakariyaImage from "@/assets/team/dev-zakariya.jpg";

const teamMembers = {
  technology: [
    {
      name: "Engr. Al-ameen Rabiu",
      role: "Management",
      bio: "Visionary leader driving innovation and strategic growth across all departments.",
      image: alameenImage,
      socials: { twitter: "https://x.com/alameen99", email: "alameenrabiu99@gmail.com" },
    },
    {
      name: "Abdulkabir Yahaya",
      role: "Software Developer, Creative Lead, Digital & Visual Designer",
      bio: "Multi-talented professional bridging technology and creativity with innovative solutions.",
      image: abdulkabirImage,
      socials: { email: "abdulkabir@kymetra.com" },
    },
    {
      name: "Dev Zakariya",
      role: "Software Developer, AI Engineer, Cybersecurity",
      bio: "Security-focused developer building intelligent and secure software solutions.",
      image: zakariyaImage,
      socials: { email: "zakariya@kymetra.com" },
    },
  ],
  multimedia: [
    {
      name: "Abdulkabir Yahaya",
      role: "Software Developer, Creative Lead, Digital & Visual Designer",
      bio: "Multi-talented professional bridging technology and creativity with innovative solutions.",
      image: abdulkabirImage,
      socials: { email: "abdulkabir@kymetra.com" },
    },
  ],
  engineering: [
    {
      name: "Robert Johnson",
      role: "Engineering Lead",
      bio: "Hardware expert with deep knowledge of enterprise IT systems.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      socials: { linkedin: "#", email: "robert@kymetra.com" },
    },
    {
      name: "Lisa Chang",
      role: "IT Specialist",
      bio: "Troubleshooting pro dedicated to keeping systems running smoothly.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      socials: { linkedin: "#", email: "lisa@kymetra.com" },
    },
  ],
};

const departments = [
  { key: "technology", label: "Technology & Innovation", color: "bg-primary/10 text-primary" },
  { key: "multimedia", label: "Multimedia & Creative", color: "bg-purple-500/10 text-purple-500" },
  { key: "engineering", label: "Engineering & Technical Services", color: "bg-emerald-500/10 text-emerald-500" },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Meet the People Behind KYMETRA
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A talented team of creative thinkers, technical experts, and 
              problem solvers dedicated to delivering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Sections */}
      {departments.map((dept, deptIndex) => (
        <section
          key={dept.key}
          className={`section-padding ${deptIndex % 2 === 0 ? "bg-secondary/30" : ""}`}
        >
          <div className="container-custom mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className={`px-4 py-2 rounded-lg text-sm font-medium ${dept.color}`}>
                {dept.label}
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers[dept.key as keyof typeof teamMembers].map((member) => (
                <div
                  key={member.name}
                  className="group bg-card rounded-2xl border border-border overflow-hidden card-hover"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                    
                    {/* Social Links - appear on hover */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={`mailto:${member.socials.email}`}
                          className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Join Team CTA */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals who are passionate 
              about technology and creativity. Check out our open positions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
