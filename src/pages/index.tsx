import { NunitoUiDisplay, SkylarSansBoldUiDisplay } from "@/lib/fonts";
import cn from "clsx";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="max-h-[732px] leading-[150px]">
        <h4
          className={`${cn(
            SkylarSansBoldUiDisplay.variable,
            SkylarSansBoldUiDisplay.className
          )} text-[100px] lg:text-[180px] font-[300]`}
        >
          Passionate
        </h4>
        <h3
          className={`${cn(
            SkylarSansBoldUiDisplay.variable,
            SkylarSansBoldUiDisplay.className
          )} text-[100px] lg:text-[180px] font-bold`}
        >
          Software
        </h3>
        <h3
          className={`${cn(
            SkylarSansBoldUiDisplay.variable,
            SkylarSansBoldUiDisplay.className
          )} text-[100px] lg:text-[180px]`}
        >
          engineer
        </h3>
      </div>
      <p
        className={`${cn(NunitoUiDisplay.variable, NunitoUiDisplay.className)}`}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit incidunt
        minus nesciunt pariatur laudantium, dolore impedit dignissimos dolorum,
        accusamus quidem veniam excepturi aperiam saepe, veritatis quibusdam
        amet repudiandae ducimus harum maiores assumenda voluptates? Corrupti
        expedita illo quis provident ex explicabo dolor fugit! Assumenda, soluta
        numquam totam accusantium nemo illum veniam voluptatibus perferendis
        earum aliquam incidunt voluptate fugit dolorem pariatur nihil
        asperiores, beatae itaque quos sunt! Quod officiis dicta deserunt culpa
        nemo sunt! Facilis tempora nemo deleniti blanditiis impedit cupiditate
        iste magni quam corrupti numquam quia iure alias quas facere, cumque
        veritatis consectetur quis doloribus quos deserunt earum inventore
        voluptas est!
      </p>
    </div>
  );
};

export default Home;
