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
            "The Toyota Coaster 30-Seater Passenger Bus is a dependable and spacious vehicle designed for comfortable group travel, including corporate trips, school transport, tourism, and airport transfers. It features ergonomic cushioned seating, ample legroom, overhead storage racks, air conditioning, and safety measures including seatbelts and anti-slip flooring for a reliable travel experience.",
          image: "/T1.png",
        },
        {
          name: "ASHOK LEYLAND 67 SEATS (AC/NON-AC)",
          description:
            "The Ashok Leyland 67-Seater Heavy Passenger Bus is a powerful and spacious vehicle designed for large group transportation, making it ideal for staff transport, school services, tourism, and long-distance travel. It comes equipped with air conditioning, comfortable seats, advanced safety features, and large windows for scenic views, ensuring passengers enjoy a safe and pleasant journey.",
          image: "/bus3.png",
        },
        {
          name: "TOYOTA COASTER SCHOOL BUS 26 SEATS",
          description:
            "The Toyota Coaster 26-Seater School Bus is a safe and reliable vehicle specially designed for student transportation. It provides secure seating with seatbelts, easy boarding and alighting, durable interiors, clear emergency exits, and efficient climate control to maintain comfort on short and long routes.",
          image: "/bus4.png",
        },
        {
          name: "ASHOK LEYLAND SCHOOL BUS 67 SEATS",
          description:
            "The Ashok Leyland 67-Seater School Bus is a heavy-duty and spacious vehicle designed for safe and efficient student transportation. It features reinforced safety systems, wide and comfortable seating, large windows for visibility, effective ventilation, and reliable performance over long distances to ensure both safety and comfort for all students.",
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
            "حافلة تويوتا كوستر 30 مقعد واسعة ومريحة مصممة للسفر الجماعي، بما في ذلك الرحلات المدرسية والسياحية ورحلات الشركات والمطارات. تحتوي على مقاعد مبطنة ومريحة ومساحة واسعة للأرجل وأماكن لتخزين الأمتعة ومكيف هواء وأنظمة أمان لضمان رحلة مريحة وموثوقة.",
          image: "/T1.png",
        },
        {
          name: "آشوك ليلاند 67 مقعد",
          description:
            "حافلة آشوك ليلاند 67 مقعد قوية وواسعة مصممة لنقل المجموعات الكبيرة، مثالية لنقل الموظفين والخدمات المدرسية والسياحة والرحلات الطويلة. مزودة بمقاعد مريحة، وتكييف هواء، ونظام أمان متطور، ونوافذ كبيرة للاستمتاع بالمناظر أثناء الرحلة.",
          image: "/bus3.png",
        },
        {
          name: "تويوتا كوستر المدرسة 26 مقعد",
          description:
            "حافلة المدرسة تويوتا كوستر 26 مقعد آمنة وموثوقة مصممة لنقل الطلاب. تحتوي على مقاعد مزودة بأحزمة أمان، سهولة الصعود والنزول، مقصورة متينة، مخارج طوارئ واضحة، ونظام تكييف فعال للحفاظ على راحة الطلاب أثناء الرحلات القصيرة والطويلة.",
          image: "/bus4.png",
        },
        {
          name: "آشوك ليلاند المدرسة 67 مقعد",
          description:
            "حافلة آشوك ليلاند المدرسة 67 مقعد ثقيلة وواسعة مصممة للنقل المدرسي الآمن والفعال. تحتوي على أنظمة أمان معززة، مقاعد واسعة ومريحة، نوافذ كبيرة للرؤية، تهوية فعالة، وأداء موثوق على المسافات الطويلة لضمان سلامة وراحة جميع الطلاب.",
          image: "/bus5.png",
        },
      ],
    },
  };

  const t = content[lang];

  const nextBus = () => setCurrent((prev) => (prev + 1) % t.buses.length);
  const prevBus = () =>
    setCurrent((prev) => (prev === 0 ? t.buses.length - 1 : prev - 1));

  const goToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      const yOffset = -80;
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
      className="bg-[#ffffff] py-12 overflow-hidden" // Reduced padding
    >
      <div className="max-w-7xl mx-auto px-6 md:gap-7">
        <h1 className="text-gray-500 font-semibold tracking-wide mb-3 text-center">
          {t.label}
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
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
              className={`flex flex-col md:flex-row gap-12 md:items-center ${
                lang === "ar" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 h-[200px] md:h-[500px]  overflow-hidden">
                <motion.img
                  src={t.buses[current].image}
                  alt={t.buses[current].name}
                  className="w-full  h-full object-contain"
                  whileHover={{ scale: 1.05 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ y: { duration: 4, repeat: Infinity } }}
                />
              </div>

              {/* Info */}
              <div className="md:w-1/2 h-[500px] flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6 text-center md:text-left">
                  {t.buses[current].name}
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed mb-8 line-clamp-6 text-center md:text-left">
                  {t.buses[current].description}
                </p>

                <div className="flex justify-center md:justify-start">
                  <motion.button
                    onClick={goToContact}
                    whileHover={{ scale: 1.05 }}
                    className="goldbutton px-8 py-3 rounded-lg text-lg font-medium transition cursor-pointer"
                  >
                    {t.button}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-6 mt-10">
            <button
              onClick={prevBus}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-[#DBAB19] transition cursor-pointer hover:bg-black hover:text-[#DBAB19] text-black text-2xl font-bold"
            >
              ‹
            </button>

            <button
              onClick={nextBus}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-[#DBAB19] transition cursor-pointer hover:bg-black hover:text-[#DBAB19] text-black text-2xl font-bold"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}