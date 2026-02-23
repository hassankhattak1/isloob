import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Bus() {
  const [current, setCurrent] = useState(0);

  const buses = [
    {
      name: "HIACE MINI BUS  13 SEATS",
      description:
        "The HIACE Mini Bus is a comfortable and reliable 13-seater passenger vehicle, ideal for small group transportation, airport transfers, corporate travel, and city tours. Designed for smooth and efficient travel, it offers spacious seating, air conditioning, and a well-maintained interior to ensure passenger comfort and safety. This mini bus is perfect for family trips, business teams, hotel transfers, and short-distance journeys. With its compact size and excellent maneuverability.",
      image: "/bus1.png",
    },
    {
      name: "TOYOTA COASTER 30 SEATS",
      description:
        "The Toyota Coaster 30-Seater Passenger Bus is a dependable and spacious vehicle designed for comfortable group travel, including corporate trips, school transport, tourism, and airport transfers. With seating for 30 passengers, powerful air conditioning, generous legroom, and a well-crafted interior, it ensures a smooth, relaxing, journey for all passengers. Built with Toyota’s renowned durability and strong engine performance, the Coaster delivers reliable and efficient operation on both city roads and long-distance highways.",
      image: "/T1.png",
    },
    {
      name: "ASHOK LEYLAND 67 SEATS (AC/NON-AC)",
      description:
        "The Ashok Leyland 67-Seater Heavy Passenger Bus is a powerful and spacious vehicle designed for large group transportation, making it ideal for staff transport, school services, tourism, and long-distance travel. With seating capacity for 67 passengers, it offers a comfortable and well-structured interior available in both AC and Non-AC options. Built with strong engineering, reliable engine performance, and advanced safety features, this heavy-duty bus ensures stability, durability, and a smooth ride on highways and urban roads alike.",
      image: "/bus3.png",
    },
    {
      name: "TOYOTA COASTER SCHOOL BUS 26 SEATS",
      description:
        "The Toyota Coaster 26-Seater School Bus is a safe and reliable vehicle specially designed for student transportation. With comfortable seating for 26 students, strong air conditioning, and a secure interior layout, it ensures a smooth and protected daily commute. Built with Toyota’s trusted durability and safety standards, this school bus delivers dependable performance, excellent stability, and a comfortable ride for both short city routes and longer school trips all around the UAE.",
      image: "/bus4.png",
    },
    {
      name: "ASHOK LEYLAND SCHOOL BUS 67 SEATS",
      description:
        "The Ashok Leyland 67-Seater School Bus is a heavy-duty and spacious vehicle designed for safe and efficient student transportation. With seating capacity for 67 passengers, it offers a well-structured interior, strong ventilation or AC options, and enhanced safety features to ensure maximum protection. Engineered for multiple fields like  durability and stability, this school bus provides reliable performance, smooth handling, and a secure travel experience for daily school routes and educational trips.",
      image: "/bus5.png",
    },
  ];

  const nextBus = () => {
    setCurrent((prev) => (prev + 1) % buses.length);
  };

  const prevBus = () => {
    setCurrent((prev) =>
      prev === 0 ? buses.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#F4F6F8] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-gray-500 font-semibold tracking-wide mb-3 text-center">
          Our Fleet
        </h1>

        <h2 className="heading text-4xl md:text-5xl font-bold text-center mb-16">
          OUR BUS FLEET
        </h2>

        <div className="relative flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              {/* Bus Image with 3D Effect */}
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 [perspective:1000px]"
              >
                <motion.img
                  src={buses[current].image}
                  alt={buses[current].name}
                  className="w-full drop-shadow-2xl"
                  whileHover={{
                    rotateY: 10,
                    rotateX: 5,
                    scale: 1.05,
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    rotateY: { type: "spring", stiffness: 100 },
                    rotateX: { type: "spring", stiffness: 100 },
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                />
              </motion.div>

              {/* Bus Info */}
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 text-left md:text-left "
              >
                <h3 className=" text-3xl font-bold mb-6">
                  {buses[current].name}
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed mb-8 subheading">
                  {buses[current].description}
                </p>

                <button className="goldbutton px-8 py-3 rounded-lg text-lg font-medium transition">
                  Book Now →
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-6 mt-12">
            <button
              onClick={prevBus}
              className="cursor-pointer group w-14 h-14 flex items-center justify-center rounded-full bg-black transition-all duration-300 hover:bg-[#DBAB19]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#D4AF37] transition-colors duration-300 group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextBus}
              className="cursor-pointer group w-14 h-14 flex items-center justify-center rounded-full bg-black transition-all duration-300 hover:bg-[#DBAB19]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#D4AF37] transition-colors duration-300 group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}