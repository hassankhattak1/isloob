import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function OnExplore() {
  const { lang } = useLanguage();
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const content = {
    en: {
      subtitle: "School Transportation",
      title: "Safe & Reliable School Bus Services",
      videos: [
        { title: "School Bus On The Move", src: "/video1.mp4" },
        { title: "Our Modern School Bus Fleet", src: "/video2.mp4" },
        { title: "Safe Student Pick & Drop Point", src: "/video3.mp4" },
      ],
    },
    ar: {
      subtitle: "النقل المدرسي",
      title: "خدمات حافلات مدرسية آمنة وموثوقة",
      videos: [
        { title: "حافلة مدرسية أثناء الرحلة", src: "/video1.mp4" },
        { title: "أسطول حافلاتنا المدرسية الحديثة", src: "/video2.mp4" },
        { title: "موقع آمن لتوصيل واستلام الطلاب", src: "/video3.mp4" },
      ],
    },
  };

  const videos = content[lang].videos;

  return (
    <section className="relative bg-[#F4F6F8] py-20 overflow-hidden min-h-screen">

      {/* ✨ Soft Gold Floating Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#DBAB19]/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />

      {/* ✨ Gold Particles */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#DBAB19_1px,transparent_1px)] [background-size:40px_40px] opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className=" text-gray-300 uppercase mb-3 font-medium">
            {content[lang].subtitle}
          </p>

          {/* ✨ Shimmer Gold Text */}
          <h2 className="heading uppercase text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#DBAB19] via-yellow-300 to-[#DBAB19] bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_4s_linear_infinite]">
            {content[lang].title}
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(219,171,25,0.6)]" />
        </motion.div>

        {/* Videos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setActiveVideo(video.src)}
              className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              <video
                src={video.src}
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-[400px] object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Gold Sweep Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-semibold group-hover:text-[#DBAB19] transition duration-500">
                  {video.title}
                </h3>
                <div className="w-12 h-[2px] bg-[#DBAB19] mt-3 group-hover:w-24 transition-all duration-500" />
              </div>

              <div className="absolute inset-0 rounded-2xl border border-[#DBAB19]/30 group-hover:border-[#DBAB19] group-hover:shadow-[0_0_30px_rgba(219,171,25,0.5)] transition duration-500" />
            </motion.div>
          ))}

        </div>
      </div>

      {/* 🎬 Fullscreen Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[9999]"
          onClick={() => setActiveVideo(null)}
        >
          <video
            src={activeVideo}
            controls
            autoPlay
            className="max-w-5xl w-full rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* ✨ Shimmer Keyframe */}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
        `}
      </style>
    </section>
  );
}