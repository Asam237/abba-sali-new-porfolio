import cn from "clsx";
import { ProjectCard, TitleSection } from "../Common";
import Link from "next/link";
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
    <section id="projects" className={`py-20 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <SlideUp delay={0.2}>
          <TitleSection title="Selected Projects" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
          
          <div className="text-center">
            <Link
              href="https://github.com/Asam237"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>View All Projects</span>
              <FaArrowRight size={16} />
            </Link>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default Project;