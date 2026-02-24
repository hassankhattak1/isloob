import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Bus() {
  const { lang } = useLanguage();
  const [current, setCurrent] = useState(0);

  const content = {
    en: {
      label: "Our Fleet",
      heading: "OUR BUS FLEET",
      button: "Book Now →",
      buses: [
        {
          name: "HIACE MINI BUS  13 SEATS",
          description:
            "The HIACE Mini Bus is a comfortable and reliable 13-seater passenger vehicle, ideal for small group transportation, airport transfers, corporate travel, and city tours. Designed for smooth and efficient travel, it offers spacious seating, air conditioning, and a well-maintained interior to ensure passenger comfort and safety.",
          image: "/bus1.png",
        },
        {
          name: "TOYOTA COASTER 30 SEATS",
          description:
            "The Toyota Coaster 30-Seater Passenger Bus is a dependable and spacious vehicle designed for comfortable group travel, including corporate trips, school transport, tourism, and airport transfers.",
          image: "/T1.png",
        },
        {
          name: "ASHOK LEYLAND 67 SEATS (AC/NON-AC)",
          description:
            "The Ashok Leyland 67-Seater Heavy Passenger Bus is a powerful and spacious vehicle designed for large group transportation, making it ideal for staff transport, school services, tourism, and long-distance travel.",
          image: "/bus3.png",
        },
        {
          name: "TOYOTA COASTER SCHOOL BUS 26 SEATS",
          description:
            "The Toyota Coaster 26-Seater School Bus is a safe and reliable vehicle specially designed for student transportation.",
          image: "/bus4.png",
        },
        {
          name: "ASHOK LEYLAND SCHOOL BUS 67 SEATS",
          description:
            "The Ashok Leyland 67-Seater School Bus is a heavy-duty and spacious vehicle designed for safe and efficient student transportation.",
          image: "/bus5.png",
        },
      ],
    },
    ar: {
      label: "أسطولنا",
      heading: "أسطول الحافلات لدينا",
      button: "احجز الآن →",
      buses: [
        {
          name: "حافلة صغيرة HIACE 13 مقعد",
          description:
            "حافلة HIACE الصغيرة مريحة وموثوقة تتسع لـ13 راكبًا، مثالية لنقل المجموعات الصغيرة والانتقالات.",
          image: "/bus1.png",
        },
        {
          name: "تويوتا كوستر 30 مقعد",
          description:
            "حافلة تويوتا كوستر 30 مقعد مصممة للسفر الجماعي المريح.",
          image: "/T1.png",
        },
        {
          name: "آشوك ليلاند 67 مقعد",
          description:
            "حافلة آشوك ليلاند 67 مقعد مخصصة لنقل المجموعات الكبيرة.",
          image: "/bus3.png",
        },
        {
          name: "تويوتا كوستر المدرسة 26 مقعد",
          description:
            "حافلة المدرسة تويوتا كوستر 26 مقعد مصممة لنقل الطلاب بأمان.",
          image: "/bus4.png",
        },
        {
          name: "آشوك ليلاند المدرسة 67 مقعد",
          description:
            "حافلة آشوك ليلاند 67 مقعد مصممة للنقل المدرسي الآمن.",
          image: "/bus5.png",
        },
      ],
    },
  };

  const t = content[lang];

  const nextBus = () =>
    setCurrent((prev) => (prev + 1) % t.buses.length);

  const prevBus = () =>
    setCurrent((prev) =>
      prev === 0 ? t.buses.length - 1 : prev - 1
    );

  // ✅ Scroll to Contact with navbar offset fix
  const goToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      const yOffset = -80; // Navbar height
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="buses"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-[#ffffff] py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-gray-500 font-semibold tracking-wide mb-3 text-center">
          {t.label}
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {t.heading}
        </h2>

        <div className="relative flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-12 items-center ${
                lang === "ar" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <motion.img
                  src={t.buses[current].image}
                  alt={t.buses[current].name}
                  className="w-full drop-shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    y: { duration: 4, repeat: Infinity },
                  }}
                />
              </div>

              {/* Info */}
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-6">
                  {t.buses[current].name}
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {t.buses[current].description}
                </p>

                <button
                  onClick={goToContact}
                  className="goldbutton px-8 py-3 rounded-lg text-lg font-medium transition"
                >
                  {t.button}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-6 mt-12">
            <button
              onClick={prevBus}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-black hover:bg-[#DBAB19] transition"
            >
              ‹
            </button>

            <button
              onClick={nextBus}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-black hover:bg-[#DBAB19] transition"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}