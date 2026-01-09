import { Layout } from "@/components/layout/Layout";
import { Linkedin, Twitter, Mail, Instagram, Phone } from "lucide-react";

// WhatsApp icon component (not available in lucide-react)
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

import alameenImage from "@/assets/team/alameen-rabiu-new.jpg";
import abdulkabirImage from "@/assets/team/abdulkabir-yahaya.jpg";
import zakariyaImage from "@/assets/team/dev-zakariya.jpg";
import ahmadImage from "@/assets/team/ahmad-musa-saddiq.jpg";
import ahmadGwandaImage from "@/assets/team/ahmad-sani-gwanda.jpg";
import abdullahiHamzaImage from "@/assets/team/abdullahi-hamza.jpg";
import muhammadHafizImage from "@/assets/team/muhammad-hafiz.jpg";
import ahmadIbrahimImage from "@/assets/team/ahmad-ibrahim.jpg";

const teamMembers = {
  management: [
    {
      name: "Engr. Al-ameen Rabiu",
      role: "Managing Director (MD), Software Engineer & AI Engineer",
      bio: "Visionary leader and Software/AI Engineer driving innovation, building intelligent systems, and leading strategic growth in technology solutions. He combines technical expertise with business acumen to steer the organization towards excellence.",
      image: alameenImage,
      socials: { 
        twitter: "https://x.com/alameen99", 
        email: "alameenrabiu99@gmail.com",
        whatsapp: "https://wa.me/2348035932192",
        linkedin: "#",
        instagram: "#"
      },
    },
  ],
  technology: [
    {
      name: "Dev Zakariya",
      role: "Software Developer, AI Engineer, Cybersecurity",
      bio: "Security-focused developer building intelligent and secure software solutions.",
      image: zakariyaImage,
      socials: { email: "zakariya@kymetra.com" },
    },
    {
      name: "Abdullahi Hamza",
      role: "Software Developer",
      bio: "Skilled software developer creating robust and efficient applications.",
      image: abdullahiHamzaImage,
      socials: { email: "abdullahi@kymetra.com" },
    },
    {
      name: "Muhammad Hafiz Muhammad",
      role: "Frontend Developer",
      bio: "Creative frontend developer crafting engaging user interfaces and experiences.",
      image: muhammadHafizImage,
      socials: { email: "hafiz@kymetra.com" },
    },
    {
      name: "Ahmad Ibrahim",
      role: "IoT Researcher & AI Innovation Specialist",
      bio: "Passionate researcher exploring the intersection of IoT, Artificial Intelligence, and innovation to create cutting-edge solutions for tomorrow's challenges.",
      image: ahmadIbrahimImage,
      socials: { email: "i.ahmad22044@fudutsinma.edu.ng", phone: "08146557980" },
    },
  ],
  multimedia: [
    {
      name: "Abdulkabir Yahaya",
      role: "Creative Tech Lead, Visual Designer & Brand Identity Expert",
      bio: "Multi-talented creative professional bridging technology and artistry. Specializes in software development, UI/UX design, visual identity systems, and brand design. Expert in translating complex concepts into stunning visual experiences that captivate audiences.",
      image: abdulkabirImage,
      socials: { twitter: "https://x.com/aira_graphics", instagram: "https://instagram.com/aira_graphics", email: "airatech20@gmail.com", linkedin: "https://www.linkedin.com/in/abdulkabir-yahaya-0a3a3a268" },
    },
    {
      name: "Ahmad Musa Saddiq",
      role: "3D Animations, Motion Graphics, Video Editor, VFX Artist",
      bio: "Creative visual artist specializing in bringing stories to life through stunning 3D animations and motion graphics.",
      image: ahmadImage,
      socials: { email: "ahmad@kymetra.com" },
    },
  ],
  engineering: [
    {
      name: "Ahmad Sani Gwanda",
      role: "Computer Hardware Engineer, Technical Lead",
      bio: "Versatile technical professional with deep expertise in computer hardware engineering, system diagnostics, and hardware troubleshooting. Also skilled in graphic design and social media management, bringing a unique blend of technical precision and creative flair to every project.",
      image: ahmadGwandaImage,
      socials: { email: "ahmadgwanda@kymetra.com" },
    },
  ],
};

const departments = [
  { key: "management", label: "Management", color: "bg-amber-500/10 text-amber-500" },
  { key: "technology", label: "Technology & Innovation", color: "bg-primary/10 text-primary" },
  { key: "multimedia", label: "Multimedia & Creative", color: "bg-purple-500/10 text-purple-500" },
  { key: "engineering", label: "Engineering & Technical Services", color: "bg-emerald-500/10 text-emerald-500" },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-8 md:pt-28 md:pb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Team
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
              Meet the People Behind KYMETRA
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              A talented team of creative thinkers, technical experts, and 
              problem solvers dedicated to delivering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Management Section - Special Layout */}
      <section className="py-8 md:py-12 bg-secondary/30">
        <div className="container-custom mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1.5 rounded-lg text-sm font-medium bg-amber-500/10 text-amber-500">
              Management
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* MD Profile Card */}
            <div className="group bg-card rounded-2xl border border-border overflow-hidden card-hover max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={teamMembers.management[0].image}
                  alt={teamMembers.management[0].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 flex-wrap opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {teamMembers.management[0].socials.whatsapp && (
                    <a
                      href={teamMembers.management[0].socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                    </a>
                  )}
                  {teamMembers.management[0].socials.linkedin && (
                    <a
                      href={teamMembers.management[0].socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {teamMembers.management[0].socials.instagram && (
                    <a
                      href={teamMembers.management[0].socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {teamMembers.management[0].socials.twitter && (
                    <a
                      href={teamMembers.management[0].socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {teamMembers.management[0].socials.email && (
                    <a
                      href={`mailto:${teamMembers.management[0].socials.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {teamMembers.management[0].name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {teamMembers.management[0].role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {teamMembers.management[0].bio}
                </p>
              </div>
            </div>

            {/* About MD Section */}
            <div className="bg-card rounded-2xl border border-border p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-foreground mb-6">About the MD</h3>
              
              {/* Working Experience */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary mb-3">Working Experience</h4>
                <div className="space-y-3">
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border/30">
                    <p className="font-medium text-foreground">Proxy Softwares</p>
                    <p className="text-muted-foreground text-sm">IT Support</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 border border-border/30">
                    <p className="font-medium text-foreground">Freelancer</p>
                    <p className="text-muted-foreground text-sm">IT Consultant</p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Web Design & Development
                  </span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Python for Data Science
                  </span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    B.Sc Computer Science & IT
                  </span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    NYSC Certificate
                  </span>
                  <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Business Administration & Management
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Team Sections */}
      {departments.slice(1).map((dept, deptIndex) => (
        <section
          key={dept.key}
          className={`py-8 md:py-12 ${deptIndex % 2 === 1 ? "bg-secondary/30" : ""}`}
        >
          <div className="container-custom mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-3 py-1.5 rounded-lg text-sm font-medium ${dept.color}`}>
                {dept.label}
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={`mailto:${member.socials.email}`}
                          target="_blank"
                          rel="noopener noreferrer"
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
      <section className="py-8 md:py-12">
        <div className="container-custom mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Want to Join Our Team?
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
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
