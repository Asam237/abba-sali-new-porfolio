import SlideUp from "@/Animations/SlideUp";
import { SkylarSansBoldUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const fontClass = cn(
    SkylarSansBoldUiDisplay.variable,
    SkylarSansBoldUiDisplay.className
  );

  return (
    <header id="/" className="relative py-20">
      <SlideUp className="max-w-4xl mx-auto text-center" delay={0.2}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-lg lg:text-xl font-medium text-gray-600 mb-4">
            Hello, I&apos;m
          </h4>
          <h1
            className={`${fontClass} text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-6 text-shadow-sm`}
          >
            Abba Sali
          </h1>
          <h2
            className={`${fontClass} text-3xl md:text-5xl lg:text-6xl font-light gradient-text mb-8`}
          >
            Software Engineer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating elegant solutions to complex problems. I
            love architecting software and developing beautiful user
            experiences.
          </p>
        </motion.div>
      </SlideUp>

      <SlideUp delay={0.4}>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
          <div className="flex space-x-4 sm:text-xl">
            <Link
              href="https://www.linkedin.com/in/abba-sali-aboubakar-mamate/"
              target="_blank"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <FaLinkedin size={20} className="text-blue-600" />
            </Link>
            <Link
              href="https://github.com/Asam237"
              target="_blank"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <FaGithub size={20} className="text-gray-800" />
            </Link>
            <Link
              href="https://wa.me/+237691846922?text=Hello!"
              target="_blank"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
            >
              <FaWhatsapp size={20} className="text-green-600" />
            </Link>
          </div>
          <Link
            href="https://drive.google.com/file/d/1jwXSy7uFHpWwU8HRuNSaWDIwv55Sc8wb/view?usp=drive_link"
            target="_blank"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <FaDownload size={16} />
            <span>Download CV</span>
          </Link>
        </div>
      </SlideUp>
    </header>
  );
};

export default Header;
