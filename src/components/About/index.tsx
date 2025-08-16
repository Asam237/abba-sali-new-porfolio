import { SkylarSansBoldUiDisplay } from "@/lib/fonts";
import { ParagraphBody, TitleSection } from "../Common";
import cn from "clsx";
import SlideUp from "@/Animations/SlideUp";
import { motion } from "framer-motion";

interface AboutProps extends React.HTMLAttributes<HTMLElement> {}

const About = ({ className, ...props }: AboutProps) => {
  return (
    <section id="about" className={`py-20 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <SlideUp delay={0.2}>
          <TitleSection title="About Me" />
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Hi, I&apos;m Abba Sali 👋
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A passionate Software Developer & UI/UX Designer focused on
                developing software for people. I love creating digital
                experiences that make a difference.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I enjoy architecting software and developing elegant solutions
                to complex problems. My goal is to build applications that are
                not only functional but also beautiful and user-friendly.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p
                  className={cn(
                    SkylarSansBoldUiDisplay.variable,
                    SkylarSansBoldUiDisplay.className,
                    "text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-6"
                  )}
                >
                  &quot;A problem without a solution is a poorly stated
                  problem.&quot;
                </p>
                <cite className="text-gray-500 font-medium">
                  — Albert Einstein
                </cite>
              </motion.blockquote>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default About;