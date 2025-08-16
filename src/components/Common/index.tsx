import { NunitoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import Link from "next/link";
import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightSquare } from "react-icons/bs";
import Image from "next/image";

type TitleSectionProps = {
  title: string;
};

type CardProps = {
  title: string;
  description: string;
  link: string;
  github: string;
  skills: string[];
  picture: any;
};

interface ParagraphBodyProps extends React.HTMLAttributes<HTMLDListElement> {
  children: ReactNode;
}

interface SkillsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  icon: ReactNode;
}

export const TitleSection = ({ title }: TitleSectionProps) => {
  return (
    <div className="xl:h-[66px] relative">
      <h4
        className={`${cn(
          NunitoUiDisplay.variable,
          NunitoUiDisplay.className
        )} py-6 text-white text-[13px] font-[600] uppercase tracking-[15%] border-b-[0.75px] border-white/30 relative`}
      >
        {title}
        <div className="absolute bottom-0 left-0 w-16 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500"></div>
      </h4>
    </div>
  );
};

export const RoundText = ({ children, className }: ParagraphBodyProps) => {
  return (
    <span className={className}>
      <ParagraphContent className="rounded-full border px-3 py-1 border-white/30 text-white/80 my-0.5 hover:bg-white/20 hover:text-white transition-all duration-300 text-xs">
        {children}
      </ParagraphContent>
    </span>
  );
};

export const ParagraphBody = ({ children, className }: ParagraphBodyProps) => {
  return (
    <p
      className={`${cn(
        NunitoUiDisplay.variable,
        NunitoUiDisplay.className
      )} text-white text-[14px] sm:text-[20px] lg:text-[32px] tracking-[1%] lg:leading-[44.8px] font-[500] ${className}`}
    >
      {children}
    </p>
  );
};

export const ParagraphContent = ({
  children,
  className,
}: ParagraphBodyProps) => {
  return (
    <p
      className={`${cn(
        NunitoUiDisplay.variable,
        NunitoUiDisplay.className
      )} text-white/70 text-[12px] lg:text-[14px] tracking-[1%] font-[500] ${className}`}
    >
      {children}
    </p>
  );
};

export const ProjectCard = ({
  description,
  title,
  link,
  github,
  skills,
  picture,
}: CardProps) => {
  return (
    <div className="card-hover glass-effect rounded-2xl p-4 group">
      <div className="rounded-xl overflow-hidden relative">
        <Link href={link !== github ? link : github} className="relative group">
          <Image
            src={picture}
            alt="picture"
            className="object-cover rounded-xl h-[200px] w-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        </Link>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <h4
          className={`${cn(
            NunitoUiDisplay.variable,
            NunitoUiDisplay.className
          )} font-[600] text-white text-[14px] lg:text-[16px] tracking-[1%]`}
        >
          {title}
        </h4>
        <div className="flex space-x-3">
          <Link
            href={github}
            className="p-2 glass-effect rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/20"
          >
            <FaGithub
              size={18}
              className="text-white"
            />
          </Link>
          <Link
            href={link}
            className={`p-2 glass-effect rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/20 ${
              link === github ? "hidden" : "flex"
            }`}
          >
            <BsArrowUpRightSquare
              size={18}
              className="text-white"
            />
          </Link>
        </div>
      </div>
      
      <ParagraphContent className="text-white/80 mt-2">
        {description}
      </ParagraphContent>
      
      <div className="mt-2 flex gap-1 flex-wrap">
        {skills.map((item, index) => (
          <RoundText key={index}>{item}</RoundText>
        ))}
      </div>
    </div>
  );
};

export const SkillCard = ({ icon, children }: SkillsProps) => (
  <div className="card-hover">
    <p
      className={`${cn(
        NunitoUiDisplay.variable,
        NunitoUiDisplay.className
      )} text-[13px] sm:text-[14px] lg:text-[16px] tracking-[1%] font-[500] rounded-xl glass-effect border border-white/20 text-white py-2 px-4 flex items-center max-w-fit transition-all duration-300 hover:bg-white/20`}
    >
      <span className="mr-2 text-white">{icon}</span> {children}
    </p>
  </div>
);
