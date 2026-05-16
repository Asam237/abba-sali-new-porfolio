import { TitleSection } from "../Common";
import SlideUp from "@/Animations/SlideUp";
import { useState } from "react";
import { NunitoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

interface ExperienceProps extends React.HTMLAttributes<HTMLElement> {}

type ExperienceType = {
  id: string;
  company: string;
  title: string;
  period: string;
  items: string[];
};

const experiences: ExperienceType[] = [
  {
    id: "oim",
    company: "IOM — UN Migration",
    title: "Medical Assistant - Data Processing",
    period: "Nov 2025 - Present",
    items: [
      "Register migrants in IOM database",
      "Maintain daily health assessment statistics and update records",
      "Contribute to the management of customer satisfaction assessments",
    ],
  },
  {
    id: "oim",
    company: "IOM — UN Migration",
    title: "Data Processing Consultant",
    period: "May 2024 - Oct 2025",
    items: [
      "Register migrants in IOM database",
      "Contribute to the management of customer satisfaction assessments",
    ],
  },
  {
    id: "oss",
    company: "OSS Cameroon",
    title: "Software Engineer & Technical Support",
    period: "September 2021 - Present",
    items: [
      "Frontend development with React and Vue.js",
      "Implementation of Continuous Deployment (CI/CD)",
      "Technical support and system maintenance",
    ],
  },
  {
    id: "regtrack",
    company: "Reg Track",
    title: "Frontend Engineer",
    period: "March 2024 - May 2024",
    items: [
      "Frontend development with Next.js",
      "Technical support and user assistance",
    ],
  },
  {
    id: "digitrade",
    company: "Digitrade",
    title: "Software Engineer",
    period: "August 2022 - January 2023",
    items: [
      "Frontend development with React.js",
      "Backend development with Express.js",
      "Mobile development with Flutter",
    ],
  },
  {
    id: "lagence",
    company: "L'Agence Digital",
    title: "Software Engineer",
    period: "March 2022 - July 2022 & February 2023 - November 2023",
    items: [
      "Frontend development with React.js and Vue.js",
      "Backend development with Express.js",
      "Mobile development with Flutter",
      "Implementation of CI/CD pipelines",
      "Project management and team coordination",
    ],
  },
];

const Experience = ({ className, ...props }: ExperienceProps) => {
  const [expandedId, setExpandedId] = useState<string | null>("oim");

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experiences" className={`py-20 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <SlideUp delay={0.2}>
          <TitleSection title="Work Experience" />
          <div className="space-y-4">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="overflow-hidden bg-white border border-gray-200 rounded-2xl transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleExpanded(experience.id)}
                  className="flex items-center justify-between w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900">
                          {experience.title}
                        </h3>
                        <p className="font-medium text-blue-600">
                          {experience.company}
                        </p>
                      </div>
                      <p className="mt-2 text-sm text-gray-500 md:mt-0">
                        {experience.period}
                      </p>
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandedId === experience.id ? (
                      <FaChevronUp className="text-gray-400" />
                    ) : (
                      <FaChevronDown className="text-gray-400" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {expandedId === experience.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-gray-100">
                          <ul className="space-y-2">
                            {experience.items.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start text-gray-600"
                              >
                                <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
                                <span className="text-sm leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default Experience;
