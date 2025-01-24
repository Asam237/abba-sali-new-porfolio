import SlideUp from "@/Animations/SlideUp";
import { SkylarSansBoldUiDisplay } from "@/lib/fonts";
import cn from "clsx";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

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
    <header id="/">
      <SlideUp className="xl:h-[732px] max-w-[960px]" delay={0.1}>
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
      </SlideUp>
      {/* Social network */}
      <SlideUp>
        <div className="flex space-x-4 items-center mt-[40px] justify-start">
          <div className="flex space-x-3 items-center">
            <Link
              href={"https://www.linkedin.com/in/abba-sali-aboubakar-mamate/"}
              target="_blank"
              className="transition-transform transform hover:scale-110"
            >
              <FaLinkedin size={30} className="text-[#181F1C]" />
            </Link>
            <Link
              href={"https://github.com/Asam237"}
              target="_blank"
              className="transition-transform transform hover:scale-110"
            >
              <FaGithub size={30} className="text-[#181F1C]" />
            </Link>
            <Link
              href="https://wa.me/+237691846922?text=Hello!"
              target="_blank"
              className="transition-transform transform hover:scale-110"
            >
              <FaWhatsapp size={30} className="text-[#181F1C]" />
            </Link>
          </div>
          {/* <Link
            href="https://drive.google.com/file/d/1jwXSy7uFHpWwU8HRuNSaWDIwv55Sc8wb/view?usp=drive_link"
            target="_blank"
            className={`${cn(
              NunitoUiDisplay.variable,
              NunitoUiDisplay.className
            )} text-[#181F1C] text-[12px] sm:text-[14px] lg:text-[16px] tracking-[1%] font-[600] border-[2px] rounded-xl border-[#181F1C] px-2 py-0.5
          transition-transform transform hover:scale-110 flex items-center
          `}
          >
            <FaPhone className="pr-2" size={25} />
            Download a CV
          </Link> */}
        </div>
      </SlideUp>
    </header>
  );
};

export default Header;
