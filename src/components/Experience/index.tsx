import { Box, Tabs, Text } from "@radix-ui/themes";
import { ParagraphContent, TitleSection } from "../Common";
import SlideUp from "@/Animations/SlideUp";
import { useState } from "react";
import { NunitoUiDisplay } from "@/lib/fonts";
import cn from "clsx";

interface SkillsProps extends React.HTMLAttributes<HTMLElement> {}

type ExperienceType = {
  id: string;
  experience: string;
  title: string;
  period: string;
  items: string[];
};

const experiences: ExperienceType[] = [
  {
    id: "oim",
    experience: "IOM — ONU MIGRATION",
    title: "Data Entry Consultant",
    period: "May 2024 - Present",
    items: [
      "▹ Register migrants in IOM database",
      "▹Maintain daily health assessment statistics and update records",
      "▹Contribute to the management of customer satisfaction assessments.",
    ],
  },
  {
    id: "oss",
    experience: "OSS CAMEROON",
    title: "Software Engineer and Technical Support",
    period: "September 2021 - Present: Software Engineer and Technical Support",
    items: [
      "▹Frontend developer (React, Vue)",
      "▹Implementation of Continuous Deployment (CI/CD)",
      "▹Technical Support",
    ],
  },
  {
    id: "regtrack",
    experience: "Reg Track",
    title: "Frontend Engineer",
    period: "March 2024 - May 2024: Frontend Engineer",
    items: ["▹Frontend engineer (Next.js)", "▹Technical Support"],
  },
  {
    id: "digitrade",
    experience: "DIGITRADE",
    title: "Software Engineer",
    period: "August 2022 - January 2023: Software Engineer",
    items: [
      "▹Frontend developer (React.js)",
      "▹Backend developer (Express.js)",
      "▹Mobile developer (Flutter)",
    ],
  },
  {
    id: "lagence",
    experience: "LAGENCE DIGITAL",
    title: "Software Engineer",
    period:
      "March 2022 - July 2022 & February 2023 - November 2023: Software Engineer",
    items: [
      "▹Frontend developer (React.js, Vue.js)",
      "▹Backend developer (Express.js)",
      "▹Mobile developer (Flutter)",
      "▹Implementation of Continuous Deployment (CI/CD)",
      "▹Project Management",
    ],
  },
];

const Experiences = ({ className, ...props }: SkillsProps) => {
  const [activeId, setActiveId] = useState("oim");

  return (
    <SlideUp id="experiences" delay={0.3} className="mt-[40px]">
      <section className={className}>
        <TitleSection title="Experience" />
        <div className="mt-[40px]">
          <div className="flex flex-col md:flex-row md:max-h-[232px]">
            <div className="md:w-2/6">
              {experiences.map((item) => (
                <div key={item.id} className="mb-2">
                  <p
                    className={`cursor-pointer px-4 py-2 font-bold
                      ${cn(NunitoUiDisplay.variable, NunitoUiDisplay.className)}
                      ${
                        activeId === item.id
                          ? "bg-[#686D6B] text-gray-300 rounded-xl md:rounded-tr-none md:rounded-br-none md:rounded-tl-xl md:rounded-bl-xl"
                          : ""
                      }`}
                    onClick={() => setActiveId(item.id)}
                  >
                    {item.experience}
                  </p>
                </div>
              ))}
            </div>
            <div className="md:w-4/6 p-4 bg-[#686D6B] rounded-xl md:rounded-tl-none md:rounded-bl-none md:rounded-tr-xl md:rounded-br-xl">
              {experiences
                .filter((item) => item.id === activeId)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col space-y-3 bg-[#686D6B]"
                  >
                    <p
                      className={`${cn(
                        NunitoUiDisplay.className,
                        NunitoUiDisplay.variable
                      )} font-bold text-lg bg-[#686D6B] text-gray-300`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`
                    ${cn(NunitoUiDisplay.className, NunitoUiDisplay.variable)}
                      text-xs font-semibold bg-[#686D6B] text-gray-300`}
                    >
                      {item.period}
                    </p>
                    <div className="flex flex-col space-y-1 bg-[#686D6B]">
                      {item.items.map((item, index) => (
                        <p
                          key={index}
                          className={`
                    ${cn(NunitoUiDisplay.className, NunitoUiDisplay.variable)}
                      text-sm font-normal bg-[#686D6B] text-gray-300`}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </SlideUp>
  );
};

export default Experiences;
