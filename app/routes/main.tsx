import type { Route } from "./+types/main";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import Home from "~/components/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cappu's Portfolio" },
    { name: "description", content: "Cappu's React Portfolio" },
  ];
}

export default function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
