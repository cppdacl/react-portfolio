import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const SECTIONS = ["home", "portfolio", "contact"];

export default function AppNavbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const maxScroll = 450;
      const opacity = Math.min(1, scrollY / maxScroll);
      setBgOpacity(opacity);

      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollY / docHeight : 0;
      const numSections = SECTIONS.length;
      const sectionIndex = Math.min(
        numSections - 1,
        Math.floor(scrollPercent * numSections),
      );
      setActiveSection(SECTIONS[sectionIndex]);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="custom-navbar"
      style={{
        background: `rgba(12, 11, 20, ${bgOpacity})`,
        boxShadow: `0 4px 20px rgba(0,0,0,${bgOpacity * 0.3})`,
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <Container>
        <Navbar.Brand href="#home" onClick={handleNavClick("home")}>
          {">_<"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-3">
            {SECTIONS.map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                active={activeSection === section}
                onClick={handleNavClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
