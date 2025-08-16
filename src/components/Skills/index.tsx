import { ReactNode } from "react";
import { SkillCard, TitleSection } from "../Common";
import cn from "clsx";
import SlideUp from "@/Animations/SlideUp";
import {
  FaChartLine,
  FaCode,
  FaCodeBranch,
  FaDatabase,
  FaDocker,
  FaGit,
  FaGithub,
  FaJs,
  FaLinux,
  FaNetworkWired,
  FaReact,
  FaWindows,
} from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import Postgres from "../../../public/pictures/postgres.png";
import TypeScript from "../../../public/pictures/typescript.png";
import Office from "../../../public/pictures/office.png";
import Image from "next/image";

interface SkillsProps extends React.HTMLAttributes<HTMLElement> {}

type SkillsType = {
  icon: ReactNode;
  skill: string;
};

type SkilInput = {
  title: string;
  items: SkillsType[];
};

const skills: SkilInput[] = [
  {
    title: "Web Development",
    items: [
      {
        icon: <FaJs size={20} className="text-yellow-500" />,
        skill: "JavaScript",
      },
      {
        icon: (
          <Image
            width={20}
            height={20}
            src={TypeScript}
            alt="TypeScript"
          />
        ),
        skill: "TypeScript",
      },
      {
        icon: <AiOutlineJavaScript size={20} className="text-black" />,
        skill: "Next.js",
      },
      {
        icon: <FaReact size={20} className="text-blue-500" />,
        skill: "React.js",
      },
      {
        icon: <FaCode size={20} className="text-green-600" />,
        skill: "Express.js",
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        icon: <FaDatabase size={20} className="text-green-600" />,
        skill: "MongoDB",
      },
      {
        icon: (
          <Image
            width={20}
            height={20}
            src={Postgres}
            alt="PostgreSQL"
          />
        ),
        skill: "PostgreSQL",
      },
    ],
  },
  {
    title: "Data Analysis",
    items: [
      {
        icon: <FaChartLine size={20} className="text-yellow-600" />,
        skill: "Power BI",
      },
      {
        icon: <FaNetworkWired size={20} className="text-blue-600" />,
        skill: "REST API",
      },
    ],
  },
  {
    title: "Tools & Environments",
    items: [
      {
        icon: <FaDocker size={20} className="text-blue-500" />,
        skill: "Docker",
      },
      {
        icon: <FaLinux size={20} className="text-gray-800" />,
        skill: "Linux",
      },
      {
        icon: <FaWindows size={20} className="text-blue-600" />,
        skill: "Windows",
      },
      {
        icon: (
          <Image
            width={20}
            height={20}
            src={Office}
            alt="Microsoft 365"
          />
        ),
        skill: "Microsoft 365",
      },
    ],
  },
  {
    title: "Version Control",
    items: [
      {
        icon: <FaGit size={20} className="text-orange-600" />,
        skill: "Git",
      },
      {
        icon: <FaGithub size={20} className="text-gray-800" />,
        skill: "GitHub",
      },
      {
        icon: <FaCodeBranch size={20} className="text-purple-600" />,
        skill: "Open Source",
      },
    ],
  },
];

const Skills = ({ className, ...props }: SkillsProps) => {
  return (
    <section id="skills" className={`py-20 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <SlideUp delay={0.2}>
          <TitleSection title="Skills & Technologies" />
          
          <div className="space-y-12">
            {skills.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {category.title}
                </h3>
                <div className="flex gap-3 flex-wrap">
                  {category.items.map((item, itemIndex) => (
                    <SkillCard key={itemIndex} icon={item.icon}>
                      {item.skill}
                    </SkillCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default Skills;