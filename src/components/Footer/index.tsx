import Image from "next/image";
import ABBASALI from "../../../public/pictures/abbasali.png";

const Footer = () => {
  return (
    <footer className="lg:mt-[200px] mx-2">
      <Image
        alt="pic"
        src={ABBASALI}
        className="h-[100px] sm:h-[160px] lg:h-[220px] xl:h-[360px] w-full mx-auto"
      />
    </footer>
  );
};

export default Footer;
