import SectionHeading from "./SectionHeading";
import SkillTag from "./SkillTag";

const languages = ["HTML", "CSS", "JavaScript", "Java"];
const frameworks = ["React", "Tailwind CSS", "Bootstrap"];
const tools = ["Git", "VS Code", "PostgreSQL", "Figma"];

function SkillsSection() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Skills" subtitle="What I work with." />
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-sm font-medium text-stone-500">Languages</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {languages.map((s) => (
              <SkillTag key={s} name={s} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-stone-500">Frameworks</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {frameworks.map((s) => (
              <SkillTag key={s} name={s} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium text-stone-500">Tools</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {tools.map((s) => (
              <SkillTag key={s} name={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;