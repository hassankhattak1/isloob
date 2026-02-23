import { useLanguage } from "../context/LanguageContext.jsx";

export default function About() {
  const { lang } = useLanguage();

  const content = {
    en: {
      label: "About Us",
      heading: "WE ARE YOUR JOURNEY TO SUSTAINABLE MOBILITY",
      description: `Vehicles used on our passenger services are of the most modern, state
of the art technology available today and have a comprehensive range
of features, including large panoramic windows, air-conditioning, and
GPS. Electronically controlled air bag suspension ensures a smooth and
comfortable ride for our passengers. We have a range of vehicles to suit
the size and demands of any group. Vehicles range from 13 seat mini
coaches to 26, 30, 67, or 84 seat.`,
      button: "Explore Our Services",
    },
    ar: {
      label: "معلومات عنا",
      heading: "نحن رحلتك نحو التنقل المستدام",
      description: `المركبات المستخدمة في خدمات نقل الركاب لدينا هي من أحدث التقنيات المتوفرة اليوم،
وتتميز بنوافذ بانورامية كبيرة، وتكييف هواء، ونظام تحديد المواقع GPS.
يضمن نظام التعليق الهوائي الإلكتروني رحلة سلسة ومريحة لركابنا.
لدينا مجموعة متنوعة من الحافلات لتناسب جميع أحجام المجموعات،
ابتداءً من حافلات صغيرة تتسع لـ 13 راكبًا وحتى 84 راكبًا.`,
      button: "استكشف خدماتنا",
    },
  };

  return (
    <section
      id="about"
      dir={lang === "ar" ? "rtl" : "ltr"} // Automatically flips for Arabic
      className="bg-gradient-to-br from-[#f8f5ec] via-white to-[#f1e6c9] py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <div className="w-full">
            <img
              src="/about.png"
              alt={content[lang].label}
              className="w-full h-[400px] md:h-[550px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              {content[lang].label}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {content[lang].heading}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {content[lang].description}
            </p>

            <button className="bg-emerald-700 goldbutton hover:bg-emerald-800 text-white px-8 py-4 rounded-lg text-lg font-medium transition">
              {content[lang].button}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}