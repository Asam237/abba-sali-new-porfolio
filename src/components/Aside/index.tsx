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
    path: "#",
  },
  {
    name: "Skills",
    path: "#",
  },
  {
    name: "Experience",
    path: "#",
  },
  {
    name: "Education",
    path: "#",
  },
  {
    name: "Selected projects",
    path: "#",
  },
  {
    name: "Contact",
    path: "#",
  },
];

const Aside = () => {
  return (
    <aside className="relative">
      <div className="absolute left-[20px] lg:left-[44px] top-[58px]">
        <div className="flex flex-col">
          <div className="flex justify-start items-center">
            <FaBars className="flex xl:hidden" size={24} />
            <h4
              className={`${cn(
                NunitoUiDisplay.variable,
                NunitoUiDisplay.className
              )} text-[#181F1C] text-[16px] leading-[21.82px] font-[600] tracking-[1%] pl-4 lg:pl-0`}
            >
              Abba sali
            </h4>
          </div>
          <div className="hidden xl:flex mt-[119px]">
            <ul className="flex flex-col space-y-1">
              {navs.map((item, index) => (
                <Link
                  href={item.path}
                  key={index}
                  className="text-[13px] sm:text-[16px] leading-[24px] tracking-[1%]"
                >
                  {item.name}
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
