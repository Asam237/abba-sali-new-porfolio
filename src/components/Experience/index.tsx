import { ParagraphBody, ParagraphContent, TitleSection } from "../Common";

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
    <section {...props} className={className} id="experiences">
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
  );
};

export default Experiences;
