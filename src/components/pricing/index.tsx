import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import PriceAreaHomeOne from "../homes/home-1/PriceAreaHomeOne";

 
const Pricing = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Our Pricing" subtitle="Pricing" />
      <PriceAreaHomeOne />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Pricing;