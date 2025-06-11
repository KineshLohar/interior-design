import { ProjectsHero } from "@/components/viewer/projects/projects-hero";
import { ProjectsList } from "@/components/viewer/projects/projects-list";


export default function Projects(){
    return (
        <main className="w-full">
            <ProjectsHero />
            <ProjectsList />
        </main>
    )
}