import About from "@/components/About";
import Header from "@/components/Header";
import DefaultLayout from "@/layouts/default.layout";

const Home = () => {
  return (
    <div className="bg-primary">
      <DefaultLayout className="py-[111px]">
        <div className="container mx-auto">
          <Header />
          <About className="mt-[40px] sm:mt-[60px] lg:mt-[120px] xl:mt-[165px] mb-[40px]" />
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Home;
