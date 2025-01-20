import { SkylarSansBoldUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import { animate, delay, motion } from "framer-motion";

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

  const textAnimation = {
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
    <header id="/">
      <motion.div
        variants={textAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="xl:h-[732px] max-w-[960px]"
      >
        <div className="xl:h-[252px] xl:gap-[10px]">
          <h4
            className={`${cn(
              SkylarSansBoldUiDisplay.variable,
              SkylarSansBoldUiDisplay.className
            )} text-[60px] sm:text-[110px] lg:text-[140px] xl:text-[180px] font-[300] leading-[80px] sm:leading-[120px] lg:leading-[180px] xl:leading-[200px] xl:tracking-[2%]`}
          >
            Passionate
          </h4>
        </div>
        <div className="xl:h-[240px] xl:gap-[10px]">
          {renderHeaderText("Software")}
          {renderHeaderText("engineer")}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
