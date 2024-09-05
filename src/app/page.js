import ControlledCarousel from "@/components/client/carouselHome";
import Footer from "@/components/client/footer";
import MainGridsHome from "@/components/client/mainGridsHome";
import Menu from "@/components/client/menu";

export default function Home() {
  return (
    <>
      <Menu />
      <ControlledCarousel />
      <MainGridsHome />
      <Footer />
    </>
  );
}