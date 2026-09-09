import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QueEsLaApp from "@/components/QueEsLaApp";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QueEsLaApp />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
