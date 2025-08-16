import About from "@/components/About";
import Aside from "@/components/Aside";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import DefaultLayout from "@/layouts/default.layout";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import cn from "clsx";
import { PoppinsUiDisplay } from "@/lib/fonts";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY > 300);
  };

  const fontClass = cn(PoppinsUiDisplay.variable, PoppinsUiDisplay.className);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-50 ${fontClass}`}>
      <Aside />
      <DefaultLayout className="pt-16">
        <div className="max-w-6xl mx-auto px-6">
          <Header />
          <About />
          <Project />
          <Skills />
          <Experience />
        </div>
      </DefaultLayout>
      {/* Scroll to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        >
          <FaArrowUp size={16} />
        </button>
      )}
      <Footer />
    </div>
  );
};

export default Home;