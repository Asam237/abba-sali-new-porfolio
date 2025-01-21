import Image from "next/image";
import ABBASALI from "../../../public/pictures/abbasali.png";
import { motion, useInView } from "framer-motion";
import { bodyAnimation, footerAnimation } from "@/utils/anims";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="hidden"
      variants={bodyAnimation}
      className="lg:mt-[200px] mx-2"
      ref={ref}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Image
        alt="pic"
        src={ABBASALI}
        className="h-[100px] sm:h-[160px] lg:h-[220px] xl:h-[360px] w-full mx-auto"
      />
    </motion.div>
  );
};

export default Footer;
