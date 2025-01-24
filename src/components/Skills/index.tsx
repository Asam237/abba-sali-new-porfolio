import { useRef } from "react";
import { ParagraphBody, TitleSection } from "../Common";
import cn from "clsx";
import SlideUp from "@/Animations/SlideUp";

interface SkillsProps extends React.HTMLAttributes<HTMLElement> {}

const skrills: string[] = [
  "— JavaScript",
  "— TypeScript",
  "— React / React Native",
  "— Express.js",
  "— Docker",
  "— REST API",
  "— MongoDB",
  "— PostgreSQL",
  "— Linux / Windows",
  "— Microsoft 365",
  "— Power BI",
  "— Git / GitHub",
  "— Open source",
];

const Skills = ({ className, ...props }: SkillsProps) => {
  return (
    <SlideUp className={cn("relative", className)} id="skrills">
      <section {...props}>
        <TitleSection title="skrills" />
        <div className="mt-[40px]">
          {skrills.map((item, index) => (
            <ParagraphBody key={index}>{item}</ParagraphBody>
          ))}
        </div>
      </section>
    </SlideUp>
  );
};

export default Skills;
