import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Services } from "./components/Services";
import { LifeProblems, FreeKundli } from "./components/KundliAndProblems";
import { PanchangAndRashifal } from "./components/PanchangAndRashifal";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { FAQ, Blog } from "./components/FAQAndBlog";
import { Contact, Footer, WhatsAppFloat } from "./components/ContactAndFooter";
import { ThemeDemoBar } from "./components/ThemeToggle";
import { ScrollProgress } from "./components/ScrollProgress";
import { ThemeProvider } from "./context/ThemeContext";
import { useRevealOnScroll, useScrollSpy } from "./hooks/useRevealOnScroll";

const SECTIONS = ["trust", "services", "kundli", "panchang", "about", "testimonials", "faq", "contact"];

function SiteContent() {
  const mainRef = useRevealOnScroll();
  useScrollSpy(SECTIONS);

  return (
    <div className="has-theme-bar">
      <ScrollProgress />
      <ThemeDemoBar />
      <Header />
      <main ref={mainRef as React.RefObject<HTMLElement>}>
        <Hero />
        <TrustBar />
        <Services />
        <LifeProblems />
        <FreeKundli />
        <PanchangAndRashifal />
        <About />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <SiteContent />
    </ThemeProvider>
  );
}
