import { ServicesHero } from "@/components/viewer/services/services-hero";
import { ServicesList } from "@/components/viewer/services/services-list";

export default function Services(){
    return (
        <main className="w-full">
            <ServicesHero />
            <ServicesList />
        </main>
    )
}