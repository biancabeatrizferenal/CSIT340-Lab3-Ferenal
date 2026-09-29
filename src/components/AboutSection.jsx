import SectionHeading from "./SectionHeading";
import Fact from "./Fact";

const facts = [
  { label: "Course", value: "BS Information Technology" },
  { label: "Year level", value: "Third year" },
  { label: "School", value: "CIT-U" },
  { label: "Based in", value: "Cebu City" },
];

function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I grew up in Cebu City and chose CIT-U because it was closer to home.
        I decided to study Information Technology because I wanted to learn how
        to build websites, systems, and digital projects instead of just studying
        business. I enjoy creating things from scratch and seeing an idea turn
        into something that actually works.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {facts.map((f) => (
          <Fact key={f.label} label={f.label} value={f.value} />
        ))}
      </dl>
    </section>
  );
}

export default AboutSection;