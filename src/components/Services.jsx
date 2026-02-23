import React from "react";

export default function Services() {
  const services = [
    {
      title: "School Transport",
      icon: "/bus.png",
      image: "/school.jpg",
    },
    {
      title: "Construction and Infrastructure",
      icon: "/repair.png",
      image: "/repair.jpg",
    },
    {
      title: "Transport Solutions",
      icon: "/steering.png",
      image: "/transport.jpg",
    },
    {
      title: "Corporate Mobility",
      icon: "/corporate.png",
      image: "/corporate.jpg",
    },
  ];

  return (
    <section className="bg-[#f4f6f8] py-20 px-6">
      
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-gray-500 tracking-wide mb-2">
          Services
        </p>
        <h2 className="heading text-4xl md:text-5xl font-bold text-gray-800">
          OUR KEY SERVICES
        </h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row"
          >
            
            {/* Left Content */}
            <div className="flex flex-col justify-between p-8 md:w-1/2">
              
              <div>
                <img
                  src={service.icon}
                  alt="icon"
                  className="w-12 h-12 mb-6"
                />

                <h3 className="text-2xl font-semibold text-gray-800 leading-snug">
                  {service.title}
                </h3>
              </div>

              {/* Arrow */}
              <div className="mt-8 text-gray-400 text-2xl transform group-hover:translate-x-2 transition duration-300">
                »
              </div>

            </div>

            {/* Right Image */}
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
