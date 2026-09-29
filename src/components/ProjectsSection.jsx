import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    year: "2026",
    title: "About Me in React",
    description: "A personal portfolio page I built while learning React and Tailwind CSS.",
    tech: "React · Tailwind CSS",
    link: "https://github.com/biancabeatrizferenal/CSIT340-Lab1-Ferenal",
  },
  {
    year: "2026",
    title: "Kape Cove",
    description: "A staycation booking concept that combines a beachfront accommodation experience with Kape Co. drinks and add-ons.",
    tech: "UI/UX · Figma · Web Design",
    link: "#",
  },
  {
    year: "2026",
    title: "Barangay Alaga",
    description: "A community-based healthcare platform designed to make barangay health center scheduling, records, and communication more accessible.",
    tech: "UI/UX · Systems Analysis",
    link: "#",
  },
  {
    year: "2026",
    title: "Bantay Andam Luwas",
    description: "An accessible disaster alert and emergency preparedness app designed for disaster-prone barangays in Cebu.",
    tech: "UI/UX · Figma · HCI",
    link: "#",
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built and worked on." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            year={p.year}
            title={p.title}
            description={p.description}
            tech={p.tech}
            link={p.link}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;