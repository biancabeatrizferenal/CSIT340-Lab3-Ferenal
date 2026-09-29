import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

const links = [
  { label: "Email", href: "mailto:biancabeatriz.ferenal@gmail.com", text: "biancabeatriz.ferenal@gmail.com" },
  { label: "GitHub", href: "https://github.com/biancabeatrizferenal", text: "github.com/biancabeatrizferenal" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/biancabeatrizferenal", text: "linkedin.com/in/biancabeatrizferenal" },
];

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        {links.map((l) => (
          <ContactLink key={l.label} label={l.label} href={l.href} text={l.text} />
        ))}
      </ul>
    </section>
  );
}

export default ContactSection;