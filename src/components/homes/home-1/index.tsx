import FooterOne from "../../../layouts/footers/FooterOne";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import ScrollTop from "../../common/ScrollTop";
import AboutAreaHomeOne from "./AboutAreaHomeOne";
import AoutUsAreaHomeOne from "./AoutUsAreaHomeOne";
import ChooseAreaHomeOne from "./ChooseAreaHomeOne";
import CounterAreaHomeOne from "./CounterAreaHomeOne";
import HeroAreaHomeOne from "./HeroAreaHomeOne";
import NewsletterAreaHomeOne from "./NewsletterAreaHomeOne";
// import PortfolioAreaHomeOne from './PortfolioAreaHomeOne';

import PriceAreaHomeOne from "./PriceAreaHomeOne";
import ServiceAreaHomeOne from "./ServiceAreaHomeOne";
import TeamAreaHomeOne from "./TeamAreaHomeOne";
import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";
import ScreenshotsSection from './ScreenshotsSection';
import FeaturesSection from "./FeaturesSection";

 

const HomeOne = () => {
  return (
    <>
       <HeaderOne />
       <HeroAreaHomeOne />
       <CounterAreaHomeOne />
       <AboutAreaHomeOne />
       <ServiceAreaHomeOne />
       <AoutUsAreaHomeOne />
       {/* <PortfolioAreaHomeOne /> */}

       <ChooseAreaHomeOne />
        <ScreenshotsSection />
        < FeaturesSection/>
       <PriceAreaHomeOne />
       <TestimonialAreaHomeOne />
       <TeamAreaHomeOne />
       <NewsletterAreaHomeOne />
       <FooterOne />
       <ScrollTop />
       
    </>
  );
};

export default HomeOne;