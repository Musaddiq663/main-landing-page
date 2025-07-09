import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import ChooseAreaHomeOne from "../homes/home-1/ChooseAreaHomeOne";
import NewsletterAreaHomeOne from "../homes/home-1/NewsletterAreaHomeOne";
// import PortfolioAreaHomeOne from './PortfolioAreaHomeOne';
import TeamAreaHomeOne from "../homes/home-1/TeamAreaHomeOne";
import TestimonialAreaHomeOne from "../homes/home-1/TestimonialAreaHomeOne";
import BrandAreaHomeTwo from "../homes/home-2/BrandAreaHomeTwo";
import AboutArea from "./AboutArea";
import VpnDownloadSection from "../homes/home-1/VpnDownloadSection";





 

const About = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="About Us" subtitle="About Us" />
      <AboutArea />
      <BrandAreaHomeTwo />
    {/* <PortfolioAreaHomeOne /> */}
      <ChooseAreaHomeOne />
      <VpnDownloadSection />
      <TestimonialAreaHomeOne />
      <TeamAreaHomeOne />
      <NewsletterAreaHomeOne />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default About;