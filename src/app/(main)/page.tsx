import { ContactSection } from "@/components/viewer/contact/contact-section";
import { HeroSection } from "@/components/viewer/hero/hero-section";
import { ProjectsSection } from "@/components/viewer/projects/projects-section";
import { ServicesSection } from "@/components/viewer/services/services-section";
import { Testimonials } from "@/components/viewer/testimonials/testimonials";
import { WhyChooseUsSection } from "@/components/viewer/why-us/why-choose-us";

export default function Home() {
    return (
        <div className="w-full">
            <HeroSection />
            <ServicesSection />
            <ProjectsSection />
            <WhyChooseUsSection />
            <Testimonials />
            <ContactSection />
        </div>
    )
}