import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Heart, Users, Lightbulb, Shield } from "lucide-react";
import { useTheme } from "next-themes";
import kymetraLogo from "@/assets/kymetra-logo.png";
import kymetraLogoWhite from "@/assets/kymetra-logo-white.png";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Our departments work seamlessly together, combining expertise to create comprehensive solutions.",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "We maintain the highest standards in every project, ensuring excellence in every deliverable.",
  },
  {
    icon: Heart,
    title: "Client Focus",
    description: "Your success is our priority. We listen, understand, and deliver solutions that exceed expectations.",
  },
];

const About = () => {
  const { theme } = useTheme();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About KYMETRA
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building the Future Through Technology & Creativity
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At KYMETRA, we don't just plan we build. By combining our roots in 
              software and engineering with a passion for creative design, we help 
              businesses tackle their toughest challenges and turn concepts into 
              products that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We are an innovative company founded in December 2023 with a clear goal – to build smart, practical solutions that solve real problems. From the beginning, our focus has been on quality, simplicity, and impact.
                </p>
                <p>
                  Our work is driven through three major departments: Technology & Innovation, Multimedia & Creative, and Engineering & Technical Services. Together, these teams help us design, build, and deliver solutions that meet modern business and digital needs.
                </p>
                <p>
                  One of our key solutions is the Smart Point of Sale system (SPOSS) – a powerful inventory and stock management platform designed to work across minimarts, stores, supermarkets, warehouses, pharmacies, and more. We also run an e-commerce platform that supports businesses in selling and managing products online with ease.
                </p>
                <p>
                  Beyond building products, we are passionate about training and development. We offer hands-on learning programs that align with our mission of developing skilled individuals and creating high-quality, sustainable solutions.
                </p>
                <p>
                  At our core, we believe innovation should be useful, accessible, and built to grow with people and businesses.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <img 
                  src={theme === "dark" ? kymetraLogoWhite : kymetraLogo} 
                  alt="KYMETRA Logo" 
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build reliable and innovative technology solutions that put client satisfaction first, while empowering and inspiring future generations through the positive use of technology.
              </p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a globally recognized company known for impactful solutions, innovation, and meaningful contributions to the future of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at KYMETRA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl border border-border p-6 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Integrated Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Our Departments Collaborate
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our three departments work in harmony to deliver comprehensive solutions.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Technology & Innovation", desc: "Builds the digital infrastructure and functionality" },
                { name: "Multimedia & Creative", desc: "Creates the visual identity and user experience" },
                { name: "Engineering & Technical Services", desc: "Ensures reliable hardware and technical support" },
              ].map((dept, index) => (
                <div
                  key={dept.name}
                  className="relative bg-card rounded-2xl border border-border p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground">{dept.desc}</p>
                </div>
              ))}
            </div>
            {/* Connecting lines - hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-border -translate-y-1/2 -z-10" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
