import { FaBars, FaWindowClose } from "react-icons/fa";
import cn from "clsx";
import { NunitoUiDisplay, SkylarSansBoldUiDisplay } from "@/lib/fonts";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type NavType = {
  name: string;
  path: string;
};

const navs: NavType[] = [
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Skrills",
    path: "/#skrills",
  },
  {
    name: "Experiences",
    path: "/#experiences",
  },
  {
    name: "Educations",
    path: "/#educations",
  },
  {
    name: "Selected projects",
    path: "/#selected-projects",
  },
  {
    name: "Contact",
    path: "/#contact",
  },
];

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <aside className="relative">
      <div className="absolute left-[20px] lg:left-[44px] top-[58px]">
        <div className="flex flex-col">
          <div className="flex justify-start items-center">
            <button
              className="flex xl:hidden cursor-pointer"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaWindowClose size={24} /> : <FaBars size={24} />}
            </button>
            <Link
              href={"/"}
              className={`${cn(
                NunitoUiDisplay.variable,
                NunitoUiDisplay.className
              )} text-[#181F1C] text-[16px] leading-[21.82px] font-[600] tracking-[1%] pl-4 lg:pl-0 relative group`}
            >
              Abba Sali
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#181F1C] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
          <div className="hidden xl:flex mt-[119px]">
            <ul className="flex flex-col space-y-[6px]">
              {navs.map((item, index) => (
                <Link
                  href={item.path}
                  key={index}
                  className={`${cn(
                    NunitoUiDisplay.variable,
                    NunitoUiDisplay.className
                  )} relative group font-[500] inline-block text-[#181F1C] transition duration-300 hover:text-[#000000] hover:font-[600]`}
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#181F1C] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-[#181F1C] z-50"
          >
            <div className="flex justify-start items-center absolute top-[58px] right-0 bg-[#181F1C] left-[20px]">
              <button
                className="flex xl:hidden cursor-pointer bg-[#181F1C]"
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <FaWindowClose
                    size={26}
                    className="bg-[#181F1C] text-primary"
                  />
                ) : (
                  <FaBars size={26} />
                )}
              </button>
              <Link
                href={"/"}
                className={`${cn(
                  NunitoUiDisplay.variable,
                  NunitoUiDisplay.className
                )} text-primary text-[16px] leading-[21.82px] font-[600] tracking-[1%] pl-4 lg:pl-0 relative group bg-[#181F1C]`}
              >
                Abba Sali
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#181F1C] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            <div>
              <ul className="flex flex-col space-y-[6px] mt-52 bg-[#181F1C]">
                {navs.map((item, index) => (
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    key={index}
                    className={`${cn(
                      SkylarSansBoldUiDisplay.variable,
                      SkylarSansBoldUiDisplay.className
                    )} font-[600] inline-block bg-[#181F1C] text-primary text-center uppercase text-2xl`}
                  >
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default Aside;
