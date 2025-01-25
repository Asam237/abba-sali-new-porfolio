import { NunitoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import Link from "next/link";
import { ReactNode } from "react";
import { FaArrowRight, FaGithub, FaLink } from "react-icons/fa";

type TitleSectionProps = {
  title: string;
};

type CardProps = {
  title: string;
  description: string;
  link: string;
  github: string;
};

interface ParagraphBodyProps extends React.HTMLAttributes<HTMLDListElement> {
  children: ReactNode;
}

export const TitleSection = ({ title }: TitleSectionProps) => {
  return (
    <div className="xl:h-[66px]">
      <h4
        className={`${cn(
          NunitoUiDisplay.variable,
          NunitoUiDisplay.className
        )} py-6 text-[#181F1C] text-[13px] font-[600] uppercase tracking-[15%] border-b-[0.75px] border-[#A0A6A4]`}
      >
        {title}
      </h4>
    </div>
  );
};

export const ParagraphBody = ({ children, className }: ParagraphBodyProps) => {
  return (
    <p
      className={`${cn(
        NunitoUiDisplay.variable,
        NunitoUiDisplay.className
      )} text-[#181F1C] text-[14px] sm:text-[20px] lg:text-[32px] tracking-[1%] lg:leading-[44.8px] font-[500] ${className}`}
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
      )} text-[#696D6B] text-[12px] lg:text-[14px] tracking-[1%] font-[500] ${className}`}
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
}: CardProps) => {
  return (
    <div className="border-[1.5px] border-[#8b928f] rounded-3xl p-4 transition-transform transform hover:scale-105">
      <ParagraphBody>{title}</ParagraphBody>
      <ParagraphContent className="text-gray-700">
        {description}
      </ParagraphContent>
      <div className="flex items-center mt-4 space-x-4">
        <Link
          href={github}
          className="flex justify-center space-x-1.5 items-center"
        >
          <FaGithub size={14} />
          <ParagraphContent className="text-gray-700 font-[600] relative group">
            Github
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#181F1C] transition-all duration-300 group-hover:w-full"></span>
          </ParagraphContent>
        </Link>
        <Link
          href={link}
          className={`flex justify-center items-center space-x-1.5 ${
            link === github ? "hidden" : "flex"
          }`}
        >
          <FaLink size={14} />
          <ParagraphContent className="text-gray-700 font-[600] relative group">
            access the site
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#181F1C] transition-all duration-300 group-hover:w-full"></span>
          </ParagraphContent>
        </Link>
      </div>
    </div>
  );
};
