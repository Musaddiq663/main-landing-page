import FooterOne from "../../../layouts/footers/FooterOne";
import HeaderOne from "../../../layouts/headers/HeaderOne"; 
import ChooseAreaHomeOne from "../home-1/ChooseAreaHomeOne";
import CounterAreaHomeOne from "../home-1/CounterAreaHomeOne";
// import PortfolioAreaHomeOne from './PortfolioAreaHomeOne';
import TeamAreaHomeOne from "../home-1/TeamAreaHomeOne";
import TestimonialAreaHomeOne from "../home-1/TestimonialAreaHomeOne";
import AboutAreaHomeTwo from "./AboutAreaHomeTwo";
import AboutUsAreaHomeTwo from "./AboutUsAreaHomeTwo";
import BrandAreaHomeTwo from "./BrandAreaHomeTwo";
import HeroAreaHomeTwo from "./HeroAreaHomeTwo";
import ServiceAreaHomeTwo from "./ServiceAreaHomeTwo";
import BlogAreaHomeTwo from "./BlogAreaHomeTwo";
import ScrollTop from "../../common/ScrollTop";

 

const HomeTwo = () => {
  return (
    <>
      <HeaderOne />
      <HeroAreaHomeTwo />
      <AboutAreaHomeTwo />
      <ServiceAreaHomeTwo />
      <AboutUsAreaHomeTwo />
      <BrandAreaHomeTwo />
     {/* <PortfolioAreaHomeOne /> */}

      <ChooseAreaHomeOne />
      <TestimonialAreaHomeOne />
      <TeamAreaHomeOne />
      <BlogAreaHomeTwo />
      <CounterAreaHomeOne style_2={true} />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default HomeTwo;