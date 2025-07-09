import FooterOne from "../../../layouts/footers/FooterOne";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import ScrollTop from "../../common/ScrollTop";
import ChooseAreaHomeOne from "../home-1/ChooseAreaHomeOne";
import CounterAreaHomeOne from "../home-1/CounterAreaHomeOne";
import PriceAreaHomeOne from "../home-1/PriceAreaHomeOne";
import TeamAreaHomeOne from "../home-1/TeamAreaHomeOne";
import TestimonialAreaHomeOne from "../home-1/TestimonialAreaHomeOne";
import BlogAreaHomeOne from "../home-2/BlogAreaHomeTwo";
import BrandAreaHomeTwo from "../home-2/BrandAreaHomeTwo";
import AboutAreaHomeThree from "./AboutAreaHomeThree";
import AboutUsAreaHomeThree from "./AboutUsAreaHomeThree";
import FeatureAreaHomeThree from "./FeatureAreaHomeThree";
import HeroAreaHomeThree from "./HeroAreaHomeThree";
import ServiceAreaHomeThree from "./ServiceAreaHomeThree";

const HomeThree = () => {
  return (
    <>
      <HeaderOne />
      <HeroAreaHomeThree />
      <FeatureAreaHomeThree />
      <ServiceAreaHomeThree />
      <AboutAreaHomeThree />
      <BrandAreaHomeTwo />
      <AboutUsAreaHomeThree />
      <CounterAreaHomeOne style_2={true} />
      <PriceAreaHomeOne />
      <TestimonialAreaHomeOne />
      <ChooseAreaHomeOne />
      <TeamAreaHomeOne />
      <BlogAreaHomeOne />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default HomeThree;