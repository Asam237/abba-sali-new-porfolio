import { ParagraphBody, ParagraphContent, TitleSection } from "../Common";
import SlideUp from "@/Animations/SlideUp";

interface SkillsProps extends React.HTMLAttributes<HTMLElement> {}

type ExperienceType = {
  experience: string;
  period: string;
};

const experiences: ExperienceType[] = [
  {
    experience: "— OIM - ONU MIGRATION  ",
    period: "May 2024 - Present: Data Entry Consultant",
  },
  {
    experience: "— OSS CAMEROON",
    period: "September 2021 - Present: Software Engineer and Technical Support",
  },
  {
    experience: "— Reg Track",
    period: "March 2024 - May 2024: Frontend Engineer",
  },
  {
    experience: "— DIGITRADE",
    period: "August 2022 - January 2023: Software Engineer",
  },
  {
    experience: "— LAGENCE DIGITAL",
    period:
      "March 2022 - July 2022 & February 2023 - November 2023: Software Engineer",
  },
];

const Experiences = ({ className, ...props }: SkillsProps) => {
  return (
    <SlideUp id="experiences" delay={0.2}>
      <section {...props} className={className}>
        <TitleSection title="experience" />
        <div className="mt-[40px]">
          {experiences.map((item, index) => (
            <div key={index} className="mb-[10px]">
              <ParagraphBody>{item.experience}</ParagraphBody>
              <ParagraphContent>{item.period}</ParagraphContent>
            </div>
          ))}
        </div>
      </section>
    </SlideUp>
  );
};

export default Experiences;
