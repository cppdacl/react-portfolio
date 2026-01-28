import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [bgOpacity, setBgOpacity] = useState(0);
  const [shadowOpacity, setShadowOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 100;

      setBgOpacity(Math.min(1, scrollY / maxScroll));
      setShadowOpacity(Math.min(0.25, (scrollY / maxScroll) * 0.25));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        background: `rgba(12, 11, 20, ${bgOpacity})`,
        boxShadow: `0 4px 20px rgba(0, 0, 0, ${shadowOpacity})`,
        transition: "background 0.3s, box-shadow 0.3s",
      }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          {">_<"}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
