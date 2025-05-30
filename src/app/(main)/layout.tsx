import RevealObserver from "@/components/reveal-observer";
import { Footer } from "@/components/viewer/footer";
import Navbar from "@/components/viewer/navbar/navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full relative">
            <RevealObserver />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
} 