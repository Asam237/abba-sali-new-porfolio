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

export const RoundText = ({ children, className }: ParagraphBodyProps) => {
  return (
    <span className={className}>
      <ParagraphContent className="rounded-full border px-2 border-gray-700 text-gray-700 my-0.5 hover:bg-gray-700 hover:text-white">
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
  skills,
  picture,
}: CardProps) => {
  return (
    <div>
      <div className="border-[1.5px] border-[#8b928f] rounded-md p-2">
        <Link href={link !== github ? link : github} className="relative group">
          <Image
            src={picture}
            alt="picture"
            className="object-cover rounded-md h-[200px] hover:transition-transform hover:transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <h4
          className={`${cn(
            NunitoUiDisplay.variable,
            NunitoUiDisplay.className
          )} font-[600] text-[#181F1C] text-[14px] lg:text-[16px] tracking-[1%] mt-4`}
        >
          {title}
        </h4>
        <div className="flex space-x-2">
          <Link
            href={github}
            className="flex justify-center space-x-1.5 items-center"
          >
            <FaGithub
              size={16}
              className="hover:transition-transform hover:transform hover:scale-110"
            />
          </Link>
          <Link
            href={link}
            className={`flex justify-center items-center space-x-1.5 ${
              link === github ? "hidden" : "flex"
            }`}
          >
            <BsArrowUpRightSquare
              size={16}
              className="hover:transition-transform hover:transform hover:scale-110"
            />
          </Link>
        </div>
      </div>
      <ParagraphContent className="text-gray-700">
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
