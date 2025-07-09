import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import CounterAreaHomeOne from "../homes/home-1/CounterAreaHomeOne";
import PriceAreaHomeOne from "../homes/home-1/PriceAreaHomeOne";
import TeamAreaHomeOne from "../homes/home-1/TeamAreaHomeOne";
import TestimonialAreaHomeOne from "../homes/home-1/TestimonialAreaHomeOne";
import BlogAreaHomeOne from "../homes/home-2/BlogAreaHomeTwo";
import AboutAreaHomeThree from "../homes/home-3/AboutAreaHomeThree";

 

const AboutTwo = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About Us Two" subtitle="About Us Two" />
      <AboutAreaHomeThree />
      <TeamAreaHomeOne />
      <CounterAreaHomeOne style_3={true} />
      <PriceAreaHomeOne />
      <TestimonialAreaHomeOne />
      <BlogAreaHomeOne />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default AboutTwo;