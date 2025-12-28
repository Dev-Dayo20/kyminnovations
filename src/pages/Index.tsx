import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { DepartmentsSection } from "@/components/home/DepartmentsSection";
import { FeaturedWorkSection } from "@/components/home/FeaturedWorkSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ClientsSection />
      <DepartmentsSection />
      <FeaturedWorkSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
