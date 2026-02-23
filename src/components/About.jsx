export default function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-[#f8f5ec] via-white to-[#f1e6c9] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <div className="w-full">
            <img
              src="/about.png"   // <-- Put your image in public folder
              alt="About Us"
              className="w-full h-[400px] md:h-[550px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              About Us
            </p>

            <h2 className="text-3xl  heading md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              WE ARE YOUR JOURNEY TO
              SUSTAINABLE MOBILITY
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 subheading">
              Vehicles used on our passenger services are of the most modern, state
of the art technology available today and have a comprehensive range
of features, including large panoramic windows, air-conditioning, and
GPS. Electronically controlled air bag suspension ensures a smooth and
comfortable ride for our passengers. We have a range of vehicles to suit
the size and demands of any group. Vehicles range from 13 seat mini
coaches to 26, 30, 67,or 84 seat
            </p>

            <button className="bg-emerald-700 goldbutton hover:bg-emerald-800 text-white px-8 py-4 rounded-lg text-lg font-medium transition">
              Explore Our Services
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
