import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import ServiceArea from "./ServiceArea";


 

const Service = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Service" subtitle="Service" />
      <ServiceArea />
      <FooterOne /> 
      <ScrollTop />
    </>
  );
};

export default Service;