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
      <section className="glass-effect rounded-3xl p-8 lg:p-12 my-16">
        <TitleSection title="Projects" />
        <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
        
        <div className="section-divider"></div>
        
        <div className="flex items-center justify-center mt-8">
          <Link
            href={"https://github.com/Asam237"}
            className="inline-flex items-center space-x-3 px-6 py-3 glass-effect rounded-full text-white font-semibold transition-all duration-300 hover:bg-white/20 hover:scale-105 group"
          >
            <span className="text-[16px]">
              View All Projects
            </span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </SlideUp>
  );
};

export default Project;
