import { TitleSection } from "../Common";
import SlideUp from "@/Animations/SlideUp";
import { useState } from "react";
import { NunitoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import Arrow from "../../../public/pictures/arrow.png";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

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
      <section className={`${className} glass-effect rounded-3xl p-8 lg:p-12 my-16`}>
        <TitleSection title="Experience" />
        <div className="mt-[40px]">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/6">
              {experiences.map((item) => (
                <div key={item.id} className="mb-2">
                  <div>
                    <p
                      className={`cursor-pointer px-4 py-3 font-bold flex justify-between items-center rounded-xl transition-all duration-300
                      ${cn(NunitoUiDisplay.variable, NunitoUiDisplay.className)}
                      ${
                        activeId === item.id
                          ? "bg-white/20 text-white md:rounded-tr-none md:rounded-br-none"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                      onClick={() => setActiveId(item.id)}
                    >
                      {item.experience}
                      <span className="flex md:hidden">
                        {activeId === item.id ? (
                          <Image
                            src={Arrow}
                            alt="picture"
                            className="opacity-80"
                            width={20}
                            height={20}
                          />
                        ) : (
                          <FaPlus className="text-white/70" size={12} />
                        )}
                      </span>
                    </p>
                  </div>
                  {/* Contenu affiché en mode mobile uniquement */}
                  <AnimatePresence>
                    {activeId === item.id && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col space-y-3 p-4 glass-effect rounded-xl md:hidden my-2"
                      >
                        <p
                          className={`${cn(
                            NunitoUiDisplay.className,
                            NunitoUiDisplay.variable
                          )} font-bold text-lg text-white`}
                        >
                          {item.title}
                        </p>
                        <p
                          className={`
                    ${cn(NunitoUiDisplay.className, NunitoUiDisplay.variable)}
                      text-xs font-semibold text-white/80`}
                        >
                          {item.period}
                        </p>
                        <div className="flex flex-col space-y-1">
                          {item.items.map((item, index) => (
                            <p
                              key={index}
                              className={`
                    ${cn(NunitoUiDisplay.className, NunitoUiDisplay.variable)}
                      text-sm font-normal text-white/70`}
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                      // end mobile
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <div
              className={`
                ${
                  activeId !== "lagence"
                    ? "md:rounded-bl-2xl"
                    : "md:rounded-bl-none"
                } 
                ${
                  activeId !== "oim" ? "md:rounded-tl-xl" : "md:rounded-tl-none"
                } 
              hidden md:flex flex-col md:w-4/6 p-6 glass-effect rounded-2xl md:rounded-tl-none md:rounded-bl-none`}
            >
              {experiences
                .filter((item) => item.id === activeId)
                .map((item) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    key={item.id}
                    className="flex flex-col space-y-4"
                  >
                    <p
                      className={`${cn(
                        NunitoUiDisplay.className,
                        NunitoUiDisplay.variable
                      )} font-bold text-xl text-white`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`
                    ${cn(NunitoUiDisplay.className, NunitoUiDisplay.variable)}
                      text-sm font-semibold text-white/80`}
                    >
                      {item.period}
                    </p>
                    <div className="flex flex-col space-y-2">
                      {item.items.map((item, index) => (
                        <p
                          key={index}
                          className={`
                    ${cn(NunitoUiDisplay.className, NunitoUiDisplay.variable)}
                      text-sm font-normal text-white/80`}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </SlideUp>
  );
};

export default Experiences;
