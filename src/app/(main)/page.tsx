import { ContactSection } from "@/components/viewer/contact/contact-section";
import { HeroSection } from "@/components/viewer/hero/hero-section";

export default function Home() {
    return (
        <div className="w-full">
            <HeroSection />
            <ContactSection />
        </div>
    )
}