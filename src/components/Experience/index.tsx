import { useRef } from "react";
import { ParagraphBody, ParagraphContent, TitleSection } from "../Common";
import { useInView } from "framer-motion";
import { bodyAnimation } from "@/utils/anims";
import { motion } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="hidden"
      variants={bodyAnimation}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      id="experiences"
      ref={ref}
    >
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
    </motion.div>
  );
};

export default Experiences;
