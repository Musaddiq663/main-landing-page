import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import ServiceDetailsArea from "./ServiceDetailsArea";

 

const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Service Details" subtitle="Service Details" />
      <ServiceDetailsArea />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default ServiceDetails;