import { ParagraphBody, TitleSection } from "../Common";

interface SkillsProps extends React.HTMLAttributes<HTMLElement> {}

const skrills: string[] = [
  "— JavaScript",
  "— TypeScript",
  "— React / React Native",
  "— Express.js",
  "— Docker",
  "— Nest.js",
  "— REST API",
  "— MongoDB",
  "— PostgreSQL",
  "— Linux",
  "— Git / GitHub",
  "— Open source",
];

const Skills = ({ className, ...props }: SkillsProps) => {
  return (
    <section {...props} className={className}>
      <TitleSection title="skrills" />
      <div className="mt-[40px]">
        {skrills.map((item, index) => (
          <ParagraphBody key={index}>{item}</ParagraphBody>
        ))}
      </div>
    </section>
  );
};

export default Skills;
