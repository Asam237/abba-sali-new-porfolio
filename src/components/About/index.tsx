import { SkylarSansBoldUiDisplay } from "@/lib/fonts";
import { ParagraphBody, TitleSection } from "../Common";
import QuotePic from "../../../public/pictures/quotes.png";
import cn from "clsx";
import Image from "next/image";
import SlideUp from "@/Animations/SlideUp";
import { motion } from "framer-motion";

interface AboutProps extends React.HTMLAttributes<HTMLElement> {}

const About = ({ className, ...props }: AboutProps) => {
  return (
    <section id="about" className="glass-effect rounded-3xl p-8 lg:p-12 my-16">
      <SlideUp delay={0.3}>
        <TitleSection title="About" />
        <div className="my-4 sm:my-5 lg:my-7 xl:my-10 gap-2 xl:gap-10 pb-2 xl:pb-10 relative">
          <div className="pt-2 sm:pt-5 lg:pt-7 xl:pt-10">
            <ParagraphBody className="text-white/90">
              Hi, I&apos;m Abba Sali. <br />
              A Software developer & UI/UX designer focused <br />
              on developing software for people.
            </ParagraphBody>
          </div>
          <div className="pt-10">
            <ParagraphBody className="text-white/80">
              I love architecting software and developing elegant
              <br />
              solutions to complex problems.
            </ParagraphBody>
          </div>
        </div>
      </SlideUp>
      
      <SlideUp delay={0.2}>
        <div className="pt-2 sm:pt-4 lg:pt-5 xl:pt-10">
          <div className="hidden 2xl:flex relative floating-animation">
            <div className="absolute top-[100px] 2xl:left-[-120px]">
              <Image
                alt="Quote illustration"
                src={QuotePic}
                width={114}
                height={80}
                className="opacity-80"
              />
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4
              className={cn(
                SkylarSansBoldUiDisplay.variable,
                SkylarSansBoldUiDisplay.className,
                "text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[64px] font-[300] leading-[36px] sm:leading-[40px] lg:leading-[50px] xl:leading-[70.4px] text-white mt-7 sm:pt-10 lg:pt-16 xl:mt-32 text-shadow"
              )}
            >
              A problem without a <br />
              solution is a poorly stated <br />
              problem.
            </h4>
          </motion.div>
          
          <ParagraphBody className="pt-2 sm:pt-5 lg:pt-7 xl:pt-10 text-[14px] sm:text-[20px] xl:text-[24px] text-white/70 leading-[20px] lg:leading-[36px] font-[400]">
            Albert Einstein 🤓
          </ParagraphBody>
        </div>
      </SlideUp>
    </section>
  );
};

export default About;
