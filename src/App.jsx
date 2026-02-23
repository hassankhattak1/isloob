import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Bus from "./components/Bus";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import { useLanguage } from "./context/LanguageContext";

export default function App() {
  const { lang } = useLanguage();

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Bus />
      <Team />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}