import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cappu's Portfolio" },
    { name: "description", content: "Cappu's React Portfolio" },
  ];
}

export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
