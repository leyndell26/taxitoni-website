import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Fleet } from "@/components/Fleet";
import { Features } from "@/components/Features";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
