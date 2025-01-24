import Image from "next/image";
import ABBASALI from "../../../public/pictures/abbasali.png";
import SlideUp from "@/Animations/SlideUp";

const Footer = () => {
  return (
    <SlideUp>
      <Image
        alt="pic"
        src={ABBASALI}
        className="h-[100px] sm:h-[160px] lg:h-[220px] xl:h-[360px] w-full mx-auto"
      />
    </SlideUp>
  );
};

export default Footer;
