import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-color relative transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
