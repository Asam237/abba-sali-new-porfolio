import { NunitoUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import { ReactNode } from "react";

type TitleSectionProps = {
  title: string;
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
