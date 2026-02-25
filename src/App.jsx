import { Routes, Route } from "react-router-dom";
import { useLanguage } from "./context/LanguageContext";

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
import OnExplore from "./components/OnExplore";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Bus />
      <Team />
      <Projects />
      <Contact />
      <Chatbot />
    </>
  );
}

export default function App() {
  const { lang } = useLanguage();

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      
      {/* Navbar always visible */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<OnExplore />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />

    </div>
  );
}