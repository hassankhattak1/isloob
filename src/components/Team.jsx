import { useState, useEffect, useRef } from "react";
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Team() {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

 const teamMembers = [
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
];

  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, 4);

  const handleToggle = () => {
    if (showAll) {
      // Scroll back to section top when collapsing
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-[#f8f5ec] via-white to-[#f1e6c9] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Header */}
        <p className="text-gray-500 font-semibold tracking-wide mb-3">
          Team Member
        </p>

        <h2 className="heading mb-16 text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          MEET OUR TEAM MEMBER
        </h2>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 transition-all duration-500">
          {visibleMembers.map((member, index) => (
           <div
  key={index}
  className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
>
  {/* Image Section */}
  <div className="h-[280px] overflow-hidden">
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-full object-cover transition duration-500 hover:scale-105"
    />
  </div>

  {/* Content Section */}
  <div className="bg-[#f4f4f4] flex-1 p-5 text-left">

    <h3 className=" text-lg font-bold tracking-wide">
      {member.name.toUpperCase()}
    </h3>

    <p className=" mt-1 font-medium text-sm heading">
      {member.role}
    </p>

    <p className="text-gray-600 text-sm mt-3 leading-relaxed subheading">
      {member.description}
    </p>

    {/* Social Icons */}
    <div className="flex gap-3 mt-4">
      {[FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn].map(
        (Icon, i) => (
          <div
            key={i}
            className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded-full hover:bg-[#C2912E] hover:text-white transition cursor-pointer"
          >
            <Icon size={13} />
          </div>
        )
      )}
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
            {showAll ? "View Less ↑" : "View More →"}
          </button>
        </div>
      </div>
    </section>
  );
}