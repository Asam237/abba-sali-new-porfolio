import { NunitoUiDisplay } from "@/lib/fonts";
import cn from "clsx";

const Footer = () => {
  return (
    <footer>
      <h1
        className={`${cn(
          NunitoUiDisplay.variable,
          NunitoUiDisplay.className
        )} font-bold`}
      >
        ABBA SALI
      </h1>
    </footer>
  );
};

export default Footer;
