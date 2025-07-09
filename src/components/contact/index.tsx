import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breadcrumb from "../common/Breadcrumb";
import ScrollTop from "../common/ScrollTop";
import ContactArea from "./ContactArea";

 

const Contact = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Contact Us" subtitle="Contact" />
      <ContactArea />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Contact;