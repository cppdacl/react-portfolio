import React, { useState } from "react";
import "./Portfolio.css";

interface Project {
  name: string;
  icon: string;
  period: string;
  description: string;
  tech: string[];
  additional?: string;
  lore?: string;
}

const PROJECTS: Project[] = [
  {
    name: "Nomikai",
    icon: "public/nomi_icon.png",
    period: "July 2021 - May 2024",
    description:
      "A private game-server for Growtopia built by reversing binaries using Ghidra or IDA.",
    tech: ["C++", "ASM", "UDP", "REST APIs"],
    additional:
      "This project taught me binary reversing and network programming.",
    lore: "I spent countless nights debugging packet flows and simulating server events. It felt like being a magician controlling a digital world behind the scenes.",
  },
  {
    name: "Prism",
    icon: "public/sdk_icon.jpg",
    period: "2024",
    description:
      "A cheat trainer for Source Engine games like CS:GO and TF2. Learned reverse engineering here.",
    tech: ["C", "C++", "ASM", "Valve SDK", "Source Engine"],
    lore: "Prism pushed my reverse engineering skills to the limit. I learned how to hook functions safely, detect memory layouts, and even optimize trainer routines for minimal latency.",
  },
  {
    name: "Arcane",
    icon: "public/arcane_icon.png",
    period: "2025",
    description:
      "An advanced Minecraft server focused on competitive PVP and SMP experience.",
    tech: ["Java", "Spring Boot", "Netty IO", "MariaDB"],
    additional:
      "Built a scalable, competitive Minecraft server with custom PVP mechanics.",
    lore: "Arcane became a playground for creative combat mechanics. I designed custom PvP arenas, balance-tested every weapon, and even integrated advanced AI-controlled mobs for an extra challenge.",
  },
];

const GRADIENTS: Record<string, string> = {
  Nomikai:
    "linear-gradient(145deg, rgba(14, 29, 51, 0.15), rgba(62, 17, 80, 0.15))",
  Prism:
    "linear-gradient(160deg, rgba(67, 20, 85, 0.15), rgba(37, 11, 78, 0.15))",
  Arcane:
    "linear-gradient(170deg, rgba(76, 11, 82, 0.15), rgba(7, 3, 27, 0.15))",
};

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeGradient, setActiveGradient] = useState<string>(
    GRADIENTS["Nomikai"],
  );

  const openModal = (project: Project) => {
    setModalProject(project);
    requestAnimationFrame(() => setModalVisible(true));
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => setModalProject(null), 300);
  };

  const handleTitleClick = (project: Project) => {
    setActiveGradient(GRADIENTS[project.name]);
  };

  return (
    <section
      id="portfolio"
      className="section"
      style={{
        background: activeGradient,
        transition: "background 1.2s ease",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5 text-light">My Portfolio</h2>
        <div className="row g-4 justify-content-center">
          {PROJECTS.map((project) => (
            <div key={project.name} className="col-md-4">
              <div
                className="portfolio-card"
                onMouseEnter={() => setHoveredProject(project.name)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  transform:
                    hoveredProject === project.name
                      ? "translateY(-8px)"
                      : "translateY(0)",
                  boxShadow:
                    hoveredProject === project.name
                      ? "0 18px 40px rgba(0,0,0,0.45)"
                      : "0 10px 30px rgba(0,0,0,0.35)",
                  transition:
                    "transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <div className="project-icon">
                  <img src={project.icon} alt={`${project.name} Icon`} />
                </div>
                <h5
                  className="fw-bold"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleTitleClick(project)}
                >
                  {project.name}
                </h5>
                <small className="text-muted">{project.period}</small>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <button
                  className="proj-action-btn"
                  onClick={() => openModal(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalProject && (
        <div
          className={`modal-overlay ${modalVisible ? "show" : ""}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className={`modal-content ${modalVisible ? "fade-in" : "fade-out"}`}
          >
            <button className="modal-close" onClick={closeModal}>
              &lt;
            </button>
            <div className="modal-header">{modalProject.name}</div>
            <div className="modal-body">
              <p>{modalProject.description}</p>
              {modalProject.tech.length > 0 && (
                <p>
                  <strong>Tech:</strong> {modalProject.tech.join(", ")}
                </p>
              )}
              {modalProject.additional && <p>{modalProject.additional}</p>}
              {modalProject.lore && (
                <p className="project-lore">{modalProject.lore}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
