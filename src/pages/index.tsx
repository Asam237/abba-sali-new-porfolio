import About from "@/components/About";
import Aside from "@/components/Aside";
import Experiences from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import DefaultLayout from "@/layouts/default.layout";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY && currentScrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setLastScrollY(currentScrollY);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="bg-primary">
      <Aside />
      <DefaultLayout className="py-[111px]">
        <div className="container mx-auto">
          <Header />
          <About className="mt-[40px] sm:mt-[60px] lg:mt-[120px] xl:mt-[165px] mb-[40px]" />
          <Project />
          <Skills className="mt-[40px]" />
          <Experiences />
        </div>
      </DefaultLayout>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed rounded-full cursor-pointer bottom-[50px] right-[50px] border-2 border-[#181F1C] w-16 h-16 hidden xl:flex items-center justify-center hover:border-[3px] bg-primary z-10"
        >
          <FaArrowUp />
        </button>
      )}
      <Footer />
    </div>
  );
};

export default Home;
