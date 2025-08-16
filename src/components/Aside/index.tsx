import { FaBars, FaTimes } from "react-icons/fa";
import cn from "clsx";
import { NunitoUiDisplay } from "@/lib/fonts";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SlideRight from "@/Animations/SlideRigth";

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
    name: "Projects",
    path: "/#projects",
  },
  {
    name: "Skills",
    path: "/#skills",
  },
  {
    name: "Experience",
    path: "/#experiences",
  },
];

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200"
            >
              Abba Sali
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navs.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-gray-200 md:hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navs.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Aside;