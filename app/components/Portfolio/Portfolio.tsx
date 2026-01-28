import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="text-center mb-5 text-light">My Portfolio</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div
              className="portfolio-card"
              data-description="A private game-server for Growtopia built by reversing binaries using Ghidra or IDA."
              data-tech="C++, ASM, UDP, REST APIs"
              data-additional="This project taught me binary reversing and network programming."
            >
              <div className="project-icon">
                <img src="public/nomi_icon.png" alt="Nomikai Icon"></img>
              </div>
              <h5 className="fw-bold">Nomikai</h5>
              <small className="text-muted">July 2021 - May 2024</small>
              <p>
                A private game-server for Growtopia built by reversing binaries
                using Ghidra or IDA.
              </p>
              <div className="tech-tags">
                <span>C++</span>
                <span>ASM</span>
                <span>UDP</span>
                <span>REST APIs</span>
              </div>
              <button className="proj-action-btn">View Details</button>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="portfolio-card"
              data-description="A cheat trainer for Source Engine games like CS:GO and TF2."
              data-tech="C, C++, ASM, Valve SDK, Source Engine"
              data-additional="Learned reverse engineering and hooking techniques for game trainers."
            >
              <div className="project-icon">
                <img src="public/sdk_icon.jpg" alt="Prism Icon"></img>
              </div>
              <h5 className="fw-bold">Prism</h5>
              <small className="text-muted">2024</small>
              <p>
                A cheat trainer for Source Engine games like CS:GO and TF2.
                Learned reverse engineering here.
              </p>
              <div className="tech-tags">
                <span>C</span>
                <span>C++</span>
                <span>ASM</span>
                <span>Valve SDK</span>
                <span>Source Engine</span>
              </div>
              <button className="proj-action-btn">View Details</button>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="portfolio-card"
              data-description="An advanced Minecraft server focused on competitive PVP and SMP experience."
              data-tech="Java, Spring Boot, Netty IO, MariaDB"
              data-additional="Built a scalable, competitive Minecraft server with custom PVP mechanics."
            >
              <div className="project-icon">
                <img src="public/arcane_icon.png" alt="Arcane Icon"></img>
              </div>
              <h5 className="fw-bold">Arcane</h5>
              <small className="text-muted">2025</small>
              <p>
                An advanced Minecraft server focused on competitive PVP and SMP
                experience.
              </p>
              <div className="tech-tags">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>Netty IO</span>
                <span>MariaDB</span>
              </div>
              <button className="proj-action-btn">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
