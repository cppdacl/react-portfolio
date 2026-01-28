import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="section text-center">
      <div className="hero-bg"></div>
      <div className="container position-relative text-light">
        <h1 className="display-4 fw-bold">Hi, I'm Cappu</h1>
        <p className="lead">A Software, Game, and Network Developer :3</p>
        <a href="#portfolio" className="btn btn-neon mt-3">
          See My Work
        </a>
      </div>
    </section>
  );
}
