import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const canvasRef = useRef(null);

  const projects = [
    {
      logo: "/descon.png",
      bg: "/dewa.jpg",
      company: "Descon",
      project: "DEWA Power Plant DXB",
      year: "2020-2021",
      contact: "Waqas Haider",
      description:
        "Construction & manpower supply for DEWA power infrastructure project in Dubai.",
    },
    {
      logo: "/l.png",
      bg: "/shj.jpg",
      company: "Arabian Construction Company",
      project: "SHJ CCPP (Al Khan)",
      year: "2021-2022",
      contact: "Faruk Jrad",
      description:
        "Mechanical and electrical manpower supply for Al Khan Combined Cycle Power Plant.",
    },
    {
      logo: "/k.png",
      bg: "/lo.jpg",
      company: "Intermass Engineering",
      project: "Meydan 800 Villas",
      year: "2021-2023",
      contact: "Anoop Tomas",
      description:
        "Full workforce deployment for 800 luxury villas development project.",
    },
    {
      logo: "/m.png",
      bg: "/nl.jpg",
      company: "Al Kamal School",
      project: "Sharjah School Transportation",
      year: "2021-2023",
      contact: "Husam",
      description:
        "Transportation and logistics services for school students across Sharjah.",
    },
  ];

  /* ================= PARTICLE EFFECT ================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 70 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(201,153,39,0.4)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);
  /* =================================================== */

  return (
    <section className="projects-section">
      <canvas ref={canvasRef} className="particle-canvas" />

    <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Header */}
        <p className="text-gray-500 font-semibold tracking-wide mb-3">
          Projects
        </p>

        <h2 className="heading mb-16 text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          OUR SIGNATURE PROJECTS
        </h2>
        </div>

      <div className="carousel-wrapper">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="carousel-track"
        >
          {[...projects, ...projects].map((item, index) => (
            <ProjectCard
              key={index}
              item={item}
              onView={() => setActiveProject(item)}
            />
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
      {activeProject && (
        <div className="modal-overlay">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="modal-box"
          >
            <img src={activeProject.logo} className="modal-logo" />
            <h3>{activeProject.company}</h3>
            <p><strong>Project:</strong> {activeProject.project}</p>
            <p><strong>Year:</strong> {activeProject.year}</p>
            <p><strong>Contact:</strong> {activeProject.contact}</p>
            <p style={{ marginTop: "10px" }}>
              {activeProject.description}
            </p>

            <button
              onClick={() => setActiveProject(null)}
              className="lux-btn"
              style={{ marginTop: "20px" }}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}

      <style>{`
        .projects-section {
          padding: 120px 40px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg,#f9f6ef,#ffffff,#f3e6c8);
        }

        .particle-canvas {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }

        .text-center {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .sub {
          color: #777;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .projects-heading {
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 80px;
          background: linear-gradient(90deg,#C2912E,#DBAB19,#CA9927);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .carousel-wrapper {
          overflow: visible;
          padding: 60px 0;
          perspective: 1000px;
          position: relative;
          z-index: 2;
        }

        .carousel-track {
          display: flex;
          gap: 30px;
          width: max-content;
          align-items: center;
        }

        .project-card {
          width: 200px;
          height: 300px;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          transition: 0.4s ease;
          transform-origin: center;
          background: #000;
        }

        .project-card img.bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.6s ease;
          filter: grayscale(100%) brightness(0.6);
        }

        .project-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }

        .card-content {
          position: relative;
          z-index: 2;
          padding: 16px;
          color: white;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .company-logo {
          height: 34px;
          background: white;
          padding: 5px;
          border-radius: 6px;
          filter: grayscale(100%);
          transition: 0.4s;
        }

        .view-btn {
          padding: 6px 14px;
          border-radius: 999px;
          border: none;
          font-size: 12px;
          font-weight: 600;
          background: linear-gradient(90deg,#C2912E,#DBAB19,#CA9927);
          color: black;
          cursor: pointer;
          margin-top: 10px;
        }

        .active-card {
          transform: scale(1.15);
          z-index: 5;
        }

        .active-card img.bg {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.08);
        }

        .side-card {
          transform: scale(0.9);
          opacity: 0.6;
          filter: blur(1px);
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }

        .modal-box {
          background: white;
          padding: 40px;
          border-radius: 24px;
          max-width: 500px;
          text-align: center;
          border: 2px solid #C2912E;
        }

        .modal-logo {
          height: 60px;
          margin-bottom: 20px;
        }

        .lux-btn {
          padding: 8px 18px;
          border-radius: 999px;
          border: none;
          font-weight: 600;
          background: linear-gradient(90deg,#C2912E,#DBAB19,#CA9927);
          color: black;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ item, onView }) {
  const ref = useRef(null);
  const [position, setPosition] = useState("side");

  useEffect(() => {
    const check = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const center = window.innerWidth / 2;
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < rect.width / 2) {
        setPosition("active");
      } else {
        setPosition("side");
      }
    };

    const interval = setInterval(check, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      className={`project-card ${
        position === "active" ? "active-card" : "side-card"
      }`}
    >
      <img src={item.bg} className="bg" />

      <div className="card-content">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={item.logo} className="company-logo" />
          <span style={{ fontSize: "12px" }}>{item.year}</span>
        </div>

        <div>
          <h4 style={{ fontSize: "15px" }}>{item.company}</h4>
          <p style={{ fontSize: "13px" }}>{item.project}</p>

          <button className="view-btn" onClick={onView}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}