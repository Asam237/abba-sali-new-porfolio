import { FaBars } from "react-icons/fa";
import cn from "clsx";
import { NunitoUiDisplay } from "@/lib/fonts";
import Link from "next/link";

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
  return (
    <aside className="relative">
      <div className="absolute left-[20px] lg:left-[44px] top-[58px]">
        <div className="flex flex-col">
          <div className="flex justify-start items-center">
            <FaBars className="flex xl:hidden" size={24} />
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
    </aside>
  );
};

export default Aside;
