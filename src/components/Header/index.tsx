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
  const renderHeaderText = (text: string) => (
    <h3
      className={`${fontClass} text-[80px] sm:text-[140px] lg:text-[200px] xl:text-[274px] xl:h-[240px] leading-[80px] sm:leading-[120px] lg:leading-[180px] xl:leading-[200px] text-[#181F1C] tracking-[2%]`}
    >
      {text}
    </h3>
  );

  return (
    <header id="/" className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <SlideUp className="xl:h-[732px] max-w-[960px] relative z-10" delay={0.3}>
        <div className="xl:h-[252px] xl:gap-[10px] mb-6">
          <h4
            className={`${cn(
              SkylarSansBoldUiDisplay.variable,
              SkylarSansBoldUiDisplay.className
            )} text-[60px] sm:text-[110px] lg:text-[140px] xl:text-[180px] font-[300] leading-[80px] sm:leading-[120px] lg:leading-[180px] xl:leading-[200px] xl:tracking-[2%] text-white text-shadow`}
          >
            Passionate
          </h4>
        </div>
        <div className="xl:h-[240px] xl:gap-[10px] mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3
              className={`${fontClass} text-[80px] sm:text-[140px] lg:text-[200px] xl:text-[274px] xl:h-[240px] leading-[80px] sm:leading-[120px] lg:leading-[180px] xl:leading-[200px] text-white tracking-[2%] gradient-text text-shadow`}
            >
              Software
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3
              className={`${fontClass} text-[80px] sm:text-[140px] lg:text-[200px] xl:text-[274px] xl:h-[240px] leading-[80px] sm:leading-[120px] lg:leading-[180px] xl:leading-[200px] text-white tracking-[2%] gradient-text text-shadow`}
            >
              engineer
            </h3>
          </motion.div>
        </div>
      </SlideUp>
      
      {/* Social network */}
      <SlideUp delay={0.3}>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-start sm:items-center mt-[40px] justify-start">
          <div className="flex space-x-4 items-center">
            <Link
              href={"https://www.linkedin.com/in/abba-sali-aboubakar-mamate/"}
              target="_blank"
              className="p-3 glass-effect rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/20 group"
            >
              <FaLinkedin size={24} className="text-white group-hover:text-blue-300" />
            </Link>
            <Link
              href={"https://github.com/Asam237"}
              target="_blank"
              className="p-3 glass-effect rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/20 group"
            >
              <FaGithub size={24} className="text-white group-hover:text-gray-300" />
            </Link>
            <Link
              href="https://wa.me/+237691846922?text=Hello!"
              target="_blank"
              className="p-3 glass-effect rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/20 group"
            >
              <FaWhatsapp size={24} className="text-white group-hover:text-green-300" />
            </Link>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://drive.google.com/file/d/1jwXSy7uFHpWwU8HRuNSaWDIwv55Sc8wb/view?usp=drive_link"
              target="_blank"
              className="inline-flex items-center space-x-2 px-6 py-3 glass-effect rounded-full text-white font-semibold transition-all duration-300 hover:bg-white/20 pulse-glow"
            >
              <FaDownload size={16} />
              <span>Download CV</span>
            </Link>
          </motion.div>
        </div>
      </SlideUp>
    </header>
  );
};

export default Header;
