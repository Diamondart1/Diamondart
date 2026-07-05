import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ImageStrip } from "@/components/ImageStrip";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { SocialMedia } from "@/components/SocialMedia";
import { Trainings } from "@/components/Trainings";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { MagneticButtons } from "@/components/MagneticButtons";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <MagneticButtons />
      <Header />
      <Hero />
      <Marquee />
      <ImageStrip />
      <About />
      <Portfolio />
      <SocialMedia />
      <Trainings />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
