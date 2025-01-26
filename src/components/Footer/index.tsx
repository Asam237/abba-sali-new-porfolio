import Image from "next/image";
import ABBASALI from "../../../public/pictures/abbasali.png";
import SlideUp from "@/Animations/SlideUp";

const Footer = () => {
  return (
    <SlideUp delay={0.3} className="sm:mt-[40px]">
      <Image
        alt="pic"
        src={ABBASALI}
        className="h-[100px] sm:h-[160px] lg:h-[220px] xl:h-[360px] w-full mx-auto z-50"
      />
    </SlideUp>
  );
};

export default Footer;
