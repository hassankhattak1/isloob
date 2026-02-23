import { useState, useEffect, useRef } from "react";
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Team() {
  const { lang } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const content = {
    en: {
      label: "Team Members",
      heading: "MEET OUR TEAM MEMBERS",
      buttonMore: "View More →",
      buttonLess: "View Less ↑",
      team: [
        {
          name: "Shah Zarin",
          role: "President",
          description: "Leads company vision, strategy, and overall organizational direction.",
          image: "/team1.png",
        },
        {
          name: "Wajid Shah",
          role: "Chief Executive Officer",
          description: "Oversees executive operations and drives company growth initiatives.",
          image: "/team2.png",
        },
        {
          name: "Muhammad Tanveer",
          role: "Chief Operations Officer",
          description: "Manages daily operations and ensures service excellence.",
          image: "/team3.png",
        },
        {
          name: "Zubair Khan",
          role: "VP Marketing",
          description: "Leads branding, marketing strategy, and business expansion.",
          image: "/team4.png",
        },
        {
          name: "Sardar Hayat",
          role: "Accounts Manager",
          description: "Handles financial planning, accounting, and reporting.",
          image: "/team5.png",
        },
        {
          name: "Asif Khan",
          role: "Procurement Officer",
          description: "Manages purchasing, vendor relations, and supply.",
          image: "/team6.png",
        },
        {
          name: "Ubaid Ullah",
          role: "Store Manager",
          description: "Supervises inventory, logistics, and warehouse operations.",
          image: "/team7.png",
        },
        {
          name: "Asghar Khan",
          role: "Store Manager Assistant",
          description: "Supports store management and oversees stock coordination.",
          image: "/team8.png",
        },
        {
          name: "Ali Rahman",
          role: "Recruitment Manager",
          description: "Leads hiring processes and talent acquisition strategies.",
          image: "/team9.png",
        },
        {
          name: "Imran Khan",
          role: "Maintenance Officer",
          description: "Ensures fleet maintenance and operational readiness.",
          image: "/team10.png",
        },
        {
          name: "Rafiq Ullah",
          role: "Functional Manager",
          description: "Oversees departmental coordination and operations.",
          image: "/team11.png",
        },
        {
          name: "Muhammad Salim",
          role: "Procurement Assistant",
          description: "Supports procurement operations and vendor coordination.",
          image: "/team12.png",
        },
      ],
    },
    ar: {
      label: "أعضاء الفريق",
      heading: "تعرف على أعضاء فريقنا",
      buttonMore: "عرض المزيد →",
      buttonLess: "عرض أقل ↑",
      team: [
        {
          name: "شاه زرين",
          role: "الرئيس",
          description: "يقود رؤية الشركة واستراتيجيتها واتجاهها العام.",
          image: "/team1.png",
        },
        {
          name: "واجد شاه",
          role: "الرئيس التنفيذي",
          description: "يشرف على العمليات التنفيذية ويدفع مبادرات نمو الشركة.",
          image: "/team2.png",
        },
        {
          name: "محمد تنوير",
          role: "مدير العمليات",
          description: "يدير العمليات اليومية ويضمن جودة الخدمة.",
          image: "/team3.png",
        },
        {
          name: "زبير خان",
          role: "نائب الرئيس للتسويق",
          description: "يقود استراتيجيات العلامة التجارية والتسويق وتوسيع الأعمال.",
          image: "/team4.png",
        },
        {
          name: "سردار حيات",
          role: "مدير الحسابات",
          description: "يدير التخطيط المالي والمحاسبة والتقارير.",
          image: "/team5.png",
        },
        {
          name: "آصف خان",
          role: "مسؤول المشتريات",
          description: "يدير المشتريات والعلاقات مع الموردين وسلسلة التوريد.",
          image: "/team6.png",
        },
        {
          name: "عبيد الله",
          role: "مدير المخزن",
          description: "يشرف على المخزون واللوجستيات وعمليات المستودع.",
          image: "/team7.png",
        },
        {
          name: "أصغر خان",
          role: "مساعد مدير المخزن",
          description: "يدعم إدارة المخزن ويشرف على تنسيق المخزون.",
          image: "/team8.png",
        },
        {
          name: "علي رحمن",
          role: "مدير التوظيف",
          description: "يقود عمليات التوظيف واستراتيجيات اكتساب المواهب.",
          image: "/team9.png",
        },
        {
          name: "عمران خان",
          role: "مسؤول الصيانة",
          description: "يضمن صيانة الأسطول وجاهزيته التشغيلية.",
          image: "/team10.png",
        },
        {
          name: "رفيق الله",
          role: "مدير الوظائف",
          description: "يشرف على تنسيق العمليات بين الأقسام.",
          image: "/team11.png",
        },
        {
          name: "محمد سليم",
          role: "مساعد المشتريات",
          description: "يدعم عمليات المشتريات وتنسيق الموردين.",
          image: "/team12.png",
        },
      ],
    },
  };

  const t = content[lang];

  const visibleMembers = showAll ? t.team : t.team.slice(0, 4);

  const handleToggle = () => {
    if (showAll) sectionRef.current.scrollIntoView({ behavior: "smooth" });
    setShowAll(!showAll);
  };

  return (
    <section
      ref={sectionRef}
      id="team"
      dir={lang === "ar" ? "rtl" : "ltr"} // RTL support
      className="bg-gradient-to-br from-[#f8f5ec] via-white to-[#f1e6c9] py-20"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <p className="text-gray-500 font-semibold tracking-wide mb-3">{t.label}</p>
        <h2 className="heading mb-16 text-4xl md:text-5xl font-bold text-gray-800">{t.heading}</h2>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 transition-all duration-500">
          {visibleMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            >
              {/* Image */}
              <div className="h-[280px] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="bg-[#f4f4f4] flex-1 p-5 text-left">
                <h3 className="text-lg font-bold tracking-wide">{member.name.toUpperCase()}</h3>
                <p className="mt-1 font-medium text-sm heading">{member.role}</p>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed subheading">{member.description}</p>

                {/* Social Icons */}
                <div className="flex gap-3 mt-4">
                  {[FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full hover:bg-[#C2912E] hover:text-white transition cursor-pointer"
                    >
                      <Icon size={13} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-16">
          <button
            onClick={handleToggle}
            className="goldbutton px-8 py-3 rounded-lg text-lg font-medium transition"
          >
            {showAll ? t.buttonLess : t.buttonMore}
          </button>
        </div>
      </div>
    </section>
  );
}