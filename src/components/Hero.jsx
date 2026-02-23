import { useLanguage } from "../context/LanguageContext.jsx";

export default function Hero() {
  const { lang } = useLanguage();

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const content = {
    en: {
      heading: "ISLOOB AL ALWAN TRANSPORT",
      subheading:
        "TRANSPORTATION SERVICES ALL AROUND UAE WE GIVE BEST CHOICE CONCERN.",
      button: "Book Now",
    },
    ar: {
      heading: "استأجر حافلة بسهولة",
      subheading:
        "ابحث واحجز الحافلات للرحلات والفعاليات والمزيد. سريع، موثوق، ومريح.",
      button: "احجز الآن",
    },
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
      id="home"
    >
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
        <h1 className="text-4xl md:text-7xl font-bold mb-4 heading">
          {content[lang].heading}
        </h1>

        <p className="text-xl md:text-2xl mb-6 subheading">
          {content[lang].subheading}
        </p>

        <button
          onClick={scrollToContact}
          className="bg-amber-600 goldbutton hover:bg-amber-400 text-white px-6 py-3 rounded text-lg md:text-xl hover:text-black scale-105 transition-all duration-300"
        >
          {content[lang].button}
        </button>
      </div>
    </section>
  );
}