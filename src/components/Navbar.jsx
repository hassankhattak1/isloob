// src/components/Navbar.jsx
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-white-800 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="flex justify-between h-18 items-center">
          <div className="w-16 h-16">
            <img src="./logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="hover:text-amber-600">Home</a>
            <a href="#about" className="hover:text-amber-600">About</a>
            <a href="#services" className="hover:text-amber-600">Services</a>
            <a href="#buses" className="hover:text-amber-600">Buses</a>
            <a href="#team" className="block hover:text-blue-600">Team</a>
            <a href="#tech" className="hover:text-amber-600">Our Tech</a>

            {/* Flags */}
            <button onClick={() => toggleLanguage("ar")} className="text-xl">🇦🇪</button>
            <button onClick={() => toggleLanguage("en")} className="text-xl">🇺🇸</button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">☰</button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-white-800 px-4 pt-2 pb-4 space-y-2">
          <a href="#home" className="block hover:text-blue-600">Home</a>
          <a href="#about" className="block hover:text-blue-600">About</a>
          <a href="#services" className="block hover:text-blue-600">Services</a>
          <a href="#buses" className="hover:text-amber-600">Buses</a>
          <a href="#team" className="block hover:text-blue-600">Team</a>
          <a href="#tech" className="block hover:text-blue-600">Our Tech</a>

          {/* Flags */}
          <button onClick={() => toggleLanguage("ar")} className="block text-xl">🇦🇪 Arabic</button>
          <button onClick={() => toggleLanguage("en")} className="block text-xl">🇺🇸 English</button>
        </div>
      )}
    </nav>
  );
}
