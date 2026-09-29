import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

const items = [
  {
    period: "2025 – Present",
    title: "General Manager / Sales Manager / Cashier / Barista / Social Media Manager",
    place: "Kape Co.",
    description: "Manage daily operations, sales, customer service, coffee preparation, and social media content.",
  },
  {
    period: "2023 – Present",
    title: "Cashier / Barista / POS Staff",
    place: "Uncle Brew",
    description: "Handle customer orders, payments, POS transactions, and daily store operations.",
  },
  {
    period: "2025 – 2026",
    title: "Budget Management Lead",
    place: "GDG on Campus CIT-U",
    description: "Helped manage budgets, expenses, and financial activities for the organization.",
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        {items.map((i) => (
          <TimelineItem
            key={i.title}
            period={i.period}
            title={i.title}
            place={i.place}
            description={i.description}
          />
        ))}
      </ol>
    </section>
  );
}

export default ExperienceSection;