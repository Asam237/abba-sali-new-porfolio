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
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
    </div>
  );
};

export const RoundText = ({ children, className }: ParagraphBodyProps) => {
  return (
    <span className={`inline-block ${className}`}>
      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
        {children}
      </span>
    </span>
  );
};

export const ParagraphBody = ({ children, className }: ParagraphBodyProps) => {
  return (
    <p
      className={`${cn(
        NunitoUiDisplay.variable,
        NunitoUiDisplay.className
      )} text-gray-600 text-lg leading-relaxed ${className}`}
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
      )} text-gray-500 text-sm leading-relaxed ${className}`}
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
    <div className="card-simple rounded-2xl p-6 group">
      <div className="rounded-xl overflow-hidden mb-6 relative">
        <Link
          href={link !== github ? link : github}
          className="block relative group"
        >
          <Image
            src={picture}
            alt={title}
            className="object-cover rounded-xl h-48 w-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        </Link>
      </div>
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
        <div className="flex space-x-2">
          <Link
            href={github}
            className="p-2 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-110"
          >
            <FaGithub size={16} className="text-gray-600" />
          </Link>
          {link !== github && (
            <Link
              href={link}
              className="p-2 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:scale-110"
            >
              <BsArrowUpRightSquare size={16} className="text-gray-600" />
            </Link>
          )}
        </div>
      </div>
      <ParagraphContent className="text-gray-600 mb-4">
        {description}
      </ParagraphContent>
      <div className="flex gap-2 flex-wrap">
        {skills.map((item, index) => (
          <RoundText key={index}>{item}</RoundText>
        ))}
      </div>
    </div>
  );
};

export const SkillCard = ({ icon, children }: SkillsProps) => (
  <div className="inline-block">
    <div className="flex items-center px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300">
      <span className="mr-2 text-gray-600">{icon}</span>
      <span className="text-gray-700 font-medium text-sm">{children}</span>
    </div>
  </div>
);