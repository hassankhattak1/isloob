import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [isHome, setIsHome] = useState(true);
  const navRefs = useRef({});

  const sections = [
    "home",
    "about",
    "services",
    "buses",
    "team",
    "projects",
    "contact",
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // 👑 Section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.7) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.7] }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const scrollBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 5;

      if (scrollBottom) {
        setActiveSection("contact");
      }

      setIsHome(window.scrollY < window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 👑 Sliding underline
  useEffect(() => {
    const current = navRefs.current[activeSection];
    if (current) {
      setIndicatorStyle({
        width: current.offsetWidth + "px",
        left: current.offsetLeft + "px",
      });
    }
  }, [activeSection]);

  const navItemStyle = (id) =>
    `relative px-4 py-2 font-medium transition-all duration-300 ${
      activeSection === id
        ? "text-yellow-500"
        : isHome
        ? "text-white hover:text-yellow-300"
        : "text-black hover:text-yellow-600"
    }`;

  const translations = {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    buses: "الحافلات",
    team: "الفريق",
    projects: "المشاريع",
    contact: "اتصل بنا",
  };

  return (
    <nav
      className={`fixed w-full z-50 backdrop-blur-xl transition-all duration-500 ${
        isHome
          ? "bg-white/20 border-b border-yellow-400/30"
          : "bg-white/80 border-b border-yellow-500/40 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div
            className="w-16 h-16 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex relative items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                ref={(el) => (navRefs.current[section] = el)}
                className={navItemStyle(section)}
                onClick={() => scrollToSection(section)}
              >
                {lang === "ar"
                  ? translations[section]
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}

            <span
              className="absolute bottom-0 h-[3px] rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transition-all duration-500"
              style={indicatorStyle}
            />
          </div>

          {/* Desktop Language */}
          <div className="hidden md:flex gap-3 items-center">
            <button
              onClick={() => toggleLanguage("ar")}
              className={`flex items-center gap-2 px-3 py-1 rounded-md transition ${
                lang === "ar"
                  ? "bg-yellow-500 text-white"
                  : isHome
                  ? "text-white"
                  : "text-black"
              }`}
            >
              <img src="/uae.png" className="w-5 h-5 rounded-sm" />
              العربية
            </button>

            <button
              onClick={() => toggleLanguage("en")}
              className={`flex items-center gap-2 px-3 py-1 rounded-md transition ${
                lang === "en"
                  ? "bg-yellow-500 text-white"
                  : isHome
                  ? "text-white"
                  : "text-black"
              }`}
            >
              <img src="/usa.png" className="w-5 h-5 rounded-sm" />
              English
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`text-3xl transition ${
                isHome ? "text-white" : "text-black"
              }`}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[600px] py-4" : "max-h-0"
        } ${
          isHome
            ? "bg-black/80 backdrop-blur-lg"
            : "bg-white shadow-md"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6">

          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-left py-2 border-b ${
                activeSection === section
                  ? "text-yellow-500 border-yellow-500"
                  : isHome
                  ? "text-white border-white/20"
                  : "text-black border-black/10"
              }`}
            >
              {lang === "ar"
                ? translations[section]
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}

          {/* Mobile Language Switch */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => toggleLanguage("ar")}
              className={`flex items-center gap-2 px-3 py-1 rounded-md ${
                lang === "ar"
                  ? "bg-yellow-500 text-white"
                  : isHome
                  ? "text-white"
                  : "text-black"
              }`}
            >
              <img src="/uae.png" className="w-5 h-5 rounded-sm" />
              العربية
            </button>

            <button
              onClick={() => toggleLanguage("en")}
              className={`flex items-center gap-2 px-3 py-1 rounded-md ${
                lang === "en"
                  ? "bg-yellow-500 text-white"
                  : isHome
                  ? "text-white"
                  : "text-black"
              }`}
            >
              <img src="/usa.png" className="w-5 h-5 rounded-sm" />
              English
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}