import Footer from "@/components/Footer";
import Header from "@/components/Header";
import DefaultLayout from "@/layouts/default.layout";
import { NunitoUiDisplay, SkylarSansBoldUiDisplay } from "@/lib/fonts";
import cn from "clsx";

const Home = () => {
  return (
    <div className="bg-primary">
      <DefaultLayout className="py-[111px]">
        <div className="container mx-auto">
          <Header />
          <p
            className={`${cn(
              NunitoUiDisplay.variable,
              NunitoUiDisplay.className
            )}`}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            incidunt minus nesciunt pariatur laudantium, dolore impedit
            dignissimos dolorum, accusamus quidem veniam excepturi aperiam
            saepe, veritatis quibusdam amet repudiandae ducimus harum maiores
            assumenda voluptates? Corrupti expedita illo quis provident ex
            explicabo dolor fugit! Assumenda, soluta numquam totam accusantium
            nemo illum veniam voluptatibus perferendis earum aliquam incidunt
            voluptate fugit dolorem pariatur nihil asperiores, beatae itaque
            quos sunt! Quod officiis dicta deserunt culpa nemo sunt! Facilis
            tempora nemo deleniti blanditiis impedit cupiditate iste magni quam
            corrupti numquam quia iure alias quas facere, cumque veritatis
            consectetur quis doloribus quos deserunt earum inventore voluptas
            est!
          </p>
        </div>
      </DefaultLayout>
      <Footer />
    </div>
  );
};

export default Home;
