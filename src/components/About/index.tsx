import { SkylarSansBoldUiDisplay } from "@/lib/fonts";
import { ParagraphBody, TitleSection } from "../Common";
import QuotePic from "../../../public/pictures/quotes.png";
import cn from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";

interface AboutProps extends React.HTMLAttributes<HTMLElement> {}

const About = ({ className, ...props }: AboutProps) => {
  const bodyAnimation = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  };
  return (
    <div {...props} className={className} id="about">
      <motion.div
        variants={bodyAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <TitleSection title="About" />
        <div className="my-[10px] sm:my-[20px] lg:my-[30px] xl:my-[40px] gap-[10px] xl:gap-[40px] pb-[10px] xl:pb-[40px]">
          <div className="pt-[10px] sm:pt-[20px] lg:pt-[30px] xl:pt-[40px]">
            <ParagraphBody>
              Hi, I&apos;m Abba Sali. <br />
              A Software developer & UI/UX designer focused <br />
              on developing software for people.
            </ParagraphBody>
          </div>
          <div className="pt-[40px]">
            <ParagraphBody>
              I love architecting software and developing elegant
              <br />
              solutions to complex problems
            </ParagraphBody>
          </div>
          <div className="pt-[10px] sm:pt-[16px] lg:pt-[20px] xl:pt-[40px]">
            <div className="hidden xl:flex relative">
              <div className="absolute top-[100px] left-[-150px]">
                <Image
                  alt="pic"
                  src={QuotePic}
                  className="h-[79.6px] w-[113.72px]"
                />
              </div>
            </div>
            <h4
              className={`${cn(
                SkylarSansBoldUiDisplay.variable,
                SkylarSansBoldUiDisplay.className
              )} text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[64px] font-[300] leading-[36px] sm:leading-[40px] lg:leading-[50px] xl:leading-[70.4px] text-[#181F1C] mt-[30px] sm:pt-[40px] lg:pt-[70px] xl:mt-[128px]`}
            >
              A problem without a<br />
              solution is a poorly stated
              <br />
              problem.
            </h4>
            <ParagraphBody className="pt-[10px] sm:pt-[20px] lg:pt-[30px] xl:pt-[40px] text-[14px] sm:text-[20px] xl:text-[24px] text-[#696D6B] leading-[20px] lg:leading-[36px] font-[400]">
              Albert Einstein 🤓
            </ParagraphBody>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
