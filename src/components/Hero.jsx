// src/components/Hero.jsx
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Hero() {
  const { lang } = useLanguage();

  const content = {
    en: {
      heading: "ISLOOB AL ALWAN TRANSPORT",
      subheading: "TRANSPORTATION SERVICES ALL AROUND UAE WE GIVE BEST CHOICE CONCERN.",
      button: "Book Now",
    },
    ar: {
      heading: "استأجر حافلة بسهولة",
      subheading: "ابحث واحجز الحافلات للرحلات والفعاليات والمزيد. سريع، موثوق، ومريح.",
      button: "احجز الآن",
    },
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 px-4 md:px-8 text-white max-w-6xl">
        <h1 className= "border text-4xl md:text-7xl font-bold mb-4  heading">{content[lang].heading}</h1>
        <p className="text-2xl text-shadow-lg/75 mb-6 subheading">{content[lang].subheading}</p>
        <button className="bg-amber-600 goldbutton hover:bg-amber-300 border border-black text-white px-6 py-3 rounded text-lg md:text-xl hover:text-black scale-105 transition-transform duration-300">
          {content[lang].button}
        </button>
      </div>
    </section>
  );
}
