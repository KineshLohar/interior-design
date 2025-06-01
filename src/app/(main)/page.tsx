import { ContactSection } from "@/components/viewer/contact/contact-section";
import { HeroSection } from "@/components/viewer/hero/hero-section";
import { ProjectsSection } from "@/components/viewer/projects/projects-section";
import { WhyChooseUsSection } from "@/components/viewer/why-us/why-choose-us";

export default function Home() {
    return (
        <div className="w-full">
            <HeroSection />
            <ProjectsSection />
            <WhyChooseUsSection />
            <ContactSection />
        </div>
    )
}