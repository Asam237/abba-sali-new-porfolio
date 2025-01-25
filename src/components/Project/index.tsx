import cn from "clsx";
import { ParagraphBody, ProjectCard, TitleSection } from "../Common";
import Link from "next/link";
import { NunitoUiDisplay } from "@/lib/fonts";
import { FaArrowRight } from "react-icons/fa";
import SlideUp from "@/Animations/SlideUp";
import Project1 from "../../../public/pictures/p1.webp";
import Project2 from "../../../public/pictures/p2.webp";
import Project3 from "../../../public/pictures/p3.webp";

const datas = [
  {
    title: "Prayer Connect",
    description: "Web application dedicated to Islamic prayer times",
    link: "https://prayer-times.abbasali.cm",
    github: "https://github.com/Asam237/prayer-times",
    skills: ["JavaScript", "REST API", "Github", "Open source"],
    picture: Project1,
  },
  {
    title: "Tempo Tracker",
    description: "Weather app with OpenWeatherMap API and maps.",
    link: "https://tempo-tracker.abbasali.cm/",
    github: "https://github.com/Asam237/tempo-tracker",
    skills: ["Next.js", "REST API", "Github", "Open source"],
    picture: Project2,
  },
  {
    title: "E-Commerce API",
    description: "Minimal Node.js e-commerce starter with TypeScript setup.",
    link: "https://github.com/Asam237/e-commerce-api",
    github: "https://github.com/Asam237/e-commerce-api",
    skills: ["Express.js", "MongoDB", "Docker", "REST API", "Open source"],
    picture: Project3,
  },
];

interface ProjectProps extends React.HTMLAttributes<HTMLElement> {}

const Project = ({ className }: ProjectProps) => {
  return (
    <SlideUp className={cn("relative", className)} id="projects" delay={0.3}>
      <section>
        <TitleSection title="Projects" />
        <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-4 gap-y-4 md:gap-y-0 md:gap-x-4">
          {datas.map((item, index) => (
            <ProjectCard
              key={index}
              link={item.link}
              title={item.title}
              github={item.github}
              description={item.description}
              skills={item.skills}
              picture={item.picture}
            />
          ))}
        </div>
        <div className="flex items-center space-x-2 mt-[10px] sm:mt-[15px] lg:mt-[18px] px-2">
          <Link
            href={"https://github.com/Asam237"}
            className="flex items-center space-x-2 transition-transform transform hover:scale-110"
          >
            <ParagraphBody
              className={`${cn(
                NunitoUiDisplay.variable,
                NunitoUiDisplay.className
              )} text-[#181F1C] text-[12px] sm:text-[13px] lg:text-[18px] tracking-[1%] lg:leading-[44.8px] font-[500] relative group`}
            >
              View All Projects
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#181F1C] transition-all duration-300 group-hover:w-full"></span>
            </ParagraphBody>
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </SlideUp>
  );
};

export default Project;
