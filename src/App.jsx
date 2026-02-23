import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Bus from "./components/Bus";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot"; // ✅ ADD THIS

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Bus />
      <Team />
      <Projects />
      <Contact />

      <Chatbot /> {/* ✅ ADD THIS AT BOTTOM */}
    </>
  );
}