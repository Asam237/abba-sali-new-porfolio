import SlideUp from "@/Animations/SlideUp";
import { SkylarSansBoldUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const fontClass = cn(
    SkylarSansBoldUiDisplay.variable,
    SkylarSansBoldUiDisplay.className,
  );

  return (
    <header
      id="/"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-5xl mx-auto">
        <SlideUp className="text-center" delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm sm:text-base font-medium text-gray-400 tracking-[0.25em] uppercase mb-3">
              Hello, I&apos;m
            </p>
            <div className="relative inline-block mb-4">
              <h1
                className={`${fontClass} text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-gray-900 leading-[0.9] tracking-tight`}
              >
                Abba Sali
              </h1>
              <motion.div
                className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                style={{ width: "100%" }}
              />
            </div>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-indigo-300" />
              <h2
                className={`${fontClass} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 bg-clip-text text-transparent`}
              >
                Software Engineer
              </h2>
              <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-pink-300" />
            </div>
            <p className="text-base sm:text-lg text-gray-500 max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-light px-2">
              Passionate about creating{" "}
              <span className="text-gray-700 font-medium">
                elegant solutions
              </span>{" "}
              to complex problems. I love architecting software and developing{" "}
              <span className="text-gray-700 font-medium">
                beautiful user experiences
              </span>
              .
            </p>
          </motion.div>
        </SlideUp>
        <SlideUp delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 mt-12">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/in/abba-sali-aboubakar-mamate/"
                target="_blank"
                aria-label="LinkedIn"
                className="group relative p-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaLinkedin
                  size={20}
                  className="text-blue-600 group-hover:scale-110 transition-transform duration-200"
                />
              </Link>
              <Link
                href="https://github.com/Asam237"
                target="_blank"
                aria-label="GitHub"
                className="group relative p-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaGithub
                  size={20}
                  className="text-gray-800 group-hover:scale-110 transition-transform duration-200"
                />
              </Link>
              <Link
                href="https://wa.me/+237691846922?text=Hello!"
                target="_blank"
                aria-label="WhatsApp"
                className="group relative p-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FaWhatsapp
                  size={20}
                  className="text-green-600 group-hover:scale-110 transition-transform duration-200"
                />
              </Link>
            </div>
            <div className="hidden sm:block h-6 w-px bg-gray-200" />
            <Link
              href="https://drive.google.com/file/d/1jE2OxQ3iS7VrT1h9ayXzymqUx4EptgIb/view"
              target="_blank"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold tracking-wide shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <FaDownload size={14} className="group-hover:animate-bounce" />
              <span>Download CV</span>
            </Link>
          </div>
        </SlideUp>
        <SlideUp delay={0.6}>
          <motion.div
            className="flex justify-center mt-16 sm:mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex flex-col items-center gap-1.5 text-gray-300">
              <span className="text-[10px] tracking-[0.2em] uppercase font-medium">
                Scroll
              </span>
              <motion.div
                className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent"
                animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.4, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                style={{ originY: 0 }}
              />
            </div>
          </motion.div>
        </SlideUp>
      </div>
    </header>
  );
};

export default Header;
