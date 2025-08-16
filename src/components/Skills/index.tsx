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
import { NunitoUiDisplay } from "@/lib/fonts";
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
    title: "Web development",
    items: [
      {
        icon: <FaJs size={24} className="bg-[#999999]" />,
        skill: "JavaScript",
      },
      {
        icon: (
          <Image
            width={22}
            height={22}
            src={TypeScript}
            alt="picture"
            className="bg-[#999999]"
          />
        ),
        skill: "TypeScript",
      },
      {
        icon: <AiOutlineJavaScript size={24} className="bg-[#999999]" />,
        skill: "Next.js",
      },
      {
        icon: <FaReact size={24} className="bg-[#999999]" />,
        skill: "React.js",
      },
      {
        icon: <FaCode size={24} className="bg-[#999999]" />,
        skill: "Express.js",
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        icon: <FaDatabase size={22} className="bg-[#999999]" />,
        skill: "MongoDB",
      },
      {
        icon: (
          <Image
            width={24}
            height={24}
            src={Postgres}
            alt="picture"
            className="bg-[#999999]"
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
        icon: <FaChartLine size={24} className="bg-[#999999]" />,
        skill: "Power BI",
      },
      {
        icon: <FaNetworkWired size={24} className="bg-[#999999]" />,
        skill: "REST API",
      },
    ],
  },
  {
    title: "Tools and Environments",
    items: [
      {
        icon: <FaDocker size={24} className="bg-[#999999]" />,
        skill: "Docker",
      },
      {
        icon: <FaLinux size={24} className="bg-[#999999]" />,
        skill: "Linux",
      },
      {
        icon: <FaWindows size={22} className="bg-[#999999]" />,
        skill: "Windows",
      },
      {
        icon: (
          <Image
            width={22}
            height={22}
            src={Office}
            alt="picture"
            className="bg-[#999999]"
          />
        ),
        skill: "Microsoft 365",
      },
    ],
  },
  {
    title: "Code management",
    items: [
      {
        icon: <FaGit size={24} className="bg-[#999999]" />,
        skill: "Git",
      },
      {
        icon: <FaGithub size={24} className="bg-[#999999]" />,
        skill: "GitHub",
      },
      {
        icon: <FaCodeBranch size={24} className="bg-[#999999]" />,
        skill: "Open source",
      },
    ],
  },
];

const Skills = ({ className, ...props }: SkillsProps) => {
  return (
    <SlideUp className={cn("relative", className)} id="skills" delay={0.3}>
      <section {...props} className="glass-effect rounded-3xl p-8 lg:p-12 my-16">
        <TitleSection title="skills" />
        <div className="mt-[40px]">
          {skills.map((item, index) => (
            <div key={index} className="mt-6 first:mt-0">
              <h4
                className={`${cn(
                  NunitoUiDisplay.variable,
                  NunitoUiDisplay.className
                )} text-white text-[13px] font-[600] uppercase tracking-[15%] mb-3`}
              >
                {item.title}
              </h4>
              <div className="flex gap-2 flex-wrap">
                {item.items.map((i, ii) => (
                  <SkillCard key={ii} icon={i.icon}>
                    {i.skill}
                  </SkillCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SlideUp>
  );
};

export default Skills;
